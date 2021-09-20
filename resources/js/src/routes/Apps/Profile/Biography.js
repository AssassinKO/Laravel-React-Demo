import React from 'react';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtCard from '../../../@coremat/CmtCard';
import CmtCardContent from '../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  bioTitle: {
    marginBottom: 16,
  },
}));

const Biography = () => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader title="Biography" />
      <CmtCardContent>
        <Box mb={3} component="p" color="text.secondary">
          A little flash back of Kiley Brown
        </Box>
        <Typography component="div" variant="h2" className={classes.bioTitle}>
          Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat.
        </Typography>
        <Box component="p" mb={{ xs: 5, md: 6 }}>
          Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque, ut finibus ex. Quisque
          semper ornare magna, sed ullamcorper risus luctus quis. Etiam tristique dui vitae diam rutrum sodales. Mauris
          feugiat lectus felis, nec ullamcorper risus elementum at. Aliquam erat volutpat. Nullam et est eget metus gravida
          tincidunt. Phasellus sed odio eu lacus venenatis.
        </Box>
        <Box component="p">
          Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a felis nisi. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultricies urna non volutpat. Nam fermentum cursus
          elit, et tempus metus scelerisque imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at.
          Pellentesque consequat leo tortor.
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default Biography;
