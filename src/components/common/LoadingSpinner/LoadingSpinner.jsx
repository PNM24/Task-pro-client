import { ThreeDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <ThreeDots
      visible={true}
      color="#fc842d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass="loadingSpinner"
    />
  );
};

export default LoadingSpinner;
