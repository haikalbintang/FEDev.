import type { Metadata } from "next";
import "./globals.css";
import { Anta } from "next/font/google";
import Header from "@/components/3_modules/Header";
import Footer from "@/components/3_modules/Footer";
import { ThemeProvider } from "@/components/4_templates/ThemeProvider";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Haikal Bintang",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anta.className} antialiased`}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto">{children}</div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
