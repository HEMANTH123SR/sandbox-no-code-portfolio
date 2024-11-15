import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { hackerMedium } from "@/fonts/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white px-14`} style={hackerMedium.style}>
        <ClerkProvider>
          <ClerkLoading>
            <div className="flex h-screen w-screen justify-center items-center">
              loading
            </div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
