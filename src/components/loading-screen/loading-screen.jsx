import React from 'react';

const LoadingScreen = () => {
  return (
    <>
      <div style={{
        width: `20vw`,
        height: `20vw`,
        position: `absolute`,
        left: `40vw`,
        top: `30vh`,
        border: `solid 40px #4481c3`,
        borderRadius: `50%`,
        borderTopColor: `transparent`,
        borderBottomColor: `transparent`,
        animation: `spin 1s linear infinite`,
      }}
      >
      </div>
      <style>{`
          @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
          }
      `}
      </style>
    </>
  );
};

export default LoadingScreen;
