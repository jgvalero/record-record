import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl mb-2">Record Record</h1>
      <h2 className="text-xl mb-2">Record your records</h2>
      <Link href="/collection" className="btn px-4 py-2 rounded">
        Collection
      </Link>
    </div>
  );
}
