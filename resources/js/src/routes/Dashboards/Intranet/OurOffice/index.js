import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

import Box from '@material-ui/core/Box';
import AppSelectBox from '../../../../@jumbo/components/Common/formElements/AppSelectBox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import { intranet } from '../../../../@fake-db';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
  },
  selectBoxRoot: {
    marginBottom: 6,
    display: 'inline-block',
    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
      display: 'none',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiInputBase-root': {
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  },
  addressTitle: {
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -8,
    marginRight: -8,
  },
  socialLinkCol: {
    paddingLeft: 8,
    paddingRight: 8,
    '& .btn': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      padding: 6,
      '& .MuiSvgIcon-root': {
        fontSize: 20,
      },
      '&.twitter': {
        backgroundColor: alpha(blue[500], 0.1),
        color: blue[500],
      },
      '&.instagram': {
        backgroundColor: alpha(pink[500], 0.1),
        color: pink[500],
      },
      '&.linkedin': {
        backgroundColor: alpha(blue[500], 0.1),
        color: blue[500],
      },
    },
  },
  contactRoot: {
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  },
}));

const socialMediaLinks = [
  { title: 'twitter', url: '', icon: <TwitterIcon /> },
  { title: 'facebook', url: '', icon: <FacebookIcon /> },
  { title: 'instagram', url: '', icon: <InstagramIcon /> },
  { title: 'linkedin', url: '', icon: <LinkedInIcon /> },
];

const OurOffice = () => {
  const { addresses, title, description } = intranet.ourOfficeData;
  const [currentAddress, setAddress] = useState(addresses[0]);
  const classes = useStyles();

  const handleAddressChange = event => {
    setAddress(addresses.find(item => item.label === event.target.value));
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={title} subTitle={description} />

      <CmtCardContent>
        <Box className={classes.selectBoxRoot}>
          <AppSelectBox
            data={addresses}
            valueKey="label"
            labelKey="label"
            value={currentAddress.label}
            onChange={handleAddressChange}
          />
        </Box>
        <Box mb={5}>
          <Typography component="div" variant="h4" className={classes.addressTitle}>
            {currentAddress.addressLine1}, {currentAddress.addressLine2}, {currentAddress.city}, {currentAddress.state}
          </Typography>
        </Box>

        <Box className={classes.contactRoot} mb={6}>
          <Box display="flex" alignItems="center" mb={3} color="text.secondary">
            <CallIcon />
            <Box ml={3}>{currentAddress.phoneNumber}</Box>
          </Box>
          <Box display="flex" alignItems="center" mb={3} color="text.secondary">
            <MailOutlineIcon />
            <Box ml={3}>{currentAddress.emailAddress}</Box>
          </Box>
        </Box>

        <Box className={classes.socialLink}>
          {socialMediaLinks.map((item, index) => (
            <Box key={index} className={classes.socialLinkCol}>
              <IconButton className={`btn ${item.title}`}>{item.icon}</IconButton>
            </Box>
          ))}
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default OurOffice;
