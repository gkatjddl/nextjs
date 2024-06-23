import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/db"

export default async function Home() {
  // 오래걸리는 작업은 건너뛰고 다음코드실행 -> (await으로 기다리게 변경)
  const db = (await connectDB).db('mydb');       // 데이터 베이스 이름
  let result = await db.collection('post').find().toArray();
  console.log(result)

  return (
  <div>
    <p>{result[0]?.title}</p>
    <p>{result[0]?.content}</p>
  </div>
  );
}

// app/page.js : '/' [홈페이지]
// app/write/page.js : '/write' [write페이지]
// nextjs + mongodb + vercel
// --> 개인 웹사이트 개발&배포 해보기


// app 폴더가 'http://localhost:3000/'
// http://localhost:3000/list -->  app 폴더에 list폴더 만들고  page.js를 만들면 생긴다

// 배포하려면 npm run build
// build폴더의 내용을 클라우드(AWS, vercel)에 업로드하고 npm run start