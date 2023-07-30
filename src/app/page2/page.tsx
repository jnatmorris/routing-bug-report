export default function Page() {
    /* 
        this console log is run when being routed from route.ts in /page1/api, but the UI
        of page 2 does not update.
    */
    console.log("Page 2 (server component)");

    return <h1>Page 2</h1>;
}
