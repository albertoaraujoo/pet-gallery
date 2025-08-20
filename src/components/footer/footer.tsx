import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-gray-900 px-8 py-6 text-white">
      <p className="text-sm">
        © {currentYear} Pet Gallery. All rights reserved.
      </p>
      <p className="text-xs">
        Developed by:{" "}
        <Link
          className="gradient-text font-semibold"
          href="https://github.com/albertoaraujoo"
        >
          Alberto Araújo
        </Link>
      </p>
    </footer>
  );
}
