import Providers from "./_providers";
import "@/styles/globals.css";

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
        <body className={"dark"}>
        <Providers>
            <div className={"min-h-[100vh]"}>{children}</div>
        </Providers>
        </body>
        </html>
    );
}