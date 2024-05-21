import { SignIn } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Evently | Sign In'
}


export default function Page() {
    return <SignIn/>
}