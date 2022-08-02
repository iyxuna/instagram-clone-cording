import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Signup = props => {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ password, setPassword ] = useState('');
    const router = useRouter();

    const handleSubmit = e => {
        axios.post("/api/auth/signup", { email: email, name: name, nickname: nickname, password: password }).then( res=>{
            if( res.data.success ){
                router.push("/login");
            }else{
                alert(res.data.msg);
            }
        });
        e.preventDefault();
    }

    const handleEmailChanged = e => {
        setEmail(e.target.value);
    }
    const handleNameChanged = e => {
        setName(e.target.value);
    }
    const handleNicknameChanged = e => {
        setNickname(e.target.value);
    }
    const handlePwChanged = e => {
        setPassword(e.target.value);
    }

    return (
        <>
        <div className="Container flex">
            <div className="ContainerLogin flex">
                <div className="mainloginContainer">
                    <div className="loginContainer">
                        <form onSubmit={handleSubmit}>
                            <div className="loginLogo flex">
                                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
                            </div>
                            <h2 className="vvzhL">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                            <div className="facebookLogainContainer flex">
                                <button className="facebookLoginbt">Facebook으로 로그인</button>
                            </div>
                            <div className="sliceContainer flex">
                                <div className="slice"></div>
                                <div className="tv-or">또는 </div>
                                <div className="slice"></div>
                            </div>
                            <div className="inputMainContainer">
                                <div className="inputContainer flex">
                                    <input id="id" className="maininputContainer" value={email} onChange={handleEmailChanged} aria-label="임력 검색" placeholder="이메일 주소" type="text" />
                                </div>
                                <div className="inputContainer flex">
                                    <input id="name" className="maininputContainer" value={name} onChange={handleNameChanged} placeholder="성명" type="text" />
                                </div>
                                <div className="inputContainer flex">
                                    <input id="nickname" className="maininputContainer" value={nickname} onChange={handleNicknameChanged} placeholder="사용자 이름" type="text" />
                                </div>
                                <div className="inputContainer flex">
                                    <input id="password" type="password" className="maininputContainer" value={password} onChange={handlePwChanged} aria-label="임력 검색" placeholder="비밀번호" type="text" />
                                </div>
                            </div>
                            <p className="ZGwn1">
                                서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.
                                <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank"></a>
                            </p>
                            <div className="loginbtContainer flex">
                                <button id="loginbt" type="submit">가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

Signup.getLayout = page=>{
    const { props } = page
    return(
        <>
            <GlobalLayout>
                {page}
            </GlobalLayout>
        </>
    )
}

export const getServerSideProps = async ctx=>{
    const _query = ctx.query;
    return{
        props : {
        }
    }
}

export default Signup