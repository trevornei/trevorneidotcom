import { useRouter } from 'next/router';

const BlogPost = () => {
    // define router
    const router = useRouter()
    // define path
    const { slug } = router.query

    return (
        <>
            <h1 className="text-4xl font-bold">
                {slug}
            </h1>
            <p className="text-md">
                This is the blog post for {slug}.
            </p>
        </>
    )
}  
export default BlogPost