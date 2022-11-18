import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

const { currentUser } = useContext(AuthContext)

  //Temp
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story main">
        <img src="https://ca-times.brightspotcdn.com/dims4/default/9c115b0/2147483647/strip/true/crop/3754x2731+0+0/resize/1486x1081!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa7%2Ffa%2Ff46a1568465aa0b056c05d77bc31%2Felon-musk-lawsuit-75398.jpg" alt="" />
        <span>{currentUser.name}</span>
        <button></button>
        <span className="addStory">Add Story</span>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
