
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h2>메인화면</h2>
            <Link href='/signUp'>
                <a>회원가입하러 가기</a>
            </Link>
        </div>
    )
}
