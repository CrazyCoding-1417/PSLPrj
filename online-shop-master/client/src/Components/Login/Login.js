import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser } from "../../Redux/Actions";
import TwitterLoginPoc from "./TwitterLoginPoc";

import "./Login.css";

const ConnectedLogin = props => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [wrongCred, setCred] = useState(false);

  const { from } = props.location.state || { from: { pathname: "/" } };

  // If user was authenticated, redirect her to where she came from.
  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  }

  return (
    <div className="login-container">
      <div
        style={{
          height: 300,
          width: 200,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            color: "#504F5A",
            marginBottom: 50,
            fontSize: 26,
            textAlign: "center"
          }}
        >
          {" "}
          Log in{" "}
        </div>
        <TextField
          value={userName}
          placeholder="User name"
          onChange = {(e)=> setUserName(e.target.value)}
        />
        <TextField
          value={pass}
          type="password"
          placeholder="Password"
          onChange={(e)=> setPass(e.target.value)}
        />
        <Button
          style={{ marginTop: 10 }}
          variant="outlined"
          color="primary"
          onClick={() => {
            // Authenticate the user using entered credentials.
            Auth.authenticate(userName, pass, user => {
              // Authentication failed.
              if (!user) {
                setCred(true);
                return;
              }

              // If we get here, authentication was success.
              props.dispatch(setLoggedInUser({ name: user.name }));
              setRedirectToReferrer(true);
            });
          }}
        >
          Log in
        </Button>
        {wrongCred && (
          <div style={{ color: "red" }}>Wrong username and/or password</div>
        )}
        <TwitterLoginPoc />
      </div>
    </div>
  );
}

const Login = withRouter(connect()(ConnectedLogin));

export default Login;
