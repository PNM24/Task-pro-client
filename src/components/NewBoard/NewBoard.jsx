import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import sprite from '../../assets/icons/icons.svg';
import { backgroundImages } from '../../assets/images/background_icons/index.js';
import { GreenButton } from '../common/FormButton/FormButton.styled.js';

const NewBoard = ({
  className = '',
  isOpen = true,
  onClose,
  onCreate,
}) => {
  const [selectedIcon, setSelectedIcon] = useState('icon-fourCircles');
  const [selectedBackground, setSelectedBackground] = useState(backgroundImages?.[0] || '');

  const validationSchema = Yup.object({
    title: Yup.string().required('Required *'),
  });

  const handleCreate = (values, { setSubmitting }) => {
    if (values.title.trim() === '') {
      setSubmitting(false);
      return;
    }

    const newBoardData = {
      ...values,
      icon: selectedIcon,
      background: selectedBackground,
    };

    console.log('Creating board:', newBoardData);

    onCreate?.(newBoardData);
    onClose?.();
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose?.();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className={`${className} modal-overlay`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>New board</h2>
        <button className="close-button" onClick={() => onClose?.()}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`} />
          </svg>
        </button>

        <Formik
          initialValues={{ title: '' }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className={`field ${touched.title && errors.title ? 'onError' : ''}`}>
                <Field name="title" type="text" placeholder="Title" />
                {touched.title && errors.title && <div className="error">{errors.title}</div>}
              </div>

              {/* Icons Selection */}
              <div className="icons-section">
                <h3>Icons</h3>
                <div className="icons-container">
                  {[
                    'icon-fourCircles', 'icon-star', 'icon-loading',
                    'icon-puzzlePiece', 'icon-cube', 'icon-lightning',
                    'icon-threeCircles', 'icon-hexagon'
                  ].map(icon => (
                    <button
                      key={icon}
                      type="button"
                      className={`icon-button ${selectedIcon === icon ? 'selected' : ''}`}
                      onClick={() => setSelectedIcon(icon)}
                    >
                      <svg width="18" height="18">
                        <use href={`${sprite}#${icon}`} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Background Selection */}
              <div className="backgrounds-section">
                <h3>Background</h3>
                <div className="backgrounds-container">
                  {backgroundImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Background ${index}`}
                      className={selectedBackground === image ? 'selected' : ''}
                      onClick={() => setSelectedBackground(image)}
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <GreenButton
                type="submit"
                text={
                  <>
                    <span className="plus-icon">
                      <svg width="28" height="28">
                        <use href={`${sprite}#icon-plusWhite`} />
                      </svg>
                    </span>
                    Create
                  </>
                }
                isDisabled={isSubmitting}
                className="create-button"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default NewBoard;
