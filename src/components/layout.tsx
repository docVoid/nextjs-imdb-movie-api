import Link from "next/link";
import { ReactNode } from "react";
import { useTheme } from "@/context/themecontext";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold px-4 py-2 rounded shadow-lg transition"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <Link
          href="/watchlist"
          className="bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded shadow-lg transition"
        >
          ★ watchlist
        </Link>
      </div>

      <main>{children}</main>
    </div>
  );
}
