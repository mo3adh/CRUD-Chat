import { useEffect, useState } from "react";
import GetData from "../services/getData";
import PostItem from "./postItem";

const GetPosts = () => {
    const {data : posts , loading, err} = GetData('http://localhost:5000/getPosts');

    return ( 
        <div className="GetPosts">
            {posts && posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
     );
}
 
export default GetPosts;