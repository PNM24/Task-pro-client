import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import icons from '../../assets/icons/icons.svg';
import Container from '../../components/common/Container/Container.styled';
import { ButtonOnHomePage } from '../../components/common/FormButton/FormButton.styled';

const HomePage = ({ className: styles }) => {
  const navigate = useNavigate();

  return (
    <section className={styles}>
      <Container>
        <div className="logo">
          <a href="/" className="logo">
            <img src={logo} alt="computer" />
            <div className="logo-text">
              <svg>
                <use href={`${icons}#icon-logoBlackWhite`}></use>
              </svg>
              <span>Task Pro</span>
            </div>
          </a>
        </div>

        <p className="test">
          Supercharge your productivity and take control of your tasks with
          TaskPro - Don&apos;t wait, start achieving your goals now!
        </p>

        <div className="buttonsWrapper">
          <ButtonOnHomePage
            text={'Register'}
            type={'button'}
            handlerFunction={() => {
              navigate('/register');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <ButtonOnHomePage
            text={'Log in'}
            type={'button'}
            handlerFunction={() => {
              navigate('/login');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
