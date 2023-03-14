import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/Button";
import { CommentList } from "../list/CommentList";
import { TextInput } from "../ui/TextInput";
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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export const PostViewPage = (props) => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { data, addComment } = useContext(PostListContext);

    const post = data.find((item) => {
        return item.id == postId;
    });
    const [comment, setComment] = useState("");

    const handleAddComment = () => {
        const targetId = postId;

        const updatedComments =
            post.comments === undefined
                ? [{ id: 1, content: comment }]
                : [
                      ...post.comments,
                      { id: post.comments.length + 1, content: comment },
                  ];
        console.log(targetId);
        console.log("list : ", updatedComments);
        addComment(targetId, updatedComments);
        setComment("");
    };
    return (
        <Wrapper>
            <Container>
                <Button title="뒤로가기" onClick={() => navigate("/")} />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                    <CommentLabel>댓글</CommentLabel>
                    {post.comments && <CommentList comments={post.comments} />}

                    <TextInput
                        height={40}
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button title="댓글 작성하기" onClick={handleAddComment} />
                </PostContainer>
            </Container>
        </Wrapper>
    );
};
