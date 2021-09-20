import React, { useState } from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
import useStyles from './BaseItem.style';
import Collapse from '@material-ui/core/Collapse';

const BaseItem = ({ avatar, title, username, item, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.feedItemRoot} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={50} src={avatar} alt={username} />}
        title={title}
        subTitle={item.timeRange}
        subTitleProps={{ className: classes.subTitleRoot }}
        actionsComponent={<Box className={classes.actionDateRoot}>{timeFromNow(item.createdAt)}</Box>}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box className={classes.btnActions}>{children}</Box>
        </Collapse>
      </CmtMediaObject>
    </Box>
  );
};

export default BaseItem;
