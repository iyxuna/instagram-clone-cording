import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Index = props => {
    const [ nickname, setNickname ] = useState('');
    const [ password, setPassword ] = useState('');
    const router = useRouter();

    const handleSubmit = e => {
        // console.log("AAA");
        axios.post("/api/auth", { nickname: nickname, password: password }).then( res=>{
            if( res.data.user ){
                router.push("/main");
            }else{
                // alert(res.data.msg);
                console.log("BBB")
                setNickname("");
                setPassword("");
            }
        });
        e.preventDefault();
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
                                <div className="inputMainContainer">
                                    <div className="inputContainer flex">
                                        <input id="name" type={"text"} className="maininputContainer" value={nickname} onChange={handleNicknameChanged} aria-label="임력 검색" placeholder="사용자 이름" />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="passwd" type="password" className="maininputContainer" value={password} onChange={handlePwChanged} aria-label="임력 검색" placeholder="비밀번호" />
                                    </div>
                                </div>
                                <div className="loginbtContainer flex">
                                    <button id="loginbt" type="submit">로그인</button>
                                </div>
                            </form>
                            <div className="flex">
                                <div className="slice"></div>
                                <div className="tv-or">또는 </div>
                                <div className="slice"></div>
                            </div>
                            <div className="facebookLogainContainer flex">
                                <button className="facebookLoginbt">Facebook으로 로그인</button>
                            </div>
                        </div>
                    </div>
                    <div className="subContainer flex">
                        <div className="signupContainer">
                            <span>계정이 없으신가요? </span>
                            <a href="/signup" className="signup">가입하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.getLayout = page=>{
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

export default Index;