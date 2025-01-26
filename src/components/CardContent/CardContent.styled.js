// client/src/components/CardContent/CardContent.styled.js
import styled from 'styled-components';
import CardContent from './CardContent';

const StyledCardContent = styled(CardContent)`
  .card-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    background-color: #f0f0f0;
    /* padding: 20px; */
  }

  .card-container {
    width: 335px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
    overflow: hidden;
    padding: 14px 21px 14px 24px;
    position: relative;
  }

  .card-container::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${props => props.labelColor || '#FFC0CB'};
  }

  .card-header {
    margin-bottom: 14px;
  }

  .card-header h3 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #161616;
  }

  .card-header p {
    font-size: 12px;
    color: #5C5C5C;
    margin: 0;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card-footer {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .priority-deadline-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .label {
    font-size: 8px;
    color: #8C8C8C;
  }

  .priority-deadline-values {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }

  .priority, .deadline {
    font-size: 12px;
    color: #161616;
  }

  .priority {
    display: flex;
    flex-direction: column;
    gap: 5.5px
  }

  .deadline {
    display: flex;
    flex-direction: column;
    gap: 5.5px
  }

  .priority-content {
    display: flex;
  }
  .priority-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 4px;
  }

  .priority-deadline-text {
    font-size: 10px;
  }

  .footer-divider {
    height: 1px;
    background-color: #E0E0E0;
    margin: 14px 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .actions button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
  }

  .actions svg {
    width: 16px;
    height: 16px;
    fill: #161616;
    opacity: 0.5;
    stroke: #161616;
    stroke-width: 1.3px;
    transition: all 0.2s ease-in-out;
  }

  .actions button:hover {
    transform: scale(1.1);
  }

  .actions button:hover svg {
    opacity: 0.8;
    fill: #000000;
    stroke: #000000;
  }

  @media (min-width: 768px) {
    .card-container {
      width: 334px;
      padding: 14px 20px 14px 24px;
    }
  }
`;

export default StyledCardContent;
