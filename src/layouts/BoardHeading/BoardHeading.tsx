import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faUserGroup,
  faChartSimple,
  faChevronDown,
  faRocket,
  faBoltLightning,
  faFilter,
  faUserPlus,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/Button/Button";
import {
  BoadDivider,
  LeftBoardHeading,
  RightBoardHeading,
  StyledBoardHeading,
} from "./styles";

function BoardHeading() {
  return (
    <StyledBoardHeading>
      <LeftBoardHeading>
        <h1>Trello</h1>
        <Button classname="star">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </Button>
        <BoadDivider />
        <Button>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>Hiển thị trong không gian làm việc</span>
        </Button>
        <BoadDivider />
        <Button classname="board">
          <FontAwesomeIcon icon={faChartSimple} />
          <span>Bảng</span>
        </Button>
        <Button>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </LeftBoardHeading>
      <RightBoardHeading>
        <Button>
          <FontAwesomeIcon icon={faRocket} />
          <span>Tiện ích bổ sung</span>
        </Button>
        <Button>
          {" "}
          <FontAwesomeIcon icon={faBoltLightning} />
          <span>Tự động hóa</span>
        </Button>
        <BoadDivider />
        <Button>
          <FontAwesomeIcon icon={faFilter} />
          <span>Lọc</span>
        </Button>
        <BoadDivider />
        <Button>
          <FontAwesomeIcon icon={faUser} />
        </Button>
        <Button classname="share">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Chia sẻ</span>
        </Button>
        <BoadDivider />
        <Button>
          <FontAwesomeIcon icon={faEllipsis} />
        </Button>
      </RightBoardHeading>
    </StyledBoardHeading>
  );
}

export default BoardHeading;
