import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="singInMainDiv">
      <div className="signInExpediaLogoDiv">
        <img
          className="signInExpediaLogo"
          src="https://a.travel-assets.com/egds/marks/onekey__expedia.svg"
          alt="brand logo"
        />
      </div>
      <h1 className="signInHeadindText">Sign in or create an account</h1>
      <div className="signInButtonsMainDiv">
        <button className="googleSignInBtn">Sign in with Google</button>
        <p
          style={{
            margin: "2.5rem",
            textAlign: "center",
          }}
        >
          or
        </p>
        <input className="signinEmailInp" type="email" placeholder="Email" />
        <button className="continueBtn">Continue</button>
      </div>
      <p
        style={{
          margin: "0px 0px 18px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Other ways to sign in
      </p>
      <div className="appleFbLogoDiv">
        <img
          className="appleFbImg"
          src="https://a.travel-assets.com/egds/marks/apple.svg"
          alt="apple logo"
        />
        <img
          className="appleFbImg"
          src="https://a.travel-assets.com/egds/marks/facebook.svg"
          alt="FB logo"
        />
      </div>
    </div>
  );
};

export default SignIn;
