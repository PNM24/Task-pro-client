import PropTypes from 'prop-types';
import {
  HeaderContainer,
  Title,
  FiltersButton,
  FilterIcon,
  Text,
} from './HeaderDashboard.styled';
import sprite from '../../assets/icons/icons.svg';

const HeaderDashboard = ({ title }) => {
  const handleFiltersClick = () => {
    console.log('FiltersButton clicked');
  };

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <FiltersButton onClick={handleFiltersClick}>
        <FilterIcon>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-filter`}></use>
          </svg>
        </FilterIcon>
        <Text>Filters</Text>
      </FiltersButton>
    </HeaderContainer>
  );
};

HeaderDashboard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderDashboard;
