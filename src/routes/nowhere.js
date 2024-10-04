import React from 'react';
import errorImage from '../images/Screenshot 2022-11-08 125529.png';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/route-path';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: '#FCCA82' }} className="NoWare_foundd">
        <main style={mainStyle}>
          <section style={{ display: 'flex', justifyContent: 'center' }} className="section--image">
            <img style={{ width: '100%' }} src={errorImage} alt="" />
          </section>
          <section
            style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}
            className="section--content">
            <h4 style={{ fontSize: '30px' }}>404 not found</h4>
            <h5 style={{ fontSize: '50px', lineHeight: '50px' }}> oops !! you came far away </h5>
            <p style={{ fontSize: '18px', width: '80%', lineHeight: '25px' }}>
              {' '}
              The page you are looking for might be removed or is temporarily unavailable
            </p>
            <button
              onClick={() => {
                navigate(HOME);
              }}
              style={buttonStyle}>
              back to homepage
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default PageNotFound;

const mainStyle = {
  height: '90%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '50px',
  alignItems: 'center'
};
const buttonStyle = {
  width: 'fit-content',
  padding: '12px 20px',
  backgroundColor: '#333333',
  color: '#fff',
  textTransform: ' uppercase',
  fontSize: '15px',
  border: ' 0',
  cursor: ' pointer'
};
