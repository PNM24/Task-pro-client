import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
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
} from './AddCard.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { VioletButton } from '../common/FormButton/FormButton.styled';
import sprite from '../../assets/icons/icons.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createCard } from '../../redux/slices/cardsSlice';

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <CustomDatePickerInput onClick={onClick} ref={ref}>
    {value}{' '}
    <span>
      <b>⌵</b>
    </span>
  </CustomDatePickerInput>
));

CustomInput.displayName = 'CustomInput';

const AddCard = ({
  className,
  isOpen = true,
  onClose,
  onAdd,
  boardId,
  columnId,
}) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    console.log(
      'AddCard modal opened. Board ID:',
      boardId,
      'Column ID:',
      columnId
    );
  }, [boardId, columnId]);

  const handleAdd = async values => {
    if (!boardId || !columnId) {
      console.error('boardId or columnId is missing.');
      return;
    }

    const newCardData = {
      ...values,
      labelColor: labelColor,
      deadline: deadline.toISOString(),
    };

    // Adăugăm un console.log pentru a verifica datele înainte de trimitere
    console.log('Data to be sent to backend:', newCardData);

    try {
      const resultAction = await dispatch(
        createCard({ boardId, columnId, ...newCardData })
      );

      if (createCard.fulfilled.match(resultAction)) {
        if (onAdd) onAdd(resultAction.payload); // Callback pentru a actualiza UI-ul local
        onClose(); // Închide modalul
      } else {
        console.error('Failed to add card:', resultAction.error);
      }
    } catch (error) {
      console.error('Error while adding card:', error);
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
        <Title>Add card</Title>

        <Formik
          initialValues={{ title: '', description: '', deadline: '' }}
          validationSchema={validationSchema}
          onSubmit={handleAdd}
        >
          {({
            values,
            handleChange,
            setFieldValue,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form>
              <Input
                name="title"
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
              />
              {touched.title && errors.title && (
                <div className="error">{errors.title}</div>
              )}

              <Textarea
                name="description"
                type="text"
                placeholder="Description"
                value={values.description}
                onChange={handleChange}
              />
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
              )}

              <Label>Label color</Label>
              <LabelColors>
                {['#8FA1D0', '#E09CB5', '#BEDBB0', '#1616164C'].map(color => (
                  <LabelButton
                    type="button" // Setăm tipul butonului la "button"
                    key={color}
                    color={color}
                    selected={labelColor === color}
                    onClick={() => setLabelColor(color)}
                  />
                ))}
              </LabelColors>

              <Label>Deadline</Label>
              <CustomDatePickerInput>
                <DatePicker
                  name="deadline"
                  selected={deadline}
                  onChange={date => {
                    setDeadline(date);
                    setFieldValue('deadline', date.toISOString());
                  }}
                  dateFormat="MMMM d, yyyy"
                  customInput={
                    <CustomInput value={format(deadline, 'MMMM d, yyyy')} />
                  }
                  withPortal={isOnMobile}
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

export default AddCard;
