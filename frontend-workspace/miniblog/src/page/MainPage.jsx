import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

import { PostList } from "../list/PostList";
import { PostListContext } from "../App";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
export const MainPage = (props) => {
    const navigate = useNavigate();
    const { data } = useContext(PostListContext);

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
};
