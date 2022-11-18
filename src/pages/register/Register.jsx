import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Get Your Own Account</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa
            recusandae quibusdam fugiat velit ad explicabo delectus repellat
            consectetur ex sit, iste debitis numquam autem modi cumque adipisci
            doloribus provident?
          </p>
          <span>Already have one?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
