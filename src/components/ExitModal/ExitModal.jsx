import { useEffect } from "react";
import useResponsive from "../../hooks/useResponsive";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import {
  OrangeButton,
  WhiteButton,
} from "../common/FormButton/FormButton.styled";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const ExitModal = ({ className: styles, closeModal }) => {
  const { isOnMobile } = useResponsive();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", addCloseEvent);

    function addCloseEvent(event) {
      event.key === "Escape" && closeModal();
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", addCloseEvent);
    };
  });

  return (
    <div
      className={styles}
      onClick={(event) => event.currentTarget === event.target && closeModal()}
    >
      <div className="modalContent">
        <div className="closeBtn">
          <button type="button" onClick={() => closeModal()}>
            {isOnMobile ? <IoReturnDownBackSharp /> : <HiX />}
          </button>
        </div>
        <h2>Are you sure you want to exit?</h2>

        <div className="buttonWrapper">
          <OrangeButton
            type={"button"}
            text={"Exit"}
            handlerFunction={() => dispatch(logout())}
          />

          <WhiteButton
            type="button"
            text={"Cancel"}
            handlerFunction={() => {
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
