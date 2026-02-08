"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card, Callout } from "@/components/NoteBlocks";

type ChoiceKey = "A" | "B" | "C" | "D" | "E";

type Question = {
  id: number;
  prompt: string;
  choices: Record<ChoiceKey, string>;
  correct: ChoiceKey;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt:
      "How many bits will be used to represent the following variable in NIOS II?\n\nunsigned int a = 3;",
    choices: {
      A: "32",
      B: "8",
      C: "16",
      D: "64",
      E: "3",
    },
    correct: "A",
    explanation:
      "On NIOS II (and most systems used in this course), unsigned int is 32 bits.",
  },
  {
    id: 2,
    prompt:
      "How many bits will be used to represent this variable in NIOS II?\n\nshort k = 32;",
    choices: {
      A: "16",
      B: "32",
      C: "64",
      D: "8",
      E: "5",
    },
    correct: "A",
    explanation: "short is 16 bits.",
  },
  {
    id: 3,
    prompt:
      "How many bits will be used to represent the following variable in NIOS II?\n\nchar k = 10;",
    choices: {
      A: "8",
      B: "16",
      C: "32",
      D: "64",
      E: "4",
    },
    correct: "A",
    explanation: "char is 1 byte = 8 bits.",
  },
  {
    id: 4,
    prompt:
      "How many bits will be used to represent the following variable in the IEEE 754 format?\n\nfloat x = 1.33;",
    choices: {
      A: "32",
      B: "16",
      C: "64",
      D: "128",
      E: "9",
    },
    correct: "A",
    explanation: "IEEE 754 single-precision float uses 32 bits.",
  },
  {
    id: 5,
    prompt:
      "The IEEE 754 format uses for this variable?\n\ndouble h = 1.333;",
    choices: {
      A: "64",
      B: "32",
      C: "128",
      D: "256",
      E: "18",
    },
    correct: "A",
    explanation: "IEEE 754 double-precision uses 64 bits.",
  },
  {
    id: 6,
    prompt:
      "What is the exact, binary representation of:\n\nunsigned char = 33;",
    choices: {
      A: "None of these",
      B: "0011 0011",
      C: "0000 1001",
      D: "10 0001",
      E: "1111",
    },
    correct: "D",
    explanation:
      "33 decimal = 0b0010_0001. Option D is effectively writing 10 0001 (missing leading zeros).",
  },
  {
    id: 7,
    prompt:
      "What is the exact, binary representation of:\n\nchar i = -5",
    choices: {
      A: "1111 1011",
      B: "1000 0101",
      C: "10101",
      D: "0000 0101",
      E: "None of those shown",
    },
    correct: "A",
    explanation:
      "In 8-bit two’s complement: +5 = 0000_0101 → invert = 1111_1010 → +1 = 1111_1011.",
  },
  {
    id: 8,
    prompt:
      "What is the exact, binary representation of:\n\na = b + c; where:\nunsigned char a;\nunsigned char b = 128;\nunsigned char c = 128;",
    choices: {
      A: "0000 0000",
      B: "1111 1111",
      C: "1000 0000",
      D: "256",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "Unsigned char is modulo 256. 128 + 128 = 256 → wraps to 0 → 0000_0000.",
  },
  {
    id: 9,
    prompt:
      "What is the exact, binary representation of:\n\na = b + c; where\nchar a;\nchar b = -3;\nchar c = -128;",
    choices: {
      A: "0111 1101",
      B: "1000 0011",
      C: "1111 1111",
      D: "1000 0001",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "8-bit wrap: -3 is 0xFD, -128 is 0x80. 0xFD + 0x80 = 0x17D → keep low 8 bits → 0x7D = 0111_1101.",
  },
  {
    id: 10,
    prompt:
      "What is the exact, binary representation of:\n\na = b + c; where:\nshort a;\nshort b = -2;\nchar c = -128;",
    choices: {
      A: "1111 1111 0111 1110",
      B: "0111 1110",
      C: "1111 1111 1111 1111",
      D: "1000 0000 1000 0010",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "b = -2 = 0xFFFE (16-bit). c = -128 (8-bit) sign-extends to 0xFF80. Sum = 0xFF7E = 1111_1111_0111_1110.",
  },
  {
    id: 11,
    prompt:
      "What is the exact, binary representation of:\n\nunsigned char c = 0xf0;",
    choices: {
      A: "1111 0000",
      B: "1111 0000",
      C: "1111",
      D: "1100 1100",
      E: "Not shown",
    },
    correct: "A",
    explanation: "0xF0 in binary is 1111_0000.",
  },
  {
    id: 12,
    prompt:
      "What is the exact, binary representation of:\n\nchar c = 010;",
    choices: {
      A: "0000 1000",
      B: "0000 1010",
      C: "0001 0000",
      D: "1010",
      E: "1 0000",
    },
    correct: "A",
    explanation:
      "Leading 0 means octal in C. 010₈ = 8₁₀ = 0000_1000 (8-bit).",
  },
  {
    id: 13,
    prompt:
      "What is the exact, binary representation of:\n\na = b + c; where\nchar a;\nchar b = '0';\nchar c = '4';",
    choices: {
      A: "0110 0100",
      B: "0000 0100",
      C: "0110 0000",
      D: "0000 0100",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "'0' = 48 (0x30), '4' = 52 (0x34). Sum = 100 (0x64) = 0110_0100.",
  },
  {
    id: 14,
    prompt:
      "What is the exact, binary representation of:\n\na = b + c; where\nchar a;\nchar b = '0';\nchar c = 4;",
    choices: {
      A: "0011 0100",
      B: "0110 0100",
      C: "1100 0100",
      D: "0000 0100",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "'0' = 48 (0x30). 48 + 4 = 52 (0x34) = 0011_0100.",
  },
  {
    id: 15,
    prompt:
      "What is the exact, binary representation of:\n\na = b; where\nshort a;\nchar b = -2;",
    choices: {
      A: "1111 1111 1111 1110",
      B: "0000 0000 1111 1110",
      C: "1111 1110 0000 0000",
      D: "1111 1110",
      E: "1000 0010",
    },
    correct: "A",
    explanation:
      "Assigning signed char to short uses sign extension: -2 (8-bit) = 1111_1110 → 16-bit = 1111_1111_1111_1110.",
  },
  {
    id: 16,
    prompt:
      "What is the exact, binary representation of:\n\na = b; where\nshort a;\nchar b = 2;",
    choices: {
      A: "0000 0000 0000 0010",
      B: "1111 1111 0000 0010",
      C: "0000 0010 0000 0000",
      D: "1111 1111 1111 1100",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "Positive values extend with zeros: 2 = 0000_0010 → 16-bit = 0000_0000_0000_0010.",
  },
  {
    id: 17,
    prompt:
      "What is the exponent in binary of float f? f in hexadecimal is 0xf8830000",
    choices: {
      A: "1111 0001",
      B: "1110 0010",
      C: "1111 1000",
      D: "1110 0010",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "IEEE754 float: sign(1) + exponent(8) + mantissa(23). 0xF8830000 → exponent bits are 0b11110001.",
  },
  {
    id: 18,
    prompt:
      "What is the mantissa in binary of float f? f in hexadecimal is 0xf8830000",
    choices: {
      A: "0001 100...0",
      B: "0011 0...0",
      C: "0110 0...0",
      D: "1000 1000 1100 0...0",
      E: "Not shown",
    },
    correct: "C",
    explanation:
      "Mantissa is the bottom 23 bits. 0xF8830000 has mantissa starting with 0110 followed by zeros → 0110 0...0.",
  },
  {
    id: 19,
    prompt:
      "What is the exact, binary representation of:\n\nfloat f = 24.4;",
    choices: {
      A: "0x41c3 3333",
      B: "0xd1c3 3333",
      C: "0x0018 4000",
      D: "0x0184 0000",
      E: "Not shown",
    },
    correct: "A",
    explanation:
      "24.4 in IEEE754 single precision is 0x41C33333 (common known encoding).",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function BinaryQuizPage() {
  const [selected, setSelected] = useState<Record<number, ChoiceKey | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const total = QUESTIONS.length;

  const answeredCount = useMemo(() => {
    return QUESTIONS.reduce(
      (acc, q) => acc + (selected[q.id] ? 1 : 0),
      0
    );
  }, [selected]);

  const score = useMemo(() => {
    return QUESTIONS.reduce((acc, q) => {
      const pick = selected[q.id];
      return acc + (pick && pick === q.correct ? 1 : 0);
    }, 0);
  }, [selected]);

  const revealAll = () => {
    const map: Record<number, boolean> = {};
    for (const q of QUESTIONS) map[q.id] = true;
    setRevealed(map);
  };

  const reset = () => {
    setSelected({});
    setRevealed({});
  };

  return (
    <main className="mx-auto max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* LEFT */}
        <div className="space-y-6 max-w-none">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Section 2 • Self-Assessment
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">
              Quiz (NIOS II + Representation)
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              Select an answer, then reveal to confirm. This is designed to match
              the course-style questions.
            </p>
          </header>

          <Callout label="How to use this">
            Do it like a real quiz: pick first, then reveal. If you miss one,
            read the explanation and retry later.
          </Callout>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={revealAll}
              className="inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            >
              Reveal all
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            >
              Reset
            </button>
            <span className="text-sm text-neutral-400">
              Answered: {answeredCount}/{total} • Score: {score}/{total}
            </span>
          </div>

          <Card title="Questions">
            <div className="space-y-4">
              {QUESTIONS.map((q) => {
                const pick = selected[q.id] ?? null;
                const isRevealed = !!revealed[q.id];

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm text-neutral-500">Question {q.id}</p>
                        <pre className="mt-2 whitespace-pre-wrap text-sm text-neutral-100 leading-relaxed font-sans">
                          {q.prompt}
                        </pre>
                      </div>

                      <button
                        onClick={() =>
                          setRevealed((r) => ({ ...r, [q.id]: !r[q.id] }))
                        }
                        className="shrink-0 rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 py-2 text-xs text-neutral-200 hover:bg-neutral-900 transition"
                      >
                        {isRevealed ? "Hide" : "Reveal"}
                      </button>
                    </div>

                    <div className="mt-4 grid gap-2">
                      {(Object.keys(q.choices) as ChoiceKey[]).map((key) => {
                        const isPicked = pick === key;
                        const isCorrect = q.correct === key;

                        const showCorrect = isRevealed && isCorrect;
                        const showWrong = isRevealed && isPicked && !isCorrect;

                        return (
                          <button
                            key={key}
                            onClick={() => setSelected((s) => ({ ...s, [q.id]: key }))}
                            className={cx(
                              "w-full text-left rounded-xl border px-4 py-3 transition",
                              "bg-neutral-950 border-neutral-800 hover:bg-neutral-900/40",
                              isPicked && "border-neutral-600",
                              showCorrect && "border-emerald-500/60 bg-emerald-500/10",
                              showWrong && "border-rose-500/60 bg-rose-500/10"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={cx(
                                  "mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs",
                                  "border-neutral-700 text-neutral-200",
                                  showCorrect && "border-emerald-500/60 text-emerald-200",
                                  showWrong && "border-rose-500/60 text-rose-200"
                                )}
                              >
                                {key}
                              </span>
                              <span className="text-sm text-neutral-200 leading-relaxed">
                                {q.choices[key]}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {isRevealed && (
                      <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                        <p className="text-sm text-neutral-200">
                          <span className="font-semibold">Correct:</span>{" "}
                          {q.correct} — {q.choices[q.correct]}
                        </p>
                        <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/sections/binary"
                className="inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
              >
                ← Back to Section 2
              </Link>

            </div>
          </Card>
        </div>

        {/* RIGHT */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">Progress</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Answered: <span className="text-neutral-100">{answeredCount}</span> /{" "}
                {total}
                <br />
                Score: <span className="text-neutral-100">{score}</span> / {total}
              </p>

              <div className="mt-4 h-2 w-full rounded-full bg-neutral-800">
                <div
                  className="h-2 rounded-full bg-neutral-200"
                  style={{
                    width: `${Math.round((answeredCount / total) * 100)}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-neutral-500">
                (Progress bar = answered, not correctness.)
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">
                Tiny reminder
              </h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                If something feels “unfair”, it’s usually one of these:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  modulo overflow (wrap)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  sign extension vs zero extension
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  ASCII vs numeric values
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
