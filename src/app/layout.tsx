import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],  
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Faculdade Única",
  description: "Projeto Site NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
