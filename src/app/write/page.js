


export default function WritePage(){
    return(
        <div>
            <h4>글 작성 페이지</h4>
            <form action="/api/post/new" method="POST">
                <button type="submit">POST요청 버튼</button>
            </form>
            <form action="/api/test" method="GET">
                <button type="submit">GET요청 버튼</button>
            </form>
        </div>
    )
}

// 서버통신 방식 (간단하게 URL을 통해서 메세지를 주고받자 REST API)
// REST API : GET, POST, DELETE, PUT
// GET요청 : 서버에 데이터를 요청할때
// POST요청 : 서버에 데이터를 전송할때(보안, )