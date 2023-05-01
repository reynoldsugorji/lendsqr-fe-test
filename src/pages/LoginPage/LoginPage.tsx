import { LoginForm } from "components";
import Image from "assets/images/image1.jpg";
import Logo from "assets/images/logo.png";
import "./_loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__image">
        <div className="login__image__logo">
          <img src={Logo} alt="logo" className="logo" />
          <h3>lendsqr</h3>
        </div>
        <img src={Image} alt="login" />
      </div>
      <div className="login__form">
        <LoginForm />
      </div>
    </div>
  );
};

export { LoginPage };
