import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "styles/global/globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chriso`s Portfolio",
  description: '백엔드 | 풀스택 개발자 Chriso의 Portfolio',
  keywords: "풀스택, 백엔드, 웹 개발, 프로젝트, 기술 스택, Chriso",
  authors: {
    url: "https://chr1s0326.github.io/cHr1s0-blog/",
    name: "길홍배",
  },
  icons: "static/images/profile_image.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
