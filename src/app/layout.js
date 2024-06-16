import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs앱",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="ko">
      <body>
        <div className="navBar">
          <Link href='/' className="logo">board</Link>
          <Link href='/list'>List</Link>
          <Link href='write'>write</Link>
          <LoginBtn login={false}/>
        </div>
        {children}
        </body>
    </html>
  );
}

// 소셜로그인 설정
// npm install next-auth
// pages 폴더 안에 api폴더 안에 auth폴더 생성하고
// [...nextauthj].js 파일을 생성
// [] : dynamic route (동적 URL)