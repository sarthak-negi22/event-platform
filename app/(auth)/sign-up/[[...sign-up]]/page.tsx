import { SignUp } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Evently | Sign Up'
}


export default function Page() {
    return <SignUp/>
}