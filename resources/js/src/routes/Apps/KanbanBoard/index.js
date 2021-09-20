import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import Board from 'react-trello';

import { kanbanBoard } from '../../../@fake-db/apps/kanban-board';
import CardDetail from './CardDetail';
import { Paper } from '@material-ui/core';
import AddNewCard from './AddNewCard';
import LaneCard from './LaneCard';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';
import ListHeader from './ListHeader';

import useStyles from './index.style';
import AddCardButton from './AddCardButton';
import NewListForm from './NewListForm';
import NewListButton from './NewListButton';

//Logged in user
const user = kanbanBoard.members[0];

const KanbanBoard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [boardData, setBoardData] = useState(kanbanBoard.boards);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedLaneId, setSelectedLaneId] = useState(null);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedCard(null);
    setSelectedLaneId(null);
  };

  const shouldReceiveNewData = nextData => {
    setBoardData(nextData);
  };

  const handleCardDelete = (cardId, laneId) => {
    // eslint-disable-next-line no-console
    console.info('handleCardDelete', cardId, laneId);
  };

  const handleCardAdd = (card, laneId) => {
    // eslint-disable-next-line no-console
    console.info('handleCardAdd', card, laneId);
  };

  const handleListAdd = list => {
    // eslint-disable-next-line no-console
    console.info('new Lane', list);
  };

  const getLaneById = id => boardData.lanes.find(item => item.id === id);

  const getCardById = (lane, cardId) => lane.cards.find(item => item.id === cardId);

  const onCardClick = (cardId, metadata, laneId) => {
    const lane = getLaneById(laneId);
    const card = getCardById(lane, cardId);
    setSelectedCard(card);
    setSelectedLaneId(laneId);
    handleDialogOpen();
  };

  const handleDragCard = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    if (sourceLaneId !== targetLaneId) {
      const sourceLane = getLaneById(sourceLaneId);
      const targetLane = getLaneById(targetLaneId);
      const activity = {
        id: idGenerator(),
        user,
        content: `moved the card from "${sourceLane.title}" to "${targetLane.title}"`,
        createdAt: new Date(),
      };
      const updatedCard = {
        ...cardDetails,
        activities: [...cardDetails.activities, activity],
      };

      targetLane.cards.splice(position, 0, updatedCard);
      const updatedBoard = {
        ...boardData,
        lanes: boardData.lanes.map(item => (item.id === targetLane.id ? targetLane : item)),
      };
      setBoardData(updatedBoard);
    }
  };

  const onCardUpdate = (updatedCard, laneId) => {
    const lane = getLaneById(laneId);
    const updatedLane = {
      ...lane,
      cards: lane.cards.map(item => (item.id === updatedCard.id ? updatedCard : item)),
    };
    const updatedBoard = {
      ...boardData,
      lanes: boardData.lanes.map(item => (item.id === updatedLane.id ? updatedLane : item)),
    };
    setBoardData(updatedBoard);
  };

  return (
    <Paper className={classes.paper}>
      <Board
        data={boardData}
        draggable
        onDataChange={shouldReceiveNewData}
        onCardDelete={handleCardDelete}
        onCardAdd={handleCardAdd}
        onCardClick={onCardClick}
        editLaneTitle
        editable
        canAddLanes
        onLaneAdd={handleListAdd}
        components={{
          LaneHeader: ListHeader,
          NewLaneForm: NewListForm,
          NewLaneSection: NewListButton,
          AddCardLink: AddCardButton,
          NewCardForm: AddNewCard,
          Card: LaneCard,
        }}
        handleDragEnd={handleDragCard}
        style={{ backgroundColor: 'transparent' }}
        laneStyle={{
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          width: 280,
        }}
      />
      {openDialog && (
        <CardDetail
          open={openDialog}
          handleClose={handleDialogClose}
          selectedCard={selectedCard}
          onCardUpdate={onCardUpdate}
          selectedLaneId={selectedLaneId}
        />
      )}
    </Paper>
  );
};

export default KanbanBoard;
