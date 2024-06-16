
// id를 받아와서 그아이디로 DB에서 검색해서 보여줌
// 기존의 내용을 먼저 보여줌

import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

// 수정하기 버튼을 누르면 수정하는 페이지로 POST요청
export default  async function EditPage({params})
{
    // params.slug : edit/ 뒤에 입력한 URL
    console.log(params.slug)
    // params.slug를 사용해서 DB에서 검색하고 
    // input의 기본값에 셋팅한다
    const db = (await connectDB).db('mydb');
    let result = await db.collection("post").findOne({_id:ObjectId.createFromHexString(params.slug)})
    console.log(result);
    return(
        <div className="write-container">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="id" defaultValue={result._id}/>
                <input name="title" placeholder="글제목" defaultValue={result.title}/>
                <input name="content" placeholder="글내용" defaultValue={result.content}/>
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

// GET : 받아올때
// POST : 입력할때 (또는 너무 길게 받아올때)
// input 태그의 name이 key값이 됨 (서버에서 받는 키값)
// {title: '입력값1', content:"입력값2"}
