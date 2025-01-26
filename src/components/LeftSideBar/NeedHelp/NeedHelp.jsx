import cactusPot from '../../../assets/images/cactusPot.png';
import icons from '../../../assets/icons/icons.svg';

const NeedHelp = ({ className: styles }) => {
  return (
    <div className={styles}>
      <img src={cactusPot} alt="Cactus Pot" />
      <p>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <div>
        <svg>
          <use href={`${icons}#icon-helpCircle`}></use>
        </svg>
        <span>Need help?</span>
      </div>
    </div>
  );
};

export default NeedHelp;
