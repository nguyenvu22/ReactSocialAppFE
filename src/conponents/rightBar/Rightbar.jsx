import "./rightBar.scss";

const rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className="button">follow</button>
              <button className="button">dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className="button">follow</button>
              <button className="button">dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets1.ignimgs.com/2016/01/26/rocunnamedjpg-0d75f7_160w.jpg?width=1280"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightbar;
