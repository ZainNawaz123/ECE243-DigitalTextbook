import { Card, Callout, Bullets, Bullet } from "@/components/NoteBlocks";

export default function IntroPage() {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* LEFT: main content */}
        <div className="space-y-6 max-w-none">
          {/* Header */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              1st Lecture
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">
              Introduction
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              This note is not like the other ones. It’s more of an overview of
              what will be covered in the lecture. The rest of the notes are
              detailed.
            </p>
          </header>

          <Callout label="How to use this page">
            Read it once to understand the “big picture”, then come back later
            when the course details start piling up.
          </Callout>

          {/* Purpose */}
          <div id="purpose">
            <Card title="Purpose of this course">
              <p className="text-sm text-neutral-200 leading-relaxed">
                To explain how a <span className="font-semibold">microprocessor system</span>{" "}
                works.
              </p>

              <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-xs font-semibold text-neutral-200">
                  Three aspects
                </p>
                <Bullets>
                  <Bullet>
                    How to directly program such a system at the{" "}
                    <span className="font-semibold">machine code</span> level
                  </Bullet>
                  <Bullet>
                    How to expand such systems by connecting{" "}
                    <span className="font-semibold">hardware</span> to them
                  </Bullet>
                  <Bullet>
                    How a typical system is organized and how we can build one
                    that <span className="font-semibold">works</span>
                  </Bullet>
                </Bullets>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-xs font-semibold text-neutral-200">
                    Computer Organization
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Understanding how a computer system is organized and how it
                    works.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-xs font-semibold text-neutral-200">
                    Computer Architecture
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    How to build the <em>best</em> system possible given a
                    particular technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Themes */}
          <div id="themes">
            <Card title="Two thematic sections in this course">
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    1) Learn how a computer works / how to program it / how it behaves
                  </p>

                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Equivalent to learning how to drive a car: how to make it do
                    what you want and what the interface is.
                  </p>

                  <Bullets>
                    <Bullet>
                      Example analogy: wall socket (the interface) — you don’t
                      need to know how the grid is built to use it.
                    </Bullet>
                    <Bullet>
                      This is called the{" "}
                      <span className="font-semibold">Programming Model</span>{" "}
                      and should be viewed as a{" "}
                      <span className="font-semibold">
                        contract between the manufacturer and the user
                      </span>
                      .
                    </Bullet>
                    <Bullet>
                      Advantage: only the interface is fixed → we can build
                      different machines that adhere to the interface.
                    </Bullet>
                    <Bullet>
                      Low-level (machine-level) programming relates to
                      high-level languages. Assumption: you know{" "}
                      <span className="font-semibold">C</span>.
                    </Bullet>
                  </Bullets>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    2) Learn how to build a computer (processor) that works
                  </p>

                  <Bullets>
                    <Bullet>
                      This is meaningful only if you know what it is supposed to
                      do.
                    </Bullet>
                    <Bullet>
                      Focus in this course:{" "}
                      <span className="font-semibold">“it works”</span> (not
                      “works best”).
                    </Bullet>
                  </Bullets>
                </div>
              </div>
            </Card>
          </div>

          {/* Extras */}
          <div id="extras">
            <Card title="In addition, we will see">
              <Bullets>
                <Bullet>
                  Some performance/function enhancing techniques (Caches /
                  Virtual Memory)
                </Bullet>
                <Bullet>Basic I/O Device Concepts</Bullet>
                <Bullet>Time permitting: common I/O devices</Bullet>
              </Bullets>
            </Card>
          </div>

          {/* Binary fundamentals */}
          <div id="binary">
            <Card title="Review: Digital (binary) system fundamentals">
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Binary → understands only two values
                  </p>

                  <Bullets>
                    <Bullet>
                      For convenience, represented as{" "}
                      <span className="font-semibold">0</span> and{" "}
                      <span className="font-semibold">1</span>
                    </Bullet>
                    <Bullet>
                      In actuality, the two values can be anything:
                      <div className="mt-2 space-y-1 text-sm text-neutral-300">
                        <div>• 0V or 5V (conventional digital systems)</div>
                        <div>• Light or No Light</div>
                      </div>
                    </Bullet>
                  </Bullets>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Advantage of two values
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Easier to detect/recognize two values as opposed to many.
                  </p>
                  <Bullets>
                    <Bullet>
                      Fog boat example: communicating with multiple light levels
                      is harder than just light vs no light.
                    </Bullet>
                    <Bullet>
                      Conventional microprocessors interpret:
                      <div className="mt-2 space-y-1 text-sm text-neutral-300">
                        <div>
                          • (0, 0+Δ) as <span className="font-semibold">0</span>
                        </div>
                        <div>
                          • (Vdd−Δ, Vdd) as{" "}
                          <span className="font-semibold">1</span>
                        </div>
                      </div>
                    </Bullet>
                  </Bullets>
                </div>

                <Callout label="Bundling bits">
                  By bundling bits together, you can represent more than one
                  thing (example: Morse code).
                </Callout>
              </div>
            </Card>
          </div>

          {/* Computer as ultimate digital system */}
          <div id="computer-digital">
            <Card title="Computer as the ultimate digital system">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Computers are programmable: they can follow a set of rules that
                you specify.
              </p>
            </Card>
          </div>

          {/* Fundamentals */}
          <div id="fundamentals">
            <Card title="Basic functionality of a computer (processor)">
              <Bullets>
                <Bullet>
                  Move digital data from one location/device to another
                </Bullet>
                <Bullet>
                  Operate on digital data (A + B, A − C, …)
                </Bullet>
                <Bullet>
                  Based on outcome of an operation decide what to do next
                </Bullet>
              </Bullets>

              <Callout label="Why this is enough">
                Digital information can be transformed from/to other types of
                information/forces, so computers can interact with devices and
                the physical world.
              </Callout>
            </Card>
          </div>

          {/* Examples */}
          <div id="examples">
            <Card title="Examples: digital ↔ physical world">
              <Bullets>
                <Bullet>
                  <span className="font-semibold">Keyboard:</span> mechanical
                  motion → electrical contact → detected by controller → digital
                  signature
                </Bullet>

                <Bullet>
                  <span className="font-semibold">Speaker:</span> electricity →
                  magnetic field → cone motion → air pressure → sound wave.
                  Digital value → proportional voltage → create “any” sound.
                  (D/A)
                </Bullet>

                <Bullet>
                  <span className="font-semibold">LCD screen:</span> digital
                  info represents coordinates/value → electric field changes
                  molecules → light passes through or not
                </Bullet>

                <Bullet>
                  <span className="font-semibold">Printer (ink-jet):</span>{" "}
                  digital info → mechanical motion → paper motion → piezo force
                  spits ink
                </Bullet>

                <Bullet>
                  <span className="font-semibold">CDs:</span> reflective surface
                  + laser → pulses → electrical signal → bit stream → bundles of
                  16 as sound levels → D/A → music
                </Bullet>
              </Bullets>

              <Callout label="In summary">
                Take input in one form → convert to digital representation →
                process → convert to desired form for output.
              </Callout>
            </Card>
          </div>

          {/* Plain computer system */}
          <div id="plain-system">
            <Card title="Plain computer system: instructions + data">
              <p className="text-sm text-neutral-300 leading-relaxed">
                There are two forms of information:
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-xs font-semibold text-neutral-200">
                    Instructions
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Determine what the system will do: move, add, subtract, etc.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-xs font-semibold text-neutral-200">
                    Data
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    The quantities the system is processing (operands).
                    Examples: char, int, long.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Five parts */}
          <div id="five-parts">
            <Card title="5 main parts of a computer">
              <Bullets>
                <Bullet>Input</Bullet>
                <Bullet>Output</Bullet>
                <Bullet>Memory</Bullet>
                <Bullet>Arithmetic and Logic</Bullet>
                <Bullet>Control</Bullet>
              </Bullets>

              <Callout label="CPU">
                Parts 4 & 5 form the CPU. This is a uniprocessor system.
              </Callout>
            </Card>
          </div>

          {/* Justify course */}
          <div id="why-course">
            <Card title="Why this course matters">
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Hardware / VLSI designers
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Semiconductor technology is raw material. Building working
                    processors is challenging and in high demand. This course is
                    a step toward developing that expertise.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="text-sm font-semibold text-neutral-100">
                    Programmers
                  </p>
                  <Bullets>
                    <Bullet>
                      You can program without knowing how it works…
                    </Bullet>
                    <Bullet>
                      …but knowing specifics may let you take advantage of them
                    </Bullet>
                    <Bullet>
                      Some applications require squeezing every bit of a CPU
                    </Bullet>
                    <Bullet>
                      Some programming practices depend on the specific system
                    </Bullet>
                    <Bullet>
                      Compiler development requires knowledge of assembly
                    </Bullet>
                  </Bullets>


                </div>
              </div>
            </Card>
          </div>

          {/* Specifics */}
          <div id="specifics">
            <Card title="Course specifics (platform)">
              <p className="text-sm text-neutral-300 leading-relaxed">
                We will talk about the Altera NIOS II processors. This is a
                “soft” processor typically implemented over an FPGA
                (reconfigurable logic circuits).
              </p>

              <Bullets>
                <Bullet>
                  We will work with the ultragizmo board (UofT-developed).
                </Bullet>
                <Bullet>
                  Emphasis: concepts + hands-on experience, so you can quickly
                  apply ideas to new technologies later.
                </Bullet>
                <Bullet>
                  Don’t over-focus on a specific product — tech changes fast
                  (e.g., PCI, ISA, EISA historically).
                </Bullet>
              </Bullets>
            </Card>
          </div>

          {/* Admin */}
          <div id="admin">
            <Card title="Administrative issues">
              <Bullets>
                <Bullet>Lab structure</Bullet>
                <Bullet>Course schedule and grade distribution</Bullet>
                <Bullet>Book</Bullet>
                <Bullet>How to do well</Bullet>
                <Bullet>Academic dishonesty</Bullet>
                <Bullet>Late policy</Bullet>
              </Bullets>
            </Card>
          </div>

          {/* Study */}
          <div id="study">
            <Card title="Study Check">
              <p className="text-sm text-neutral-300 leading-relaxed">
                If you can answer these quickly, you understood the intro.
              </p>
              <Bullets>
                <Bullet>
                  What’s the difference between organization vs architecture?
                </Bullet>
                <Bullet>
                  What are the 3 fundamental things computers do?
                </Bullet>
                <Bullet>
                  What does “programming model = contract” mean?
                </Bullet>
                <Bullet>
                  Why is binary used (and what’s the fog/boat analogy getting at)?
                </Bullet>
                <Bullet>
                  What are the 5 main parts of a computer?
                </Bullet>
              </Bullets>
            </Card>
          </div>
        </div>

        {/* RIGHT: sticky study panel */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">
                Quick Navigation
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>
                  <a className="hover:text-white" href="#purpose">
                    Purpose
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#themes">
                    Thematic Sections
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#extras">
                    Extra topics
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#binary">
                    Binary fundamentals
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#fundamentals">
                    What computers do
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#examples">
                    Real-world examples
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#plain-system">
                    Instructions vs data
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#five-parts">
                    5 main parts
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#why-course">
                    Why this course
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#specifics">
                    Platform specifics
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#admin">
                    Admin
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#study">
                    Study check
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
              <h3 className="text-sm font-semibold text-neutral-100">
                Study Check (fast)
              </h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                If you can answer these in ~60 seconds, you’re chilling.
              </p>

              <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  Org vs Arch?
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  Why binary?
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  5 main parts of a computer?
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
