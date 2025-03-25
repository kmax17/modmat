"use client"

import {ReactNode} from "react";
import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <HeroUIProvider>
            <ToastProvider/>
            {children}
        </HeroUIProvider>
    )
}