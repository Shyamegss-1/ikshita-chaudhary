import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebook() {
  const [state, setstate] = useState(false);
  const [data, setData] = useState({});

  const onSuccess = (res) => {
    console.log(res);
    setData({
      name: res.name,
      email: res.email,
      img: res.picture.data.url
    });
    setstate(true);
  };

  const onFailure = () => {
    console.log('failed');
  };

  return (
    <div>
      {state ? (
        <div>
          <p>
            <img src={data.img} />
          </p>
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
      ) : (
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_CLIENT__KEY}
          autoLoad={false}
          fields="name,email,picture"
          onClick={onFailure}
          callback={onSuccess}
        />
      )}
    </div>
  );
}
export default Facebook;
