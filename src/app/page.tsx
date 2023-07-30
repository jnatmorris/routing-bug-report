import Link from "next/link";

export default function Home() {
    console.log("Landing page (server component)");
    return (
        <main>
            <Link href="./page1">To page 1</Link>
            <h1 className="font-bold text-2xl text-blue-400">Landing page</h1>
        </main>
    );
}
