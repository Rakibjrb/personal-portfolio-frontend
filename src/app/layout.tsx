import { Kanit } from "next/font/google";
import ClientProvider from "@/providers/ClientProvider";
import "./globals.css";
import "./custom.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "Rakibul Hasan — Full-Stack Developer | Next.js, React, TypeScript",
  description:
    "Explore Rakibul Hasan's portfolio — full-stack developer skilled in modern web tools like React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className={`${kanit.className} antialiased`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
