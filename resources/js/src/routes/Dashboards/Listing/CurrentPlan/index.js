import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: 'auto',
  },
  subTitleContent: {
    fontSize: 14,
    color: theme.palette.common.dark,
    marginBottom: 18,
  },
  planList: {
    padding: 0,
    '& li': {
      padding: 0,
      color: theme.palette.text.secondary,
      '& .MuiTypography-body1': {
        fontSize: 14,
      },
      '& .MuiListItemIcon-root': {
        minWidth: 10,
        marginRight: 10,
      },
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
  },
}));

const CurrentPlan = () => {
  const classes = useStyles();
  const getContentTitle = () => (
    <Box display="flex" alignItems="flex-end" mb={5}>
      <Box
        component="span"
        fontSize={{ xs: 36, md: 40, xl: 48 }}
        fontWeight="fontWeightBold"
        color="common.dark"
        lineHeight="1">
        $19
      </Box>
      <Typography component="span" variant="subtitle1">
        /month
      </Typography>
    </Box>
  );

  return (
    <CmtAdvCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Your Current Plan"
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}
      />
      <CmtAdvCardContent
        title={getContentTitle()}
        subTitle="Individual Plan"
        subTitleProps={{
          className: classes.subTitleContent,
        }}
        extraContent={
          <List component="ul" className={classes.planList}>
            <ListItem>
              <ListItemIcon>
                <NavigateNextIcon />
              </ListItemIcon>
              <ListItemText primary="Max listing items 2k" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <NavigateNextIcon />
              </ListItemIcon>
              <ListItemText primary="Max agents - 10" />
            </ListItem>
          </List>
        }
        reverseDir>
        <Box display="flex" flexDirection="column" alignItems="center" mt={{ sm: -7 }}>
          <Box mb={{ xs: 3, md: 4 }}>
            <CmtImage src={'/images/dashboard/current_plan.svg'} alt="plan" />
          </Box>
          <Box component="p" color="error.main" mb={{ xs: 3, md: 5 }}>
            Expiring soon
          </Box>
          <Button variant="contained" color="primary">
            Renew Plan
          </Button>
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default CurrentPlan;
