import { useRef, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button/Button";
import { StyledCardInput } from "./styles";
import { createCardApi } from "../../api";
import { BOARD_ID } from "../../constants/constants";

function CardInput({
  setAdd,
  column_data,
  handleCancel,
  onAddNewCardToColumn,
}: any) {
  const [cardTitle, setCardTitle] = useState("");
  const handleCardTitleChange = (e: any) => {
    setCardTitle(e.target.value);
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = () => {
    if (inputRef.current?.value.trim() === "") {
      inputRef.current.focus();
    }
    if (inputRef.current?.value.trim()) {
      const NewCard = {
        boardId: BOARD_ID,
        columnId: column_data._id,
        title: inputRef.current?.value.trim(),
      };

      //Call API
      createCardApi(NewCard).then((card) => {
        let newColumn = { ...column_data };
        newColumn.cards.push(card);
        newColumn.cardOrder.push(card._id);

        onAddNewCardToColumn(newColumn);
      });

      inputRef.current.focus();
      setCardTitle("");
    }
  };

  const handleKey = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
      setCardTitle("");
    }
    if (e.key === "Escape") {
      setAdd(false);
    }
  };

  return (
    <StyledCardInput>
      <textarea
        autoFocus
        name="newcard"
        id="newcard"
        cols={30}
        rows={10}
        placeholder="Nhập tiêu đề cho thẻ này..."
        ref={inputRef}
        value={cardTitle}
        onKeyDown={handleKey}
        onChange={handleCardTitleChange}
      ></textarea>
      <div>
        <Button classname="add" onclick={handleSubmit}>
          Thêm thẻ
        </Button>
        <Button classname="cancel" onclick={handleCancel}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
    </StyledCardInput>
  );
}

export default CardInput;
