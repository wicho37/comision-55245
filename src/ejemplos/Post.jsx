import { useFetch } from "../hooks/useFetch";
import FetchData from "./renderprops/FetchData";


const Post = () => {


    return (
        <div>
            <h2>Json placeholder</h2>
            <hr />

            <FetchData url={'https://jsonplaceholder.typicode.com/posts'}>
                {(data) => (
                    <>
                        {
                            data && data.map(post => (
                                <div key={post.id}>
                                    <h4>{post.tittle}</h4>
                                    <h4>{post.body}</h4>
                                    <hr />
                                </div>

                            ))
                        }
                    </>
                )}
            </FetchData>
        </div >
    )
}


export default Post




/* import { useFetch } from "../hooks/useFetch";


const Post = () => {
    const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts")


    return (
        <div>
            <h2>Json placeholder</h2>
            <hr />
            {
                posts && posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.tittle}</h4>
                        <h4>{post.body}</h4>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}


export default Post */