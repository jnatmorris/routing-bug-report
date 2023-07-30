"use client";
export default function Page() {
    console.log("Page 1, client component");

    const clickHandler = async () => {
        await fetch("/page1/api", {
            method: "POST",
            body: JSON.stringify({ payload: "123456789" }),
        });
    };

    return (
        <>
            <h1 className="font-bold text-red-500">Page 1</h1>
            <button
                onClick={clickHandler}
                className="ring-1 ring-green-400 shadow-lg bg-slate-50 rounded-lg px-2 py-1 mt-4"
            >
                Send fetch
            </button>
        </>
    );
}
