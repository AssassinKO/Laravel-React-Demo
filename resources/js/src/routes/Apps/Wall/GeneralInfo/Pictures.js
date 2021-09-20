import React from 'react';
import Box from '@material-ui/core/Box';
import CmtGridView from '../../../../@coremat/CmtGridView';
import CmtImage from '../../../../@coremat/CmtImage';
import PropTypes from 'prop-types';
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
  imgRoot: {
    borderRadius: 6,
    cursor: 'pointer',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      display: 'block',
    },
  },
  textLink: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    textTransform: 'uppercase',
    '& .MuiSvgIcon-root': {
      marginLeft: 10,
      fontSize: 18,
    },
  },
}));

const Pictures = ({ pictures }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography component="div" variant="h3" className={classes.titleRoot}>
        Photos
      </Typography>
      <Box mb={7}>
        <CmtGridView
          itemPadding={16}
          data={pictures}
          renderRow={(item, index) => (
            <Box className={classes.imgRoot}>
              <CmtImage key={index} src={item.url} alt={item.name} />
            </Box>
          )}
        />
      </Box>
      <Box mt={2} className={classes.textLink}>
        Go To Gallery
      </Box>
    </Box>
  );
};

export default Pictures;

Pictures.prototype = {
  pictures: PropTypes.array.isRequired,
};
