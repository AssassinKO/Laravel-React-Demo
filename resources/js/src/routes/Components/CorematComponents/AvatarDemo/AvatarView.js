import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { coremat } from '../../../../@fake-db/coremat-components';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const AvatarView = () => {
  const classes = useStyles();
  const { variant, size, color } = useContext(CorematContext);

  return (
    <JumboCard>
      <Box className={classes.root}>
        <CmtAvatar color={color} size={size} variant={variant} src={coremat.avatar} alt="avatar" />
        <CmtAvatar color={color} size={size} variant={variant}>
          NP
        </CmtAvatar>
        <CmtAvatar color={color} size={size} variant={variant}>
          <FavoriteIcon />
        </CmtAvatar>
        <CmtAvatar color={color} size={size} variant={variant} />
      </Box>
    </JumboCard>
  );
};

export default AvatarView;
