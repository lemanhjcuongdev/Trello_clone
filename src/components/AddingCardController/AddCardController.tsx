import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import CardInput from "../CardInput/CardInput";
import { AddCardBtn } from "./styles";

function AddCardController(props: any) {
  const { column_data, onAddNewCardToColumn } = props;
  const [isAdding, setAdd] = useState(false);

  const toggleAddingCard = () => {
    setAdd(!isAdding);
  };

  return (
    <>
      {isAdding ? (
        <CardInput
          setAdd={setAdd}
          handleCancel={toggleAddingCard}
          column_data={column_data}
          onAddNewCardToColumn={onAddNewCardToColumn}
        />
      ) : (
        <AddCardBtn onClick={toggleAddingCard}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Thêm thẻ</span>
        </AddCardBtn>
      )}
    </>
  );
}

export default AddCardController;
