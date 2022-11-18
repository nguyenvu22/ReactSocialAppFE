import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

const posts = [
    {
        id: 1,
        name: "John",
        userId: 1,
        profilePic: "https://ca-times.brightspotcdn.com/dims4/default/9c115b0/2147483647/strip/true/crop/3754x2731+0+0/resize/1486x1081!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa7%2Ffa%2Ff46a1568465aa0b056c05d77bc31%2Felon-musk-lawsuit-75398.jpg",
        desc: "nguuuuu",
        img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
    },
    {
        id: 2,
        name: "John",
        userId: 1,
        profilePic: "https://ca-times.brightspotcdn.com/dims4/default/9c115b0/2147483647/strip/true/crop/3754x2731+0+0/resize/1486x1081!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa7%2Ffa%2Ff46a1568465aa0b056c05d77bc31%2Felon-musk-lawsuit-75398.jpg",
        desc: "nguuuuu",
        img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
    },
    {
        id: 3,
        name: "John",
        userId: 1,
        profilePic: "https://ca-times.brightspotcdn.com/dims4/default/9c115b0/2147483647/strip/true/crop/3754x2731+0+0/resize/1486x1081!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa7%2Ffa%2Ff46a1568465aa0b056c05d77bc31%2Felon-musk-lawsuit-75398.jpg",
        desc: "nguuuuu",
        img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
    },
]

  return (
    <div className="posts">
        {posts.map((post) => (
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts