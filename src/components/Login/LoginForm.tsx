import "./_login.scss";

const LoginForm = () => {
  return (
    <div className="form__container">
      <div className="form__header">
        <h1>Welcome!</h1>
        <h4>Enter details to login</h4>
      </div>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <h5 className="forgot__password">forgot password</h5>
        <button>Log in</button>
      </form>
    </div>
  );
};

export { LoginForm };
