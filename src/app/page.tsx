import Link from "next/link";

const nav = [
  { href: "/sections/intro", label: "1. Introduction" },
  { href: "/sections/binary", label: "2. Binary & Number Representation" },
];

export default function Home() {
  return (
    <>
      {/* Mobile header (keep this; AppShell sidebar is hidden on mobile) */}
      <div className="md:hidden mb-6">
        <h2 className="text-lg font-semibold">ECE243 Companion</h2>
        <div className="mt-3 grid gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Course header */}
      <div className="max-w-3xl">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            University of Toronto
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            Computer Organization
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-300">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-2.5 py-1">
              ECE243
            </span>
          </div>

          <p className="mt-2 text-neutral-400 leading-relaxed">
            A cleaner companion for reviewing key concepts. Use the sidebar to
            jump into Chapters 1–2.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4">
          {/* Warning */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 items-center rounded-full border border-neutral-800 bg-neutral-950 px-3 text-xs font-semibold text-neutral-200">
                Warning
              </span>
              <span className="text-xs text-neutral-500">
                Source note from the course site
              </span>
            </div>

            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              There may be errors or omissions in the notes that follow and of
              course I’m responsible for them. If you do spot an error please
              let me know. There are no intentional errors in the notes.
              Irrespective of any typos and other errors, you are responsible
              for the correct answers to questions and problems.
            </p>
          </div>

          {/* CPULATOR */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <h2 className="text-sm font-semibold text-neutral-200">
              Try Nios V outside the labs
            </h2>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              If you want to experiment with NIOS V programs outside of the
              labs, consider using CPULATOR or purchasing a DE1-SOC board.
            </p>

            <a
              href="https://cpulator.01xz.net/?sys=rv32-de1soc"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            >
              Open CPULATOR →
            </a>
          </div>

          {/* NIOS V switch note */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <h2 className="text-sm font-semibold text-neutral-200">
              Switching to NIOS V (important)
            </h2>

            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              This year the course is switching to NIOS V. Some notes are being
              updated from NIOS II (very similar). Both are RISC-based
              load/store architectures.
            </p>

            <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                If you see registers like <span className="font-mono">r8</span>{" "}
                or instructions like <span className="font-mono">movia</span>,
                that section may not be updated yet. Notes not updated are
                marked <span className="font-mono">(TODO)</span> and are not
                essential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
