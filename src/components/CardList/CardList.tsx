import AddCardController from "../AddingCardController/AddCardController";
import Card from "./Card/Card";
import ListHeader from "./CardListHeader/CardListHeader";
import ListContainer from "./ListContainer/ListContainer";
import { StyledList } from "./styles";
import { mapOrder } from "../../utils/sort";
import { cloneDeep } from "lodash";
import { useState } from "react";

function CardList(props: any) {
  const {
    column_data,
    setColumns,
    columnIndex,
    onUpdateColumn,
    onAddNewCardToColumn,
    onDragStart,
    onDragEnter,
    onDragEnd,

    onCardDragStart,
    onCardDragEnter,
  } = props;

  const cards: any[] = mapOrder(
    column_data.cards,
    column_data.cardOrder,
    "_id"
  );

  const [column, setColumn] = useState(column_data);

  const onUpdateCard = (newCard: any) => {
    const cardIdUpdate = newCard._id;
    let newCards = [...cards];
    const cardIndexUpdate = newCards.findIndex((i) => i._id === cardIdUpdate);
    if (newCard._destroy) {
      //remove card
      newCards.splice(cardIndexUpdate, 1);
    } else {
      newCards.splice(cardIndexUpdate, 1, newCard);
    }
    let newColumn = cloneDeep(column_data);
    newColumn.cardOrder = newCards.map((c) => c._id);
    newColumn.cards = newCards;

    onUpdateColumn(newColumn);
  };

  return (
    <StyledList
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
    >
      <ListHeader onUpdateColumn={onUpdateColumn} column_data={column_data} />
      <ListContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            card_data={card}
            columnIndex={columnIndex}
            cardIndex={index}
            onCardDragStart={onCardDragStart}
            onCardDragEnter={onCardDragEnter}
            onUpdateCard={onUpdateCard}
          />
        ))}
      </ListContainer>
      <AddCardController
        column_data={column_data}
        onAddNewCardToColumn={onAddNewCardToColumn}
      />
    </StyledList>
  );
}

export default CardList;
