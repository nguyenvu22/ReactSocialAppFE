import Posts from "../../conponents/posts/Posts"
import Stories from "../../conponents/stories/Stories"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}

export default Home