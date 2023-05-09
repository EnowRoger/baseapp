import post from "./post"

const listpage = ({searchResult}) => {

    const result = searchResult.map(post => <post key={post.id} post={post} />)

    const content = result?.length ? result : <article><p>No Matching Posts</p></article>

    return (
        <main>{content}</main>
    )
}
export default listpage