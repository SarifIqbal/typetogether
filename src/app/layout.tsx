import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({
    subsets: ["latin"],
});

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export const metadata: Metadata = {
  title: "TypeTogether",
  description: "Collaborative Text Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
            <ConvexClientProvider>
                <Toaster/>
                {children}
            </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
