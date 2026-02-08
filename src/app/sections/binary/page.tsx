import { Card, Callout, Bullets, Bullet } from "@/components/NoteBlocks";



export default function BinarySectionPage() {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* LEFT */}
        <div className="space-y-6 max-w-none">
          {/* Header */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Computer Organization • Binary & Number Representation
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">
              Using Bits to Represent Things
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-300">


            </div>

            <p className="text-neutral-300 leading-relaxed">
              In this section we review ways in which different things can be
              represented in a computer. Everything is interpreted as{" "}
              <span className="font-semibold">0</span> or{" "}
              <span className="font-semibold">1</span>, but we still represent
              alphabets, integers, strings, and (later) real numbers.
            </p>
          </header>

          <Callout label="Big idea">
            The computer only “knows” bit patterns. Meaning (letters, numbers,
            etc.) comes from the mapping we choose and the operations we apply.
          </Callout>

            <Card title="Self-Assessment Quiz">
            <p className="text-sm text-neutral-300 leading-relaxed">
                Fast check questions for Section 2. Answer first, then reveal solutions.
            </p>

            <a
                href="/sections/binary/quiz"
                className="mt-3 inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            >
                Start Quiz →
            </a>
            </Card>


          {/* Bits -> 2^N */}
          <div id="bits">
            <Card title="Bits, groups of bits, and meaning">
              <p className="text-sm text-neutral-300 leading-relaxed">
                A bit is a single binary digit (0 or 1). The key mechanism to
                represent “more than two things” is to use{" "}
                <span className="font-semibold">multiple bits</span> together.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Example mapping (A/B/C/D)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  You can design the interpretation so that:
                </p>

                <div className="mt-3 grid gap-2 text-sm text-neutral-200">
                  <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                    <span className="font-mono">00</span>
                    <span>A</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                    <span className="font-mono">01</span>
                    <span>B</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                    <span className="font-mono">10</span>
                    <span>C</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                    <span className="font-mono">11</span>
                    <span>D</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-neutral-500">
                  Internally the computer “knows” 00/01/10/11. The meaning A/B/C/D
                  is our interpretation.
                </p>
              </div>

              <Callout label="Rule">
                By using <span className="font-semibold">N</span> bits we can
                represent up to <span className="font-semibold">2^N</span>{" "}
                different things. (2 bits → 4 things, 8 bits → 256 things)
              </Callout>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Intrinsic datatypes
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Some operations assume specific meaning for data (e.g.,
                  addition interprets inputs as numbers). These supported types
                  are “intrinsic datatypes”. Many processors support integer
                  arithmetic directly; many also support floating-point (later).
                </p>
              </div>
            </Card>
          </div>

          {/* K/M/G/T */}
          <div id="kmgt">
            <Card title="K / M / G / T (binary scale)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                In binary systems:
              </p>
              <Bullets>
                <Bullet>
                  <span className="font-semibold">1K</span> = 2^10
                </Bullet>
                <Bullet>
                  <span className="font-semibold">1M</span> = 2^20
                </Bullet>
                <Bullet>
                  <span className="font-semibold">1G</span> = 2^30
                </Bullet>
                <Bullet>
                  <span className="font-semibold">1T</span> = 2^40
                </Bullet>
                <Bullet>
                  <span className="font-semibold">1P</span> = 2^50
                </Bullet>
              </Bullets>

              <Callout label="Interpretation">
                K is how many things you can represent with 10 bits, M with 20,
                G with 30, and so on.
              </Callout>
            </Card>
          </div>

          {/* MSB/LSB */}
          <div id="msb-lsb">
            <Card title="MSB and LSB">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Bits are written left→right (e.g., <span className="font-mono">10101010</span>).
                Leftmost is the <span className="font-semibold">MSB</span> (Most
                Significant Bit), rightmost is the{" "}
                <span className="font-semibold">LSB</span> (Least Significant
                Bit).
              </p>
            </Card>
          </div>

          {/* Unsigned / positional representation */}
          <div id="unsigned">
            <Card title="Representing physical (unsigned) numbers">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Any mapping of bit patterns to numbers could work as long as
                everyone interprets it the same way. In practice, we use a
                positional system (like decimal), but with base 2.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Decimal reminder
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  <span className="font-mono">956</span> means{" "}
                  <span className="font-mono">9×10^2 + 5×10^1 + 6×10^0</span>.
                  This is positional representation.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Binary example
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  <span className="font-mono">1010₂</span> ={" "}
                  <span className="font-mono">1×2^3 + 0×2^2 + 1×2^1 + 0×2^0</span>{" "}
                  = 8 + 2 = 10₁₀.
                </p>
              </div>

              <Callout label="General rule">
                For an n-bit number B(n−1)…B(0), the value is{" "}
                <span className="font-mono">
                  Σ B(i)×2^i
                </span>{" "}
                (from i=0 to n−1).
              </Callout>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Addition process (same idea as decimal)
                </p>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{` 0100
+0110
-----
 1010`}
                </pre>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Work right→left. Each column produces a sum bit and a carry
                  bit (each is 0 or 1).
                </p>
              </div>
            </Card>
          </div>

          {/* Fixed length / overflow */}
          <div id="fixed-length">
            <Card title="Fixed length representation (precision, overflow, modulo)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                On paper, you can always write more digits. In a computer,
                storage and wires are fixed width, so there is a maximum size
                quantity a unit can directly store/operate on.
              </p>

              <Bullets>
                <Bullet>
                  Early systems: 8-bit, then 16-bit, now commonly 64-bit.
                </Bullet>
                <Bullet>
                  For this course we’ll mostly focus on 32-bit or shorter.
                </Bullet>
              </Bullets>

              <Callout label="Unsigned range (N bits)">
                0 … (2^N − 1). For 32-bit: 0 … (2^32 − 1).
              </Callout>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Overflow + modulo arithmetic
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  If a result needs more bits than you have, you get overflow.
                  Many adders effectively compute{" "}
                  <span className="font-mono">(a + b) MOD 2^N</span> and wrap
                  around (like an odometer).
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  C/C++ types (typical PC example)
                </p>
                <Bullets>
                  <Bullet>
                    <span className="font-mono">unsigned short</span> ~ 16-bit
                  </Bullet>
                  <Bullet>
                    <span className="font-mono">unsigned int</span> ~ 32-bit
                  </Bullet>
                  <Bullet>
                    <span className="font-mono">unsigned long</span> ~ 32-bit (varies by system)
                  </Bullet>
                  <Bullet>
                    <span className="font-mono">unsigned long long</span> ~ 64-bit
                  </Bullet>
                </Bullets>
              </div>

              <Callout label="Leading zeroes">
                Fixed-width values may include leading zeros (which don’t change
                the value).
              </Callout>
            </Card>
          </div>

          {/* Signed numbers / 2's complement */}
          <div id="signed">
            <Card title="Signed (negative) integers">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Computers need a bit-level way to represent negatives. Sign-magnitude is easy to understand but inconvenient for hardware; 2’s complement is used in practice.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Sign-magnitude (conceptual, not common in practice)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  MSB is sign, remaining bits are magnitude. Example (5-bit):
                  <span className="font-mono"> S W3 W2 W1 W0</span>.
                  Circuits for addition become complicated (if-then-else behavior).
                </p>
              </div>

              <Callout label="2’s complement (used in practice)">
                Works nicely with normal adders that do modulo arithmetic.
              </Callout>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Range (n bits)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Signed integers represent:
                </p>
                <p className="mt-2 text-sm text-neutral-200 font-mono">
                  -2^(n-1) … (2^(n-1) - 1)
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  There’s an asymmetry: one more negative value because one encoding is used for zero.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  How to interpret a signed bit pattern
                </p>
                <Bullets>
                  <Bullet>
                    If MSB = 0 → positive, interpret normally.
                  </Bullet>
                  <Bullet>
                    If MSB = 1 → negative, take 2’s complement to find magnitude.
                  </Bullet>
                </Bullets>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                    <p className="text-xs font-semibold text-neutral-200">
                      Way #1: NOT + 1
                    </p>
                    <p className="mt-2 text-sm text-neutral-300">
                      2’s complement(A) = NOT(A) + 1
                    </p>
                  </div>

                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                    <p className="text-xs font-semibold text-neutral-200">
                      Way #2: copy-until-first-1 then flip
                    </p>
                    <p className="mt-2 text-sm text-neutral-300">
                      From right: copy bits until first 1 (inclusive), then invert remaining bits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Overflow/underflow intuition
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Adding opposite signs can’t overflow. Overflow/underflow may
                  happen when adding same-sign numbers and result flips sign.
                  Circuit-friendly check: carry into MSB differs from carry out.
                </p>
              </div>

              <Callout label="C/C++">
                Signed 2’s complement types: <span className="font-mono">short</span>,{" "}
                <span className="font-mono">int</span>,{" "}
                <span className="font-mono">long</span> (no “unsigned”).
              </Callout>
            </Card>
          </div>

          {/* Sign extension / zero extension */}
          <div id="extension">
            <Card title="Sign extension and zero extension">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Operations between different bit-widths need a conversion step
                to preserve meaning.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Sign extension (signed)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Copy the MSB into all new higher bits.
                </p>

                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`i16 = 0000 0001 0000 0000
i8  =           1111 1111  (=-1)

sign-extend i8 -> 1111 1111 1111 1111

add:
  0000 0001 0000 0000
+ 1111 1111 1111 1111
= 0000 0000 1111 1111  (carry discarded)`}
                </pre>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Zero extension (unsigned)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Fill new higher bits with 0.
                </p>
              </div>
            </Card>
          </div>

          {/* Hex / octal */}
          <div id="hex-octal">
            <Card title="Hexadecimal and octal (human-friendly binary)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Writing long binary constants is error-prone. Hex and octal are
                compact representations for humans.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Hex (base 16)
                </p>
                <Bullets>
                  <Bullet>
                    Digits: 0–9, A–F (10–15)
                  </Bullet>
                  <Bullet>
                    16 = 2^4 → 1 hex digit ↔ 4 bits
                  </Bullet>
                  <Bullet>
                    C hex constants use prefix <span className="font-mono">0x</span>
                  </Bullet>
                </Bullets>

                <div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                  <p className="text-sm text-neutral-300">
                    Example: <span className="font-mono">0xdeafbeef</span>
                  </p>
                  <pre className="mt-2 overflow-x-auto text-sm text-neutral-200">
{`0000 1111 1010 1011 1011 1110 1110 1111
0    f    a    b    b    e    e    f`}
                  </pre>
                </div>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  The leftmost hex digit can represent 1–4 bits depending on the
                  true bit-width — you need context to know the intended width.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Octal (base 8)
                </p>
                <Bullets>
                  <Bullet>
                    1 octal digit ↔ 3 bits
                  </Bullet>
                  <Bullet>
                    In C, octal constants use prefix <span className="font-mono">0</span> (e.g., 041)
                  </Bullet>
                </Bullets>
              </div>

              <Callout label="Key clarification">
                The machine never “has” hex or octal numbers. Those are human
                representations; compilers translate them into binary.
              </Callout>
            </Card>
          </div>

          {/* ASCII, strings */}
          <div id="ascii-strings">
            <Card title="Things other than integers: ASCII and strings">
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">ASCII</p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    ASCII uses 7 bits (or 8 bits with upper bit 0) to represent
                    characters, digits, and punctuation.
                  </p>
                  <Bullets>
                    <Bullet>Space is 32</Bullet>
                    <Bullet>Digit '0' is 48, '1' is 49, ...</Bullet>
                    <Bullet>'A' is 65, 'B' is 66, ...</Bullet>
                    <Bullet>
                      Numbers &lt; 32 are control characters (e.g., control-A = 1)
                    </Bullet>
                  </Bullets>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Strings (two common representations)
                  </p>
                  <Bullets>
                    <Bullet>
                      Zero-terminated: characters then a final 0 byte (C default)
                    </Bullet>
                    <Bullet>
                      Length + characters: first byte holds length (Pascal-style)
                    </Bullet>
                  </Bullets>
                  <p className="mt-2 text-xs text-neutral-500">
                    Storage location is discussed later (memory section).
                  </p>
                </div>

                <Callout label="FYI: UTF formats">
                  UTF-X encodings exist for many languages; details are beyond
                  this course scope.
                </Callout>
              </div>
            </Card>
          </div>

          {/* Fixed vs variable length */}
          <div id="fixed-variable">
            <Card title="Fixed vs variable length representations">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Many datatypes have fixed bit-widths (8, 16, 32…). Strings show
                variable-length approaches (termination marker vs explicit length).
              </p>

              <Callout label="Bigger picture">
                Compression/encoding methods often treat data as a bitstream and
                use variable-length codes to pack more information into fewer bits.
              </Callout>
            </Card>
          </div>

          {/* Real numbers */}
          <div id="real">
            <Card title="Real numbers: fixed-point and floating-point">
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Fixed-point (idea)
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    The “point” position is fixed. Example 4-bit value{" "}
                    <span className="font-mono">1100</span> interpreted as{" "}
                    <span className="font-mono">0.1100₂</span> = 0.75.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    IEEE 754 floating-point (FP32 / E8M23)
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    32-bit format: sign (1 bit), exponent (8 bits), mantissa (23 bits).
                  </p>

                  <div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
                    <p className="font-mono">
                      S | EEEEEEEE | MMMMMMMMMMMMMMMMMMMMMMM
                    </p>
                    <p className="mt-2 text-neutral-300">
                      Value (normal case):{" "}
                      <span className="font-mono">(-1)^S × 2^(E-127) × 1.M</span>
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                      <p className="text-xs font-semibold text-neutral-200">
                        Example 1
                      </p>
                      <p className="mt-2 text-sm text-neutral-300 font-mono">
                        1 10000001 10000000000000000000000
                      </p>
                      <p className="mt-2 text-sm text-neutral-300">
                        S=1, E=129 → 2^(2), M=1.1 → -6.0
                      </p>
                    </div>

                    <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                      <p className="text-xs font-semibold text-neutral-200">
                        Example 2
                      </p>
                      <p className="mt-2 text-sm text-neutral-300 font-mono">
                        0 01111110 11000000000000000000000
                      </p>
                      <p className="mt-2 text-sm text-neutral-300">
                        E=126 → 2^(-1), M=1.11 → 0.875
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-neutral-500">
                    IEEE special cases (denormals, NaN, ±infinity, ±0) exist but are beyond this course scope.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Other floating formats (FYI)
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    FP64 (double), FP16 (half), bfloat16, and newer low-precision formats exist (e.g., FP8 proposals).
                  </p>
                </div>

                <Callout label="C/C++">
                  <span className="font-mono">float</span> is typically 32-bit
                  single precision (FP32). <span className="font-mono">double</span> is typically 64-bit (FP64).
                </Callout>
              </div>
            </Card>
          </div>

          {/* Float hex program */}
          <div id="float-program">
            <Card title="Program: inspect float representation (x86 example)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                This program treats a <span className="font-mono">float</span>{" "}
                as an unsigned int pointer to print its raw representation.
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-200">
{`float f = 8.25;
unsigned int *c;

main ()
{
  c = (unsigned int *) & f; // view f as unsigned int (no numerical conversion)
  printf ("%f is represented as 0x%08x\\n", f, *c);
  printf ("The S bit is %d\\n", (*c) >> 31);
  printf ("The exponent is %d\\n", ((*c) >> 22) & 0xff);
  printf ("The mantissa is 0x%x\\n", (*c) & 0x3fffff);
}`}
              </pre>

              <Callout label="Practice suggestion">
                Change <span className="font-mono">f</span>, run it, and try to
                convert the bits back to decimal by hand to verify.
              </Callout>

              <p className="text-xs text-neutral-500">
                Note: passing floats to functions often promotes them to double.
                64-bit constants may need the <span className="font-mono">ULL</span> suffix.
              </p>
            </Card>
          </div>

          {/* Decimal encoded floating point */}
          <div id="decimal-fp">
            <Card title="Decimal encoded floating point (FYI)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                There are floating point formats that use base10 digits (0–9),
                often encoded using 4 bits each, to preserve exactness in decimal
                calculations. Details are beyond course scope.
              </p>
            </Card>
          </div>

          {/* Conversions */}
          <div id="convert-int">
            <Card title="Converting from decimal to binary: unsigned integers">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Repeatedly divide by 2, record the remainder. The binary digits
                are the remainders in order (first remainder becomes MSB per the note’s description).
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Example: 97₁₀ → binary
                </p>

                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`97 / 2 = 48 rem 1
48 / 2 = 24 rem 0
24 / 2 = 12 rem 0
12 / 2 =  6 rem 0
 6 / 2 =  3 rem 0
 3 / 2 =  1 rem 1
 1 / 2 =  0 rem 1

=> 1100001₂ (7 bits)`}
                </pre>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Example: -97 (needs sign bit)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Extend to 8 bits then take 2’s complement:
                </p>

                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`97  (7b)  = 1100001
97  (8b)  = 0110 0001
-97 (8b)  = 1001 1111

-97 (16b) = 1111 1111 1001 1111 (sign-extended)`}
                </pre>
              </div>

              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                For positive numbers, extending to more bits is just adding leading zeros.
              </p>
            </Card>
          </div>

          <div id="convert-frac">
            <Card title="Converting fractional decimal to binary">
              <p className="text-sm text-neutral-300 leading-relaxed">
                For a number of the form 0.Y, repeatedly multiply by 2. Each step
                produces either 1.W or 0.W; the integer parts become the binary
                digits after the dot.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Example: 0.625
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`0.625×2 = 1.25  -> 1
0.25 ×2 = 0.5   -> 0
0.5  ×2 = 1.0   -> 1

=> 0.101₂`}
                  </pre>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Example: 0.3 (repeats)
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`0.3×2 = 0.6 -> 0
0.6×2 = 1.2 -> 1
0.2×2 = 0.4 -> 0
0.4×2 = 0.8 -> 0
0.8×2 = 1.6 -> 1
... repeats (can't be finite in binary)`}
                  </pre>
                </div>
              </div>

              <Callout label="Key idea">
                Some decimals cannot be represented exactly with a finite number
                of binary digits — you can only approximate them with limited precision.
              </Callout>
            </Card>
          </div>

          <div id="convert-full">
            <Card title="Example: converting 37.64 to binary + IEEE-style form">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Convert integer and fractional parts separately, then combine.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Integer part: 37
                </p>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`37 /2 = 18 rem 1
18 /2 =  9 rem 0
 9 /2 =  4 rem 1
 4 /2 =  2 rem 0
 2 /2 =  1 rem 0
 1 /2 =  0 rem 1

=> 100101₂`}
                </pre>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  Fractional part: 0.64 (eventually repeats)
                </p>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Not representable exactly with finite bits; next digits given as 010 (per note).
                </p>
              </div>

              <Callout label="Normalized form shown in the note">
                <span className="font-mono">
                  1.00101101000111101011111 × 2^5
                </span>
              </Callout>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm font-semibold text-neutral-100">
                  IEEE-style fields 
                </p>
                <Bullets>
                  <Bullet>S = 0</Bullet>
                  <Bullet>
                    E − 127 = 5 → E = 132 = <span className="font-mono">1000 0100</span>
                  </Bullet>
                  <Bullet>
                    M = <span className="font-mono">0010 1101 0001 1110 1011 111</span> (23 bits)
                  </Bullet>
                </Bullets>

                <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-200">
{`0 1000 0100 0010 1101 0001 1110 1011 111`}
                </pre>
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">
                Quick Nav
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li><a className="hover:text-white" href="#bits">Bits → 2^N</a></li>
                <li><a className="hover:text-white" href="#kmgt">K / M / G / T</a></li>
                <li><a className="hover:text-white" href="#msb-lsb">MSB / LSB</a></li>
                <li><a className="hover:text-white" href="#unsigned">Unsigned numbers</a></li>
                <li><a className="hover:text-white" href="#fixed-length">Fixed length + overflow</a></li>
                <li><a className="hover:text-white" href="#signed">2’s complement</a></li>
                <li><a className="hover:text-white" href="#extension">Sign/zero extension</a></li>
                <li><a className="hover:text-white" href="#hex-octal">Hex + octal</a></li>
                <li><a className="hover:text-white" href="#ascii-strings">ASCII + strings</a></li>
                <li><a className="hover:text-white" href="#fixed-variable">Fixed vs variable</a></li>
                <li><a className="hover:text-white" href="#real">Real numbers (FP)</a></li>
                <li><a className="hover:text-white" href="#float-program">Float program</a></li>
                <li><a className="hover:text-white" href="#convert-int">Decimal→binary (int)</a></li>
                <li><a className="hover:text-white" href="#convert-frac">Decimal→binary (frac)</a></li>
                <li><a className="hover:text-white" href="#convert-full">37.64 example</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">
                Study Check (fast)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  What does 2^N mean in “things representable”?
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  Unsigned vs signed range for N bits?
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  How do you get 2’s complement quickly?
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  Why hex is convenient (16 = 2^4)?
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
