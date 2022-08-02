import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Write = props => {
    const [ image, setImage ] = useState('');
    const [ contents, setContents ] = useState('');
    const [ tag, setTag ] = useState('');
    const router = useRouter();

    const handleWrite = e => {
        axios.post("/api/post/write", { image: image, contents: contents, tag: tag }).then( res => {
            if( res.data.success ){
                alert("피드 업데이트 성공");
                router.push("/main");
            }else{
                alert("업데이트 실패");
            }
        });
        e.preventDefault();
    }

    const handleBack = e => {
        axios.get("/main").then( res => {
           router.push("/main");
        });
    }

    const handleImageChanged = e => {
        setImage(e.target.value);
    }
    const handleContentsChanged = e => {
        setContents(e.target.value);
    }
    const handleTagChanged = e => {
        setTag(e.target.value);
    }

    return (
        <>
            <div className={"container"}>
                <div className={"post-container"}>
                    <div className={"post-wrap"}>
                        <header>
                            <button type={"button"} onClick={handleBack}>
                                <img src={"https://dhgilmy0l2xzq.cloudfront.net/15a3f854-ae4d-4662-94f1-8208141a9983-20220802145018.png"}/>
                            </button>
                            <h1>새 게시물 만들기</h1>
                            <button type={"button"} className={"share_btn"} onClick={handleWrite}>공유하기</button>
                        </header>
                        <div className={"write"}>
                            <div className={"img-area"}>
                                <div className={"area-box"}>
                                    <label htmlFor={"img_file"}>파일 선택</label>
                                    <input type={"file"} id={"img_file"} value={image} onChange={handleImageChanged}/>
                                </div>
                            </div>
                            <div className={"text-area"}>
                                <div className="myProfile">
                                    <img className="pic"
                                         src="https://dhgilmy0l2xzq.cloudfront.net/f5fe313a-0bf3-4470-8915-2739e82a76f8-20220802120750.jpeg"
                                         alt="thisisyourhyung님의 프로필 사진"/>
                                    <span className="userID point-span">youna</span>
                                </div>
                                <div className={"area-box"}>
                                    <textarea className={"input_text"} value={contents} onChange={handleContentsChanged} placeholder={"문구 입력..."}/>
                                </div>
                                <div className={"area-box"}>
                                    <input type={"text"} className={"input_tag"} value={tag} onChange={handleTagChanged} placeholder={"태그 추가"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Write.getLayout = page=>{
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
export default Write