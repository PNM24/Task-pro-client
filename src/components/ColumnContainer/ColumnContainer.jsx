import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledCardContent from '../CardContent/CardContent.styled';
import sprite from '../../assets/icons/icons.svg';
import { GreenButton } from '../common/FormButton/FormButton.styled.js';

const ColumnContainer = ({ className, columnId,onEdit, onDelete }) => {
  const [title, setTitle] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulăm preluarea datelor din baza de date
    const fetchData = async () => {
      // În viitor, aici va fi un apel real către baza de date
      await new Promise(resolve => setTimeout(resolve, 500));

      setTitle('In progress');

      const cardData = [
        {
          title: "Design and Prototyping SoYummy",
          description: "Create visually appealing and functional design prototypes based on the approved concepts...",
          priority: "Low",
          deadline: "12/05/2023",
          labelColor: "#8FA1D0",
        },
        {
          title: "Content Creation",
          description: "Generate engaging and persuasive content for various project deliverables, such as...",
          priority: "High",
          deadline: "12/05/2023",
          labelColor: "#BEDBB0",
        },
        {
          title: "Quiz Creation",
          description: "Create engaging and interactive quizzes using Kahoot's intuitive quiz builder. Design questions...",
          priority: "Without",
          deadline: "12/05/2023",
          labelColor: "#E09CB5",
        },
        {
          title: "Publication of the project",
          description: "Review the project materials. Familiarize yourself with the project's content, including text, images...",
          priority: "High",
          deadline: "12/05/2023",
          labelColor: "#BEDBB0",
        },
      ];

      setCards(cardData.map((data, index) => ({
        id: index + 1,
        component: <StyledCardContent key={index + 1} {...data} />
      })));
    };

    fetchData();
  }, [columnId]);

  const handleAddCard = () => {
    console.log('Adăugare card nou');
    // Aici va fi logica pentru adăugarea unui nou card
  };

  return (
    <div className={className}>
      <div className="column">
        <div className="column-title">
        <h2 className="text-title">{title}</h2>
        <div className="actions">
              <button onClick={onEdit} aria-label="Edit card">
              <svg><use href={`${sprite}#icon-pencil`} /></svg>
            </button>
            <button onClick={onDelete} aria-label="Delete card">
              <svg><use href={`${sprite}#icon-trash`} /></svg>
            </button>
          </div>
        </div>

      <div className="cards-list">
        {cards.map(card => card.component)}
      </div>
      <GreenButton
  type="button"
  text={
    <>
      <span className="plus-icon">
        <svg width="28" height="28">
          <use href={`${sprite}#icon-plusWhite`}></use>
        </svg>
      </span>
      Add another card
    </>
  }
  handlerFunction={handleAddCard}
  isDisabled={false}
  className="add-button"
/>
      </div>
    </div>
  );
};

ColumnContainer.propTypes = {
  className: PropTypes.string,
  columnId: PropTypes.string.isRequired,
};

export default ColumnContainer;
