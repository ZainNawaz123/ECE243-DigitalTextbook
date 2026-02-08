import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/sections/intro", label: "1. Introduction" },
  { href: "/sections/binary", label: "2. Binary & Number Representation" },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex max-w-6xl">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 border-r border-neutral-800 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight">
              ECE243 Companion
            </h2>
            <p className="mt-1 text-sm text-neutral-400">
              Clean notes for Chapters 1–2.
            </p>
          </div>

          <nav className="space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <p className="text-xs text-neutral-400">
              Built by a student as a companion resource (not official course
              material).
            </p>
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 p-8 md:p-10">{children}</main>
      </div>
    </div>
  );
}
