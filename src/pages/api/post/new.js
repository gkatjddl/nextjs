// localhost:3000/api/post/new 로 요청하면 이서버 파일이 실행

import { connectDB } from "@/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function writeHandler(req,res){
    // POST요청에는 body 라는 곳에 데이터를 담아 보냄 (req.body에 input으로 입력한 것들이 있음)
    let session = await getServerSession(req, res, authOptions);
    console.log(session);

    const { title, content, email } = req.body;
    
    if(req.method == 'POST'){
        // body에 담긴 값들을 꺼내고
        // 비어있지 않으면
        // mongoDB에 insertOne 입력
        // 요청한 페이지로 돌려보내기 (302, 'URL')
        if(session){
            req.body.email = session.user?.email;
        }

        if(title && content && req.body.email){
            try{
                const email = req.body.email;
                const db = (await connectDB).db('mydb');       // 데이터 베이스 이름
                let result = await db.collection('post').insertOne({title,content,email});
                return res.redirect(302, '/list')
            }catch(errer){
                console.log('Database Error: ', error);
                return res.status(500).json({error : '서버 기능 오류'})
            }
        }else{
            return res.status(400).json({error : '에러'})
        }
    }else{
        return res.status(405).json({error:'Method Not Allowed'})
    }
}