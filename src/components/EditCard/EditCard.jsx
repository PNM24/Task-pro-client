import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  PopUpContainer,
  CloseButton,
  Title,
  Label,
  LabelColors,
  LabelButton,
  CustomDatePickerInput,
  Textarea,
  Input,
} from './EditCard.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { VioletButton } from '../common/FormButton/FormButton.styled';
import sprite from '../../assets/icons/icons.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <CustomDatePickerInput onClick={onClick} ref={ref}>
    {value}{' '}
    <span>
      <b>⌵</b>
    </span>
  </CustomDatePickerInput>
));

CustomInput.displayName = 'CustomInput';

const EditCard = ({
  className,
  isOpen = true,
  onClose = () => console.log('Close function not implemented yet'),
  onAdd = () => console.log('Create function not implemented yet'),
}) => {
  const [labelColor, setLabelColor] = useState('#8FA1D0');
  const [deadline, setDeadline] = useState(new Date());
  const [isOnMobile, setIsOnMobile] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string().required('Required *'),
  });

  const checkIsOnMobile = () => {
    setIsOnMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsOnMobile();
    window.addEventListener('resize', checkIsOnMobile);
    return () => {
      window.removeEventListener('resize', checkIsOnMobile);
    };
  }, []);

  const handleAdd = values => {
    console.log('Creating board:', {
      ...values,
      icon: labelColor,
    });
    if (onAdd) {
      onAdd({
        ...values,
        icon: labelColor,
      });
    }
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <Overlay
      className={`${className} modal-overlay`}
      onClick={handleOverlayClick}
    >
      <PopUpContainer className="modal-content">
        <CloseButton onClick={onClose}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-closeBtn`}></use>
          </svg>
        </CloseButton>
        <Title>Edit card</Title>

        <Formik
          initialValues={{ title: '', description: '', deadline: '' }}
          validationSchema={validationSchema}
          onSubmit={handleAdd}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div
                className={`field ${
                  touched.title && errors.title ? 'onError' : ''
                }`}
              ></div>
              <Input name="title" type="text" placeholder="Title" />
              <div className="error">
                {touched.title && errors.title && <span>{errors.title}</span>}
              </div>
              <div
                className={`field ${
                  touched.description && errors.description ? 'onError' : ''
                }`}
              ></div>
              <Textarea
                name="description"
                type="text"
                placeholder="Description"
              />
              <div className="error">
                {touched.description && errors.description && (
                  <span>{errors.description}</span>
                )}
              </div>
              <Label>Label color</Label>
              <LabelColors>
                {['#8FA1D0', '#E09CB5', '#BEDBB0', '#1616164C'].map(color => (
                  <LabelButton
                    key={color}
                    color={color}
                    selected={labelColor === color}
                    onClick={() => {
                      setLabelColor(color);
                      isSubmitting('labelColor', color);
                    }}
                  />
                ))}
              </LabelColors>
              <Label>Deadline</Label>
              <CustomDatePickerInput>
                <DatePicker
                  selected={deadline}
                  onChange={date => setDeadline(date)}
                  dateFormat="MMMM d, yyyy"
                  customInput={
                    <CustomInput value={format(deadline, 'MMMM d, yyyy')} />
                  }
                  withPortal={isOnMobile ? true : false}
                  toggleCalendarOnIconClick
                />
              </CustomDatePickerInput>

              <VioletButton
                type="submit"
                text={
                  <>
                    <span className="plus-icon">
                      <svg width="28" height="28">
                        <use href={`${sprite}#icon-plusWhite`}></use>
                      </svg>
                    </span>
                    Add
                  </>
                }
                handlerFunction={() => {}}
                isDisabled={isSubmitting}
                className="add-button"
              />
            </Form>
          )}
        </Formik>
      </PopUpContainer>
    </Overlay>
  );

  return createPortal(modalContent, document.body);
};

export default EditCard;
