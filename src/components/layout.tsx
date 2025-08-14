import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative bg-white">
      <Link
        href="/watchlist"
        className="fixed top-4 right-4 bg-yellow-500 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded shadow-lg z-50 transition"
      >
        ★ watchlist
      </Link>

      <main>{children}</main>
    </div>
  );
}
