import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //temp
  const comments = [
    {
      id: 1,
      desc: "loremmm123mmmmmmmmm31 2311312312312efsdgerwgwertwerafsd fsadfdsafmmmmmmmmmmmmmmmmm",
      name: "Vu",
      userId: 1,
      profilePic: "https://www.refinery29.com/images/10550047.jpg",
    },
    {
      id: 2,
      desc: "loremmmmmmmmmm mmmmmmmmmmmmmmmmmdasdasdsadsad asdasdsadas adasdasdsadsadmmm",
      name: "Vu",
      userId: 1,
      profilePic: "https://www.refinery29.com/images/10550047.jpg",
    },
    {
      id: 3,
      desc: "loremmffasgasdfasammmmmm",
      name: "Vu",
      userId: 1,
      profilePic: "https://www.refinery29.com/images/10550047.jpg",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a Comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />

          <div className="info">
            <div className="infoText">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <div className="infoMore">
              <span>Like</span>
              <span>Reply</span>
              <span className="date">12 hour ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
