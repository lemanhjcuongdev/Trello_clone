import { useEffect, useRef, useState } from "react";
import { cloneDeep } from "lodash";

import AddingColumnController from "../../components/AddingColumnController/AddColController";
import CardList from "../../components/CardList/CardList";
import { StyledContainer } from "./styles";
import { mapOrder } from "../../utils/sort";
import {
  boardApi,
  updateBoardApi,
  updateCardApi,
  updateColumnApi,
} from "../../api";
import { BOARD_ID } from "../../constants/constants";

function Container(props: any) {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState<any>([]);

  useEffect(() => {
    boardApi(BOARD_ID).then((board) => {
      setBoard(board);

      //sort Columns by order
      const sortedArray = mapOrder(board.columns, board.columnOrder, "_id");

      setColumns(sortedArray);
    });
  }, []);

  const onUpdateColumn = (newColumn: any) => {
    const updateColumnId = newColumn._id;
    const newColumns = [...columns];
    // newColumn.cardOrder = newColumn.cards.map((c: any) => c._id);
    // setColumns(newColumns);

    const updateIndex = newColumns.findIndex(
      (i: any) => i._id === updateColumnId
    );
    if (newColumn._destroy) {
      newColumns.splice(updateIndex, 1);
    } else {
      newColumns.splice(updateIndex, 1, newColumn);
    }

    let newBoard: any = { ...board };
    newBoard.columnOrder = newColumns.map((c: any) => c._id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };

  //saveListCard
  const dragList = useRef<any>(null);
  const dragOverList = useRef<any>(null);

  //handle drop column and sorting
  const handleSort = () => {
    //duplicate items
    let _columns = cloneDeep(columns);

    //remove and save the dragged item content
    const draggedItem = _columns.splice(dragList.current, 1)[0];

    //switch the position
    _columns.splice(dragOverList.current, 0, draggedItem);

    //reset the position ref
    dragList.current = null;
    dragOverList.current = null;

    //update board columns and column order
    let newBoard: any = cloneDeep(board);
    newBoard.columnOrder = _columns.map((c: any) => c._id);
    newBoard.columns = _columns;

    //update array
    setColumns(_columns);
    setBoard(newBoard);

    //Call API update board
    updateBoardApi(newBoard._id, newBoard).catch((error) => {
      //return old state if server error
      setColumns(columns);
      setBoard(board);
    });
  };

  //Handle Card Drag
  const [isCardDragging, setDragging] = useState(false);
  const dragCard = useRef<any>();
  const dragNode = useRef<any>();

  const handleCardDragStart = (e: any, params: any) => {
    dragCard.current = params;
    dragNode.current = e.target;
    dragNode?.current.addEventListener("dragend", handleCardDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleCardDragEnter = (e: any, params: any) => {
    //get initial card params{columnIndex,cardIndex}
    const currentCard = dragCard.current;

    //if drag at initial position
    if (e.target !== dragNode.current) {
      //duplicate items
      let newColumns = cloneDeep(columns);

      //card Enter index: 0 1 2
      const cardOverIndex = params.cardIndex;

      //card node dragged over
      const draggedCard = newColumns[currentCard.columnIndex].cards.splice(
        currentCard.cardIndex,
        1
      )[0];

      //replace position
      //if drag card to empty column
      if (!newColumns[params.columnIndex].cards.length) {
        newColumns[params.columnIndex].cards[0] = draggedCard;
        draggedCard.columnId = newColumns[params.columnIndex]._id;
      } else {
        newColumns[params.columnIndex].cards.splice(
          cardOverIndex,
          0,
          draggedCard
        );
        draggedCard.columnId = newColumns[params.columnIndex]._id;
      }

      //entered column object
      let currentColumn = newColumns.find(
        (c: any) => c._id === newColumns[params.columnIndex]._id
      );

      dragCard.current = params;

      newColumns.forEach((column: any) => {
        column.cardOrder = column.cards.map((c: any) => c._id);
      });

      setColumns(newColumns);

      //Call API
      // update new column
      updateColumnApi(currentColumn._id, currentColumn).catch(() =>
        setColumns(columns)
      );
      //update old column
      updateColumnApi(
        newColumns[currentCard.columnIndex]._id,
        newColumns[currentCard.columnIndex]
      );
      updateCardApi(draggedCard._id, draggedCard);
    }
  };

  const handleCardDragEnd = (e: any) => {
    setDragging(false);
    dragNode?.current.removeEventListener("dragend", handleCardDragEnd);
    dragCard.current = null;
    dragNode.current = null;
  };

  return (
    <StyledContainer>
      {columns.map((column: any, index: number) => (
        <CardList
          key={index}
          column_data={column}
          setColumns={setColumns}
          columnIndex={index}
          onUpdateColumn={onUpdateColumn}
          onAddNewCardToColumn={onUpdateColumn}
          onDragStart={
            isCardDragging ? null : (e: any) => (dragList.current = index)
          }
          onDragEnter={
            isCardDragging
              ? !column.cards.length //if cards don't have any card, simulate next card index = 0
                ? (e: any) => {
                    handleCardDragEnter(e, {
                      columnIndex: index,
                      cardIndex: 0,
                    });
                  }
                : null
              : //if isCardDragging == false => drag column
                (e: any) => (dragOverList.current = index)
          }
          onDragEnd={isCardDragging ? null : handleSort}
          onCardDragStart={handleCardDragStart}
          onCardDragEnter={isCardDragging ? handleCardDragEnter : null}
        />
      ))}
      <AddingColumnController
        board={board}
        setColumns={setColumns}
        setBoard={setBoard}
      />
    </StyledContainer>
  );
}

export default Container;
