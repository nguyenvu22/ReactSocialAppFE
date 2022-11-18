import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Posts from "../../conponents/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://vcdn1-giaitri.vnecdn.net/2022/10/13/-5578-1665650254.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=5M3zwxWO_IN7nYN3r24X-w"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English, Japanese</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
