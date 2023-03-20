import {
  faBell,
  faCircleQuestion,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Ul, Li } from "./styles";

function ActionMenu() {
  return (
    <Ul>
      <Li className="input_search">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input type="text" placeholder="Tìm kiếm" />
      </Li>
      <Li>
        <FontAwesomeIcon icon={faBell} />
      </Li>
      <Li>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </Li>
      <Li>
        <FontAwesomeIcon icon={faUser} />
      </Li>
    </Ul>
  );
}

export default ActionMenu;
