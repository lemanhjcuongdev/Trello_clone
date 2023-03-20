/* eslint-disable no-restricted-globals */
import { faAlignLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { updateCardApi } from "../../../api";

import Button from "../../Button/Button";
import { StyledCard } from "./styles";
import ICardProps from "./types";

function Card(props: ICardProps) {
  const {
    classname,
    card_data,
    columnIndex,
    cardIndex,
    onCardDragStart,
    onCardDragEnter,
    onUpdateCard,
    ...otherProps
  } = props;

  const [isEditing, setEdit] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const initCardTitle = card_data.title;

  useEffect(() => {
    setCardTitle(card_data.title);
  }, [card_data.title]);

  const handleEditStart = (e: any) => {
    setEdit(true);
  };

  const handleSaveEdit = (e: any) => {
    setEdit(false);

    if (cardTitle !== card_data.title) {
      const newCard = {
        ...card_data,
        title: cardTitle,
      };

      //Call API UpdateCard
      updateCardApi(newCard._id, newCard).then((updatedCard) => {
        onUpdateCard(updatedCard);
      });
    }
  };
  const handleDeleteEdit = (e: any) => {
    if (confirm("Bạn có muốn lưu trữ khong?")) {
      const newCard = {
        ...card_data,
        _destroy: true,
      };
      updateCardApi(newCard._id, newCard).then((updatedCard) => {
        onUpdateCard(updatedCard);
      });
    }
    setEdit(false);
  };

  const handleCardTitleChange = (e: any) => {
    setCardTitle(e.target.value);
  };
  const handleKey = (e: any) => {
    if (e.key == "Enter") {
      e.preventDefault();
      e.target.blur();
      setEdit(false);
      handleSaveEdit(e);
    }
    if (e.key == "Escape") {
      setCardTitle(initCardTitle);
      setEdit(false);
    }
  };

  return (
    <StyledCard
      className={classname}
      draggable
      onDragStart={(e) => {
        //PREVENT PARENT's EVENT AFFECTING CHILD's EVENT
        e.stopPropagation();
        onCardDragStart(e, { columnIndex, cardIndex });
      }}
      onDragEnter={(e) => {
        onCardDragEnter &&
          onCardDragEnter instanceof Function &&
          onCardDragEnter(e, { columnIndex, cardIndex });
      }}
      {...otherProps}
    >
      {isEditing ? (
        <textarea
          value={cardTitle}
          spellCheck="false"
          onChange={handleCardTitleChange}
          onKeyDown={handleKey}
          autoFocus
          className="editCardInput"
          onClick={(e) => {
            document.execCommand("selectAll", false);
          }}
        ></textarea>
      ) : (
        <span>{cardTitle}</span>
      )}

      <Button classname="edit_card" onclick={handleEditStart}>
        <FontAwesomeIcon icon={faPencil} />
      </Button>
      {card_data.content ? (
        <FontAwesomeIcon title="Thẻ đã có miêu tả" icon={faAlignLeft} />
      ) : null}
      {isEditing && (
        <div className="edit_control">
          <Button classname="save_card" onclick={handleSaveEdit}>
            Lưu thay đổi
          </Button>
          <Button classname="delete_card" onclick={handleDeleteEdit}>
            Lưu trữ
          </Button>
        </div>
      )}
    </StyledCard>
  );
}

export default Card;
