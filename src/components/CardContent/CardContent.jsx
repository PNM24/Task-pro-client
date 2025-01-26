// client/src/components/CardContent/CardContent.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/icons.svg';

const CardContent = ({
  className,
  title = "Research and Analysis",
  description = "Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify...",
  priority = "Medium",
  deadline = "12/05/2023",
  labelColor = "#FFC0CB",
  onMoveForward,
  onEdit,
  onDelete
}) => {
  return (
    <div className={`${className} card-content-wrapper`}>
      <div className="card-content-wrapper">
      <div className="card-content card-container">
        <div className="card-header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="footer-divider"></div>
        <div className="card-footer">
            <div className="priority-deadline-values">
              <div className="priority">
                <div className="label">Priority</div>
                <div className="priority-content">
                    <div className="priority-dot" style={{ backgroundColor: labelColor }}></div>
                    <div className="priority-deadline-text">{priority}</div>
                </div>
              </div>
              <div className="deadline">
                <div className="label">Deadline</div>
                <div className="priority-deadline-text">{deadline}</div>
              </div>
            </div>

          <div className="actions">
            <button onClick={onMoveForward} aria-label="Move forward">
              <svg><use href={`${sprite}#icon-entry`} /></svg>
            </button>
            <button onClick={onEdit} aria-label="Edit card">
              <svg><use href={`${sprite}#icon-pencil`} /></svg>
            </button>
            <button onClick={onDelete} aria-label="Delete card">
              <svg><use href={`${sprite}#icon-trash`} /></svg>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  deadline: PropTypes.string,
  labelColor: PropTypes.string,
  onMoveForward: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default CardContent;
