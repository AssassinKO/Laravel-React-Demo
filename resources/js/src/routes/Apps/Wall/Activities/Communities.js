import React from 'react';
import Box from '@material-ui/core/Box';
import CmtGridView from '../../../../@coremat/CmtGridView';
import CmtImage from '../../../../@coremat/CmtImage';
import { useSelector } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 24,
    marginBottom: 24,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 1,
      width: 36,
      height: 4,
      backgroundColor: theme.palette.primary.main,
    },
  },
  comGridRoot: {
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 20,
  },
  comThumbRoot: {
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  },
  comThumb: {
    '& img': {
      width: '100%',
      display: 'block',
    },
  },
  comThumbContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
    padding: 8,
    fontSize: 12,
    color: theme.palette.common.white,
  },
  textLink: {
    fontSize: 14,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
}));

const Communities = () => {
  const classes = useStyles();
  const { userDetail } = useSelector(({ wallApp }) => wallApp);
  const { communities } = userDetail;
  return (
    <Box mb={{ xs: 6, lg: 8, xl: 10 }}>
      <Typography component="div" variant="h3" className={classes.titleRoot}>
        Communities
      </Typography>
      <Box className={classes.comGridRoot}>
        <CmtGridView
          itemPadding={3}
          data={communities}
          renderRow={(item, index) => (
            <Box key={index} className={classes.comThumbRoot}>
              <Box className={classes.comThumb}>
                <CmtImage src={item.thumb} alt={item.name} />
              </Box>
              <Box className={classes.comThumbContent}>{item.name}</Box>
            </Box>
          )}
        />
      </Box>
      <Box className={classes.textLink}>View All</Box>
    </Box>
  );
};

export default Communities;
