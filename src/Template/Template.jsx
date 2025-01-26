import StyledTemplate from './Template.styled';

const Template = ({ className: styles }) => {
  return (
    <div className={styles}>
      <StyledTemplate />
      Styled Template Page...
    </div>
  );
};

export default Template;
