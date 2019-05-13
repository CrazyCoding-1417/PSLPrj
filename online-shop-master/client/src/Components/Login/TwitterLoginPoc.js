import React, { useState } from 'react';
import TwitterLogin from 'react-twitter-auth';

function TwitterLoginPoc() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const onSuccess = (response) => {
    const token = response.header.get('x-auth-token');
    if(token) {
      response.json().then(user => {
        setAuthenticated(true);
        setUser(user);
        setToken(token);
      })
    }
  };

  const onFailed = (error) => {
    alert(error);
  }

  const logout = () => {
    setAuthenticated(false);
    setToken('');
    setUser(null);
  };

return (
  !setAuthenticated ?
    (
      <div
        style={{
        marginTop: 50,
        textAlign: 'center'
      }}
      >
      <h2>The user has been authenticated</h2>
      </div>
    ) :
    (
      <div
        style={{
        marginTop: 30,
        textAlign: 'center'
      }}
      >
      <TwitterLogin 
        loginUrl="https://localhost:4000/api/v1/auth/twitter"
        onFailure={onFailed} onSuccess={onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      />
      </div>
    )
  )
}

export default TwitterLoginPoc;