import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./custom.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Portfolio | Rakibul Hasan",
  description: "Portfolio of Rakibul Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
