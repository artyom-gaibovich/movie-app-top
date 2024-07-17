import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchCommentsById, isCommentsLoading, commentError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchCommentsById()
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу фильма c ID {params.id}</h1>
            {isPostLoading
                ? <h1>Идет загрузка постов...</h1>
                : <div><h1>{post.title}</h1><p>{post.body}</p></div>
            }
            <div>
                {comments.map(comment => {
                    return <div style={{margin : '15px 20px'}}>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default PostIdPage;