import { useNavigate } from "react-router-dom";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/login-animation.json";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => 
    { 
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
      .get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
      .then(res => res.data);
      localStorage.setItem('userinfo', JSON.stringify(userInfo));
      navigate("/user/home");
    }
  });

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to Nyay!</h1>
        </div>
        <button className={styles.loginButt} onClick={() => login()}>
          <i
            className="fa-brands fa-google"
            style={{ marginRight: "10px" }}
          ></i>
          Login as Lawyer
        </button>
        <div className={styles.or}>
          <hr className={styles.divider} />
          <div style={{ margin: "10px" }}>or</div>
          <hr className={styles.divider} />
        </div>
        <button className={styles.loginButt} onClick={() => login()}>
          <i
            className="fa-brands fa-google"
            style={{ marginRight: "10px" }}
          ></i>
          Login as Client
        </button>
      </div>
      <div className="login-animation w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Login;
