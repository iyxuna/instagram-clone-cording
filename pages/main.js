import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Main = ({_result=[]}) => {

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-1">
                        <img className="logo_instagram_txt" src="https://dhgilmy0l2xzq.cloudfront.net/c972de7f-eb48-40a3-88ba-01eea2047e0b-20220802114916.png" alt="logo_text"/>
                    </div>
                    <input id="searchInput" type="search" className="input-search" placeholder="검색"/>
                    <div className="nav-2">
                        <img src="https://dhgilmy0l2xzq.cloudfront.net/43b4b832-987c-4544-a190-0447c01af120-20220802114944.png" alt="홈"/>
                        <img src="https://dhgilmy0l2xzq.cloudfront.net/66a6823b-b4e7-4639-b740-7f2f256eccdc-20220802115004.png" alt="DM"/>
                        <a href={"/write"}>
                            <img src="https://dhgilmy0l2xzq.cloudfront.net/b4e56389-35ca-40b1-a5fa-8ea5346f1f76-20220802121938.png" alt="글작성"/>
                        </a>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="탐색"/>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트"/>
                        <img className="pic" src="https://dhgilmy0l2xzq.cloudfront.net/f5fe313a-0bf3-4470-8915-2739e82a76f8-20220802120750.jpeg" alt="마이페이지"/>
                    </div>
                </div>
            </nav>

            <main>
                <div className="feeds">
                    {_result.map( (val, key )=>(
                        <article key={key}>
                            <header>
                                <div className="profile-of-article">
                                    <img className="img-profile pic"
                                         src="https://dhgilmy0l2xzq.cloudfront.net/ef7f7cc0-625b-4192-8d41-186befcf66de-20220802121025.jpeg"
                                         alt="dlwlrma님의 프로필 사진"/>
                                    <span className="userID main-id point-span">dlwlrma</span>
                                </div>
                                <img className="icon-react icon-more"
                                     src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                                     alt="more"/>
                            </header>
                            <div className="main-image">
                                <img src={val.image} alt="dlwlrma님의 피드 사진" className="mainPic"/>
                            </div>
                            <div className="icons-react">
                                <div className="icons-left">
                                    <img className="icon-react"
                                         src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                         alt="하트"/>
                                    <img className="icon-react"
                                         src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                                         alt="말풍선"/>
                                    <img className="icon-react" src="https://dhgilmy0l2xzq.cloudfront.net/66a6823b-b4e7-4639-b740-7f2f256eccdc-20220802115004.png" alt="DM"/>
                                </div>
                                <img className="icon-react"
                                     src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                                     alt="북마크"/>
                            </div>
                            <div className="reaction">
                                <div className="liked-people">
                                    <img className="pic" src="https://dhgilmy0l2xzq.cloudfront.net/7ed9c347-9317-47af-8f6e-fe1be399e63c-20220802120709.jpeg" alt="johnnyjsuh님의 프로필 사진"/>
                                    <p>
                                        <span className="point-span">johnnyjsuh</span>님
                                        <span className="point-span"> 외 1,412,751명</span>이
                                        좋아합니다</p>
                                </div>
                                <div className="description">
                                    <p>
                                        <span className="point-span userID">dlwlrma</span>
                                        <span className={"at-content"}>{val.contents}</span>
                                        <span className="at-tag">{val.tag}</span>
                                    </p>
                                </div>
                                <div className="comment-section">
                                    <ul className="comments">
                                        <li>
                                            <span><span
                                                className="point-span userID">postmalone</span>내가 입으면 더 잘어울릴 것 같아</span>
                                            <img className="comment-heart"
                                                 src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                                 alt="하트"/>
                                        </li>
                                    </ul>
                                    <div className="time-log">
                                        <span>32분 전</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hl"></div>
                            <div className="comment">
                                <input id="input-comment" className="input-comment" type="text" placeholder="댓글 달기..."/>
                                    <button type="submit" className="submit-comment" disabled>게시</button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="main-right">
                    <div className="myProfile">
                        <img className="pic"
                             src="https://dhgilmy0l2xzq.cloudfront.net/f5fe313a-0bf3-4470-8915-2739e82a76f8-20220802120750.jpeg"
                             alt="thisisyourhyung님의 프로필 사진"/>
                        <div>
                            <span className="userID point-span">youna</span>
                            <span className="sub-span">성유나</span>
                        </div>
                    </div>
                    <div className="section-story">
                        <div className="menu-title">
                            <span className="sub-title">스토리</span>
                            <span className="find-more">모두 보기</span>
                        </div>
                        <ul className="story-list">
                            {/*<li>*/}
                            {/*    <div className="gradient-wrap">*/}
                            {/*        <img className="img-profile story" src="https://dhgilmy0l2xzq.cloudfront.net/7ed9c347-9317-47af-8f6e-fe1be399e63c-20220802120709.jpeg"*/}
                            {/*         alt="wecode_bootcamp님의 프로필 사진"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="profile-text">*/}
                            {/*        <span className="userID point-span">wecode_bootcamp</span>*/}
                            {/*        <span className="sub-span">12분 전</span>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <div className="gradient-wrap">*/}
                            {/*        <img className="img-profile story" src="https://dhgilmy0l2xzq.cloudfront.net/92fccacd-cba7-45e9-be6b-0f67d6084dc2-20220802120824.jpeg"*/}
                            {/*         alt="han_ye_seul님의 프로필 사진"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="profile-text">*/}
                            {/*        <span className="userID point-span">han_ye_seul</span>*/}
                            {/*        <span className="sub-span">28분 전</span>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="section-recommend">
                        <div className="menu-title">
                            <span className="sub-title">회원님을 위한 추천</span>
                            <span className="find-more">모두 보기</span>
                        </div>
                        <ul className="recommend-list">
                            {/*<li>*/}
                            {/*    <div className="recommend-friend-profile">*/}
                            {/*        <img className="img-profile" src="https://dhgilmy0l2xzq.cloudfront.net/38407483-d2cb-404d-ba69-596b4dceabfc-20220802121015.jpeg"*/}
                            {/*         alt="renebaebae님의 프로필 사진"/>*/}
                            {/*        <div className="profile-text">*/}
                            {/*            <span className="userID point-span">renebaebae</span>*/}
                            {/*            <span className="sub-span">hi_sseulgi님 외 2명이 팔로우합니다</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <span className="btn-follow">팔로우</span>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    <footer>
                        <p className="insta-sccript">
                            소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙ <br/>
                            약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
                            <br/><br/>
                            © 2020 INSTAGRAM FROM FACEBOOK
                        </p>
                    </footer>
                </div>
            </main>
        </>
    );
};

Main.getLayout = page=>{
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
    const result = await axios.get("http://localhost:3000/api/post");
    return{
        props : {
            _result: result.data.data
        }
    }
}

export default Main;