import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: 'alswjddn1002@gmail.com',           // 구글 클라이언트 아이디
            clientSecret: '@gkatjd2014',       // 구글 클라이언트 보안 비밀번호
        }),
        GithubProvider({
            clientId: 'alswjddn1002@gmailc.com',
            clientSecret: '@gkatjd2014',
        }),
    ],
    secret: 'anythig'
};

export default NextAuth(authOptions);

// 소셜 로그인 설정
// npm install next-auth

// 구글로그인
/* 클라이언트ID와 클라이언트 보완 비밀번호 메모해놓기
 http://console.cloud.google.com/ -> API 밎 서비스 ->  OAuth 동의 화면 (External 버튼 클릭)
 사용자 인증 정보 -> OAuth 2.0 클라이언트 생성 -> 웹 애플리케이션 선택 -> 이름 입력 -> 승인된 리디렉션 URI 추가
 http://localhost:3000/api/auth/cllback/google
*/

// 깃허브 로그인(2024.06 기준)
/*
github 로그인 -> 우측 프로필 아이콘 클릭 -> setting -> Developer settings -> OAuth
-> Application name 입력 -> http://localhost:300/ 입력 (실제 사이트도 있으면 실제 사이트 URI로 추가하기)
클라이언트ID와 클라이언트 비밀번호 메모해놓기
*/
