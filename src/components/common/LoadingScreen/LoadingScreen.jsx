import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import 'animate.css';
import loadingScreenVideo from '../../../assets/loadingScreen/loadingScreen.mp4';

const LoadingScreen = ({ className: styles }) => {
  useEffect(() => {
    document.querySelector('video').playbackRate = 2;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div className={styles}>
      <video autoPlay={true} muted={true} loop={true}>
        <source className="video" src={loadingScreenVideo} type="video/mp4" />
      </video>
      <h1 className="animate__animated animate__flash animate__infinite animate__slow">
        Loading
        <ThreeDots
          visible={true}
          color="#fff"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </h1>
    </div>
  );
};

export default LoadingScreen;
