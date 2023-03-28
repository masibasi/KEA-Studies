import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./page/MainPage";
import { PostWritePage } from "./page/PostWritePage";
import { PostViewPage } from "./page/PostViewPage";
import mockdata from "./data.json";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const PostListContext = React.createContext();

function App(props) {
    const [data, setData] = useState([]);
    const dataId = useRef(4); // 데이터 아이디

    // 로컬스토리지에서 저장된 데이터를 가져온다
    useEffect(() => {
        const localData = localStorage.getItem("data");
        if (localData) {
            // 데이터가 존재하면
            const dataList = JSON.parse(localData).sort(
                (a, b) => parseInt(a.id) - parseInt(b.id)
            );

            if (dataList.length >= 1) {
                // State에 로드된 데이터를 저장하고,
                dataId.current = parseInt(dataList[0].id) + 1;
                setData(dataList);
                dataId.current = dataList.length + 1; // 데이터 개수를 계산해서 아이디 시작 지점을 설정해놓는다
            }
        } else setData(mockdata);
    }, []);

    // data값이 바뀔 때 마다 localStorage에 저장한다
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    //새로운 게시물 작성 handle 하는 함수
    const addPost = (newPost) => {
        setData([
            ...data,
            {
                id: dataId.current,
                title: newPost.title,
                content: newPost.content,
            },
        ]);
        dataId.current += 1; // 데이터를 추가하고 아이디 변수 + 1 해준다
        console.log(newPost.title + "가 추가되었습니다.");
    };
    const addComment = (targetId, updatedComments) => {
        //새로운 댓글 작성 handle 하는 함수
        let newData = [];
        console.log("id : ", targetId, "comments : ", updatedComments);
        newData = data.map((it) =>
            it.id == targetId ? { ...it, comments: updatedComments } : it
        );
        console.log("newdata : ", newData);
        setData(newData);
    };
    return (
        <PostListContext.Provider value={{ data, addPost, addComment }}>
            <BrowserRouter>
                <MainTitleText>KaKao Academy of Gachon Univ.</MainTitleText>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="post-write" element={<PostWritePage />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
            </BrowserRouter>
        </PostListContext.Provider>
    );
}

export default App;
