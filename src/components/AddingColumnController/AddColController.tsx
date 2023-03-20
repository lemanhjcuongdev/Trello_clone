import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

import Button from "../Button/Button";
import { StyledAddColumn, StyledColumnInput } from "./styles";
import { createColumnApi } from "../../api";

function AddingColumnController(props: any) {
  const { board, setColumns, setBoard } = props;

  const [isAddingColumn, setAddColumn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleAddingColumn = () => {
    setAddColumn(!isAddingColumn);
  };

  const handleSubmit = () => {
    if (inputRef.current?.value.trim() === "") {
      inputRef.current.value = "";
      inputRef.current.focus();
    }

    if (inputRef.current?.value.trim()) {
      const NewColumn = {
        boardId: board._id,
        title: inputRef.current?.value,
      };

      //Call API
      createColumnApi(NewColumn).then((column) => {
        let newColumn: any;
        let newBoard: any;
        setColumns((prev: any) => {
          newColumn = [...prev, column];
          return newColumn;
        });
        setBoard((prev: any) => {
          newBoard = { ...prev };
          newBoard.columnOrder = newColumn.map((c: any) => c._id);
          newBoard.columns = newColumn;
          return newBoard;
        });
      });
      inputRef.current.value = "";
    }
  };

  const handleKey = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit();
      inputRef.current?.focus();
    }
    if (e.key === "Escape") {
      setAddColumn(false);
    }
  };

  return (
    <StyledAddColumn>
      {isAddingColumn ? (
        <StyledColumnInput>
          <input
            type="text"
            placeholder="Nhập tiêu đề danh sách..."
            autoFocus
            ref={inputRef}
            onKeyDown={handleKey}
            onBlur={(e) => setAddColumn(false)}
          />
          <div>
            <Button classname="add" onclick={handleSubmit}>
              Thêm danh sách
            </Button>
            <Button classname="cancel" onclick={toggleAddingColumn}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
        </StyledColumnInput>
      ) : (
        <Button onclick={toggleAddingColumn}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Thêm danh sách khác</span>
        </Button>
      )}
    </StyledAddColumn>
  );
}

export default AddingColumnController;
