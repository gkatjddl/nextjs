// /api/post/edit 으로 API요청하면 동작할 서버함수

import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

// 받아온 input정보로 DB에 수정하고 list페이지로 이동시키기
export default async function handler(req, res){
    // req : 요청메세지
    // res : 응답할 값을 담는 공간
    console.log(req.body);  // input에 적은 값은 req.body에 있음
    if(req.method == 'POST'){
        let {id, title, content}  = req.body;
        if(id && title && content)   // 비어있으면 안되는 값들을 체크
        {
            // DB에서 해당 id를 찾아 title과 content를 수정
            // list페이지로 이동시킴
            try{
                //업데이트를 위해서는 updateOne({조건},{변경값})사용
                const db = (await connectDB).db('mydb');
                let result = await db.collection('post').updateOne(
                    {_id:ObjectId.createFromHexString(id)},
                    {$set:{
                        title : title,
                        content : content
                    }}
                );
                return res.redirect(302,'/list');
            }catch(error){
                // try ~ catch : 상황에 따라 실패할수 있는 함수를 사용할때 활용(서버다운 대비)
                // 서버 기능이 실패하면 500
                console.log('Database Error', error);
                return res.status(500).json({error: error});
            }
        }
    }else{
        // POST방식이 아닌 형태로 오는 요청을 거른다
        return res.status(405).json({error:'POST요청을 보내주세요'})
    }
}