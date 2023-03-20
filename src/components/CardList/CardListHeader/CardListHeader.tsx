import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { updateColumnApi } from "../../../api";
import AddCardController from "../../AddingCardController/AddCardController";

import { CustomButton } from "../../Button/styles";
import CardInput from "../../CardInput/CardInput";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import { StyledListHeader } from "./styles";

interface ListHeader {
  classname?: string;
  onUpdateColumn: any;
  column_data: any;
  draggable?: boolean;
  onDragStart?: any;
  onDragEnter?: any;
  onDragEnd?: any;
  onDragOver?: any;
}

function ListHeader(props: ListHeader) {
  const {
    classname,
    onUpdateColumn,
    column_data,
    draggable,
    onDragStart,
    onDragEnter,
    onDragEnd,
    onDragOver,
  } = props;
  const [isAdding, setAdd] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const initHeading = column_data.title;

  const toggleAddingCard = () => {
    setAdd(!isAdding);
  };
  const toggleDropdownMenu = () => {
    setOpen(!isOpen);
  };

  const handleHeadingChange = (e: any) => {
    setHeading(e.target.value);
  };
  useEffect(() => {
    setHeading(column_data.title);
  }, [column_data.title]);

  const handleUpdateHeading = (e: any) => {
    //if title from API === title from state => don't call API
    if (column_data.title !== heading.trim()) {
      const newColumn = {
        ...column_data,
        title: heading.trim(),
      };

      //Call Update Column API
      updateColumnApi(newColumn._id, newColumn).then((updatedColumn) => {
        updatedColumn.cards = newColumn.cards;
        onUpdateColumn(updatedColumn);
      });
    }
    setHeading(heading.trim());
  };
  const handleSelectAllText = (e: any) => {
    e.preventDefault();
    (e.target as HTMLInputElement).select();
  };

  const handleKey = (e: any) => {
    if (e.key == "Enter") {
      e.target.blur();
    }
    if (e.key == "Escape") {
      setHeading(initHeading);
    }
  };

  return (
    <>
      <StyledListHeader>
        <textarea
          value={heading}
          onChange={handleHeadingChange}
          onBlur={handleUpdateHeading}
          onKeyDown={handleKey}
          onClick={handleSelectAllText}
          spellCheck="false"
        />
        {!isAdding && (
          <CustomButton onClick={toggleDropdownMenu}>
            <FontAwesomeIcon icon={faEllipsis} />
          </CustomButton>
        )}
        {isOpen && (
          <DropdownMenu
            setAdd={setAdd}
            setOpen={setOpen}
            column_data={column_data}
            onUpdateColumn={onUpdateColumn}
          />
        )}
      </StyledListHeader>
    </>
  );
}

export default ListHeader;
