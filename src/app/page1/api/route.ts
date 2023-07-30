import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    console.log("page1 route handler");

    // do something with the body
    const body = await request.json();
    console.log({ payload: body["payload"] });

    /* 
        This should redirect to page2 according to the docs, but does not. The UI does not change
        but the js is run server side on page2 (check console to see). 

        Here says that redirect can run in route: https://nextjs.org/docs/app/api-reference/functions/redirect
        
        Example implementation: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#redirects
    */
    redirect("/page2");

    /*
        Try another method of redirecting. This too does not work but also runs on the js
        in server component page 2.

        https://nextjs.org/docs/app/api-reference/functions/next-response#redirect

    */
    // return NextResponse.redirect(new URL("/page2", request.url));
}
