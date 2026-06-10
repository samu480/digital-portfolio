import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 py-8 text-sm text-white/52">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Samuel Müller. RGB 3D Web Experience.</p>
        <div className="flex gap-4">
          <Link href="/projects" className="transition hover:text-cyanGlow">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-cyanGlow">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

