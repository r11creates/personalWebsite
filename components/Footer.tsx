import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}. Built with Next.js, TypeScript, and Tailwind
          CSS.
        </p>
        <a
          href="#home"
          className="text-slate-300 transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
