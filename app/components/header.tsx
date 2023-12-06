import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold cursor-pointer">
          Record Record
        </Link>
        <div className="flex space-x-4 hover:underline cursor-pointer">
          <Link href="/collection/add">Add</Link>
        </div>
      </div>
    </nav>
  );
}
