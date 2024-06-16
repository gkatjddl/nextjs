import { connectDB } from "@/util/db"
import Link from "next/link";
import ListItem from "./listitem";

export default async function ListPage()
    {
        const db = (await connectDB).db('mydb');       // 데이터 베이스 이름
        let result = await db.collection('post').find().toArray();
        console.log(result)

        return(
            <div className="list-bg">
                <ListItem/>
            </div>
        );
    }
    {/*삭제하기 버튼 : 버튼을 누르며 statr를 변경해서 화면을 갱신*/}
    // page.js의 기본값은 'use server' : 서버 컴포넌트
    // onClick, useSTate, ... : 클라이언트 컴포넌트 'use client'
    // 클라이언트 함수가 필요한 부분은 컴폰너트로 분리