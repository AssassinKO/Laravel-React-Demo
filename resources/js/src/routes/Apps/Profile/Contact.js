import React from 'react';
import { Box } from '@material-ui/core';
import CmtCard from '../../../@coremat/CmtCard';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../@coremat/CmtCard/CmtCardContent';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkIcon from '@material-ui/icons/Link';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import blue from '@material-ui/core/colors/blue';
import { geValidUrl } from '../../../@jumbo/utils/commonHelper';

const useStyles = makeStyles(theme => ({
  iconView: {
    backgroundColor: alpha(blue['500'], 0.1),
    color: blue['500'],
    padding: 8,
    borderRadius: 4,
    '& .MuiSvgIcon-root': {
      display: 'block',
    },
    '&.web': {
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      color: theme.palette.warning.main,
    },
    '&.phone': {
      backgroundColor: alpha(theme.palette.success.main, 0.15),
      color: theme.palette.success.dark,
    },
  },
  wordAddress: {
    wordBreak: 'break-all',
    cursor: 'pointer',
  },
}));

const Contact = ({ userDetail }) => {
  const { email, website, phone } = userDetail;
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader title="Contact" />
      <CmtCardContent>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 6 }}>
          <Box className={classes.iconView}>
            <MailOutlineIcon />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={12} color="text.secondary">
              Email
            </Box>
            <Box component="p" className={classes.wordAddress} fontSize={16}>
              <Box component="a" href={`mailto:${email}`}>
                {email}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 6 }}>
          <Box className={clsx(classes.iconView, 'web')}>
            <LinkIcon />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={12} color="text.secondary">
              Web page
            </Box>
            <Box component="p" className={classes.wordAddress} fontSize={16}>
              <Box component="a" href={geValidUrl(website)}>
                {website}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box className={clsx(classes.iconView, 'phone')}>
            <LocalPhoneIcon />
          </Box>
          <Box ml={5}>
            <Box component="span" fontSize={12} color="text.secondary">
              Phone
            </Box>
            <Box component="p" className={classes.wordAddress} fontSize={16} color="text.primary">
              {phone}
            </Box>
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default Contact;

Contact.prototype = {
  userDetail: PropTypes.object.isRequired,
};
