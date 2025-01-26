import styled from 'styled-components';
import ColumnContainer from './ColumnContainer';

const StyledColumnContainer = styled(ColumnContainer)`
  .column {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    width: 100%;
    max-width: 335px;
    height: 618px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 0;
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  }

  .column-title {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px 17px 20px;
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
    border-radius: 8px;
  }

  .text-title {
    font-size: 14px;
    font-weight: 500;
    color: #161616;
    margin: 0;
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

  .cards-list {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-height: calc(100% - 56px - 14px - 56px - 14px); // Înălțime totală minus (titlu + gap + buton + gap)

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #FFFFFF;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #B8BCFD;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #9A9FFC;
    }
  }

  .add-button {
    width: 100%;
    height: 56px;
    padding: 14px;
    background-color: #5255BC;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5px;
    font-weight: 500;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
      background-color: #8385D1;
      transform: scale(1.01);
    }

    &:before {
      background-color: #8385D1;
    }

    &:hover:not(:disabled) {
      scale: 1.02;
      box-shadow: 0px 4px 10px 0px #8385D1;
      border: 0;
    }

    svg {
      margin-right: 8px;

      .icon-plus-background {
        fill: white;
      }

      .icon-plus-symbol {
        stroke: #5255BC;
      }
    }
  }

  // Design flexibil pentru ecrane foarte mici (320px - 374px)
  @media (min-width: 320px) and (max-width: 374px) {
    .column {
      width: 100%;
      max-width: 100%;
      padding: 0 10px;
    }
  }

  // Design adaptabil de la 375px
  @media (min-width: 375px) {
    .column {
      width: 335px;
      padding: 0;
    }
  }

  // Tabletă
  @media (min-width: 768px) {
    .column {
      width: 334px;
      height: 780px;
    }

    .cards-list {
      max-height: calc(100% - 56px - 14px - 56px - 14px);
    }
  }

  // Desktop
  @media (min-width: 1440px) {
    .column {
      width: 334px;
      height: 618px;
    }

    .cards-list {
      max-height: calc(100% - 56px - 14px - 56px - 14px);
    }
  }
`;

export default StyledColumnContainer;
