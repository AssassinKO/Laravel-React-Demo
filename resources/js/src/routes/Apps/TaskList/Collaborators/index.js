import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCollaborators from './AddCollaborators';
import CmtList from '../../../../@coremat/CmtList';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  subTaskTitle: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    marginBottom: 12,
  },
}));

const Collaborators = ({ collaborators, updateCollaborators }) => {
  const [openCollaborator, setOpenCollaborator] = useState(false);

  const classes = useStyles();
  return (
    <Box p={6}>
      <Typography component="div" variant="h6" className={classes.subTaskTitle}>
        Collaborators
      </Typography>
      <Box display="flex" alignItems="center">
        <CmtAvatarGroup
          max={3}
          items={collaborators}
          srcKey="profilePic"
          titleKey="name"
          renderMore={restItems => <RenderMore items={restItems} />}
          renderItemSummary={(item, index) => <RenderRow key={index} item={item} />}
        />
        <IconButton onClick={() => setOpenCollaborator(true)}>
          <PersonAddIcon />
        </IconButton>
      </Box>
      <AddCollaborators
        collaborators={collaborators}
        updateCollaborators={updateCollaborators}
        open={openCollaborator}
        handleClose={() => setOpenCollaborator(false)}
      />
    </Box>
  );
};
const RenderRow = ({ item, placeholderLength }) => {
  return (
    <React.Fragment>
      <Typography color="inherit">{item.name}</Typography>
      <Box pb={2} component="p">
        {item.email}
      </Box>
      <CmtAvatar src={item.profilePic} alt={item.name} variant="rounded" size={125} phCharLength={placeholderLength} />
    </React.Fragment>
  );
};

const RenderMore = ({ items, placeholderLength }) => {
  const classes = useStyles();

  return (
    <CmtList
      data={items}
      renderRow={(item, index) => {
        return (
          <CmtObjectSummary
            key={index}
            avatar={
              <CmtAvatar
                className={classes.avatarRoot}
                color="orange"
                size={40}
                src={item.profilePic}
                alt={item.name}
                phCharLength={placeholderLength}
              />
            }
            title={item.name}
            titleProps={{ className: classes.titleRoot }}
          />
        );
      }}
    />
  );
};

export default Collaborators;
