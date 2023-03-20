import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Ul, Li, LogoDiv, ButtonStyle } from "./styles";

function Nav() {
  return (
    <Ul>
      <Li>
        <LogoDiv />
      </Li>
      <Li>
        <span>Các không gian làm việc</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </Li>
      <Li>
        <span>Gần đây</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </Li>
      <Li>
        <span>Đã đánh dấu sao</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </Li>
      <Li>
        <span>Mẫu</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </Li>
      <Li className="create-btn">
        <ButtonStyle>Tạo mới</ButtonStyle>
      </Li>
    </Ul>
  );
}

export default Nav;
