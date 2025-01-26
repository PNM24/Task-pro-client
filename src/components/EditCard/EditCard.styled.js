import styled from 'styled-components';
import EditCard from './EditCard';

const StyledEditCard = styled(EditCard)`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 0;
  }

  .plus-icon {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopUpContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 335px;
  height: 522px;
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #5255bc;
  border-radius: 5px;
  font-size: 14px;
  height: 49px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #5255bc;
  border-radius: 5px;
  font-size: 14px;
  height: 154px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const LabelColors = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  margin-bottom: 20px;
`;

export const LabelButton = styled.button`
  background: ${props => props.color || 'gray'};
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: ${props => (props.selected ? '2px solid white' : 'none')};
  box-shadow: ${props =>
    props.selected
      ? `0 0 0 3px ${props.color}, 0 0 5px rgba(0, 0, 0, 0.3)`
      : 'none'};
`;

export const Button = styled.button`
  background: #90ee90;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #76c776;
  }
`;

export const AddButton = styled.button`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #5255bc;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 30px;
`;

export const PlusIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 5px;
  width: 28px;
  height: 28px;
  color: #5255bc;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 8px;
`;

export const CustomDatePickerInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: #5255bc;
  cursor: pointer;

  input {
    border: none; /* Remove border from input */
    outline: none; /* Remove outline */
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
    margin-left: -4px;
    background-color: transparent;
  }

  span {
    margin-left: 8px;
    border-style: none;
  }

  svg {
    position: absolute;
    right: 200px;
    pointer-events: none; /* Prevent interaction with the icon */
    color: #5255bc;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .react-datepicker {
    font-family: Arial, sans-serif;
    border: 1px solid #5255bc; /* Change the border color of the calendar container */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust shadow if needed */
    z-index: 1000;
  }

  .react-datepicker__header {
    margin-top: 10px;
    background-color: #fff; /* Header background color */
    border-bottom: none; /* Remove the default bottom border */
    position: relative; /* Required for absolute positioning of the pseudo-element */
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .react-datepicker__header::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0; /* Position at the bottom of the header */
    left: 0;
    width: 100%; /* Full width of the header */
    height: 2px; /* Height of the border line */
    background-color: #ccc; /* Color of the border line */
  }

  .react-datepicker__current-month {
    color: #161616; /* Current month text color */
    padding-bottom: 4px; /* Space below the month text to accommodate the border */
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #3a3a3a; /* Change the color of day numbers */
  }

  .react-datepicker__day--today {
    background-color: transparent; /* Remove background color for today’s date */
    color: #3a3a3a; /* Change the color of text for today’s date */
    font-weight: normal; /* Remove bold styling for today’s date */
    border-style: none;
  }

  .react-datepicker__day--selected {
    background-color: #5255bc; /* Change the background color of selected day */
    color: #fff; /* Change the color of text on selected day */
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #5255bc; /* Change the background color of keyboard selected day */
    color: #fff; /* Change the color of text on keyboard selected day */
    border-radius: 50%;
  }

  .react-datepicker__day--outside-month {
    color: #b0b0b0; /* Color for days outside the current month */
  }

  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    margin-top: 10px;
    color: #5255bc;
  }

  .react-datepicker__navigation--previous {
    border-right-color: #5255bc; /* Change the border color for the previous arrow */
  }

  .react-datepicker__navigation--next {
    border-left-color: #5255bc; /* Change the border color for the next arrow */
  }

  .react-datepicker__navigation-icon {
    color: #5255bc; /* Icon color */
  }
`;

export default StyledEditCard;
