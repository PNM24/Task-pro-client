import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { updateProject } from '../../redux/slices/projectsSlice';
import sprite from '../../assets/icons/icons.svg';
import { backgroundImages } from '../../assets/images/background_icons/index.js';
import { GreenButton } from '../common/FormButton/FormButton.styled.js';

const EditBoard = ({ className, isOpen = true, onClose, project }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    title: Yup.string().required('Required *')
  });

  const handleUpdate = (values, { setSubmitting }) => {
    if (values.title.trim() !== '') {
      const updatedData = {
        id: project._id,
        ...values,
      };

      dispatch(updateProject(updatedData))
        .unwrap()
        .then(() => {
          console.log('Board updated:', updatedData);
          onClose();
        })
        .catch(error => {
          console.error('Error updating board:', error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    } else {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className={`${className} modal-overlay`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Edit board</h2>
        <button className="close-button" onClick={onClose}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`}></use>
          </svg>
        </button>

        <Formik
          initialValues={{
            title: project?.title || '',
            icon: project?.icon || 'icon-fourCircles',
            background: project?.background || backgroundImages[0],
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ values, setFieldValue, errors, touched, isSubmitting }) => (
            <Form>
              <div className={`field ${touched.title && errors.title ? 'onError' : ''}`}>
                <Field
                  name="title"
                  type="text"
                  placeholder="Title"
                />
                <div className="error">
                  {touched.title && errors.title && <span>{errors.title}</span>}
                </div>
              </div>

              <div className="icons-section">
                <h3>Icons</h3>
                <div className="icons-container">
                  {['icon-fourCircles', 'icon-star', 'icon-loading', 'icon-puzzlePiece', 'icon-cube', 'icon-lightning', 'icon-threeCircles', 'icon-hexagon'].map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      className={`icon-button ${values.icon === icon ? 'selected' : ''}`}
                      onClick={() => setFieldValue('icon', values.icon === icon ? 'icon-fourCircles' : icon)}
                    >
                      <svg width="18" height="18">
                        <use href={`${sprite}#${icon}`}></use>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="backgrounds-section">
                <h3>Background</h3>
                <div className="backgrounds-container">
                  {backgroundImages.map((image, index) => (
                    <div
                      key={index}
                      className={`background-option ${values.background === image ? 'selected' : ''}`}
                    >
                      <img
                        src={image}
                        alt={`Fundal ${index}`}
                        onClick={() => setFieldValue('background', values.background === image ? backgroundImages[0] : image)}
                      />
                      {values.background === image && (
                        <div className="selected-overlay">
                          <svg width="18" height="18">
                            <use href={`${sprite}#icon-checkmark`}></use>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <GreenButton
                type="submit"
                text={
                  <>
                    <span className="plus-icon">
                      <svg width="28" height="28">
                        <use href={`${sprite}#icon-plusWhite`}></use>
                      </svg>
                    </span>
                    Edit
                  </>
                }
                handlerFunction={() => {}}
                isDisabled={isSubmitting}
                className="edit-button"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default EditBoard;
