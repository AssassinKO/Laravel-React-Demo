import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../../../@coremat/CmtCard';
import useTheme from '@material-ui/core/styles/useTheme';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(() => ({
  cardRoot: {
    '& .Cmt-card-content': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  cardHeader: {
    padding: '18px 16px',
    '& .Cmt-avatar .MuiSvgIcon-root': {
      display: 'block',
    },
  },
  titleRoot: {
    marginBottom: 0,
  },
}));

const SettingsComponent = ({ title, children, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CmtCard className={classes.cardRoot} {...rest}>
      <CmtCardHeader
        className={classes.cardHeader}
        icon={<InputIcon />}
        title={title}
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
        separator={{
          color: `${alpha(theme.palette.common.dark, 0.12)}`,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      />
      <CmtCardContent>{children}</CmtCardContent>
    </CmtCard>
  );
};

export default SettingsComponent;
