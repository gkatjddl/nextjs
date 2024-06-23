// 글 작성할 때 이메일도 같이 기록하게 해서 
// 수정과 삭제할때도 같은 이메일로 로그인해있을때만
// 수정 및 삭제가 가능하게 변경

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"


export default async function WritePage(){
    // 글 작성하기 전에 session을 검사해서
    // 로그인 중이면 원래 return 띄워주고
    // 로그인 안해있으면 로그인이 필요하다고 return띄워주기
    let session = await getServerSession(authOptions)
    // console.log('글작성 로그인 정보',session)

    if(session){
        return(
            <div className="write-container">
            <h4>글 작성 페이지</h4>
                <form action="/api/post/new" method="POST">
                    <input name="title" placeholder="제목을 입력하세요"></input>
                    <input name="content" placeholder="내용을 입력하세요"></input>
                <button type="submit">POST요청 버튼</button>
            </form>
            <br></br>

            <form action="/api/test" method="GET">
                <button type="submit">GET요청 버튼</button>
            </form>
        </div>
        )
    }else{
        return(
            <a>로그인이 필요해요</a>
        )   
    }
}

// 서버통신 방식 (간단하게 URL을 통해서 메세지를 주고받자 REST API)
// REST API : GET, POST, DELETE, PUT
// GET요청 : 서버에 데이터를 요청할때
// POST요청 : 서버에 데이터를 전송할때(보안, )