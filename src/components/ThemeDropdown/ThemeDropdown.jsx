import Select from 'react-select';
import { setTheme } from '../../redux/auth/slice';
import { useDispatch } from 'react-redux';

const ThemeDropdown = ({ className: styles }) => {
  const dispatch = useDispatch();

  const ThemeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'violet', label: 'Violet' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: state.isFocused ? '0 0 0 1px #5255BC' : 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        boxShadow: '0 0 8px rgba(82, 85, 188, 0.5)',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#161616CC',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#161616CC',
      '&:hover': {
        color: '#161616',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#161616' : '#161616CC',
      transition: 'color 0.2s ease',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#161616' : '#161616CC',
      backgroundColor: state.isSelected ? '#F6F6F7' : 'white',
      '&:hover': {
        backgroundColor: '#F6F6F7',
        color: '#161616',
      },
    }),
  };

  return (
    <div className={styles}>
      <Select
        isSearchable={false}
        placeholder="Theme"
        className="react-select-container"
        classNamePrefix="react-select"
        options={ThemeOptions}
        styles={customStyles}
        onChange={selectedOption => dispatch(setTheme(selectedOption.value))}
      />
    </div>
  );
};

export default ThemeDropdown;
