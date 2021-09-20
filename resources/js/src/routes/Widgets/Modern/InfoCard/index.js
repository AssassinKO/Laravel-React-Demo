import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  linkColorRoot: {
    '& a': {
      cursor: 'pointer',
    },
  },
  imgRoot: {
    objectFit: 'cover',
  },
}));

const InfoCard = ({ data }) => {
  const classes = useStyles();
  return (
    <CmtCard>
      <Box display="flex" flexDirection="column">
        <CmtImage className={classes.imgRoot} alt={data.desc} src={data.image} />
        <Box p={4}>
          <Box mb={4}>{data.desc}</Box>
          <Box className={classes.linkColorRoot}>
            <Link to="#learn-more">LEARN MORE</Link>
          </Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default InfoCard;
