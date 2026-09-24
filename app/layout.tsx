import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FINDIT — Admin Dashboard",
  description: "University Lost & Found admin dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${publicSans.variable} h-full antialiased`}>
      <body className="min-h-full flex antialiased">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}