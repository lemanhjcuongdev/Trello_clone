/* eslint-disable no-restricted-globals */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateColumnApi } from "../../api";
import Button from "../Button/Button";
import { StyledDropdownMenu } from "./styles";

function DropdownMenu(props: any) {
  const { setAdd, setOpen, column_data, onUpdateColumn } = props;
  return (
    <StyledDropdownMenu>
      <div className="header">
        <h3>Thao tác</h3>
        <Button onclick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
      <ul>
        <li
          onClick={() => {
            if (confirm("Bạn có muốn lưu trữ khong?")) {
              const newColumn = {
                ...column_data,
                _destroy: true,
              };
              //Call Update Column API
              updateColumnApi(newColumn._id, newColumn).then(
                (updatedColumn) => {
                  onUpdateColumn(updatedColumn);
                }
              );
            }
            setOpen(false);
          }}
        >
          Lưu trữ danh sách này
        </li>
      </ul>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;
