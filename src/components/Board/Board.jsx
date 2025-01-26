import {
  BoardContainer,
  AddColumnButton,
  BoardHeader,
  BoardTitle,
  Title,
  Filters,
  Text,
  FilterIcon,
  BurgerMenu,
  Theme,
  UserName,
  UserPicture,
  Nav,
} from './Board.styled';
import StyledColumnContainer from '../ColumnContainer/ColumnContainer.styled';
import StyledCardContent from '../CardContent/CardContent.styled';
import sprite from '../../assets/icons/icons.svg';
import image from '../../assets/images/vector.png';

const Board = ({ columns }) => {
  return (
    <>
      <BoardHeader>
        <BurgerMenu>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </BurgerMenu>
        <Nav>
          <Theme>
            Theme
            <svg width="18" height="18">
              <use href={`${sprite}#icon-dropDown`}></use>
            </svg>
          </Theme>
          <UserName>Ivetta</UserName>
          <UserPicture>
            <img src={image} alt="User image"></img>
          </UserPicture>
        </Nav>
      </BoardHeader>
      <BoardTitle>
        <Title>Board Title</Title>
        <Filters>
          <FilterIcon>
            <svg width="18" height="18">
              <use href={`${sprite}#icon-filter`}></use>
            </svg>
          </FilterIcon>
          <Text>Filters</Text>
        </Filters>
      </BoardTitle>
      <BoardContainer>
        {columns.map((column, index) => (
          <StyledColumnContainer key={index}>
            <h2>{column.title}</h2>
            {column.cards.map((card, cardIndex) => (
              <StyledCardContent
                key={cardIndex}
                title={card.title}
                description={card.description}
                priority={card.priority}
                deadline={card.deadline}
              />
            ))}
          </StyledColumnContainer>
        ))}
        <AddColumnButton>
          <span className="plus-icon">
            <svg width="28" height="28">
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          Add another column
        </AddColumnButton>
      </BoardContainer>
    </>
  );
};

export default Board;
