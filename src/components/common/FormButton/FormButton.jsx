const FormButton = ({
  className: styles,
  type,
  text,
  handlerFunction,
  isDisabled,
}) => {
  return (
    <button
      onClick={handlerFunction}
      type={type}
      className={styles}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default FormButton;
