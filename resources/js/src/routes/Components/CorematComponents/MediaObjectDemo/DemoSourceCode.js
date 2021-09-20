import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import { coremat } from '../../../../@fake-db/coremat-components';

const DemoSourceCode = () => {
  const { position, showAvatar, showActions, showFooter, showChildren } = useContext(CorematContext);
  const { mediaObject } = coremat;

  const getAvatarCode = () => {
    if (showAvatar) {
      return `
  avatar="${mediaObject.avatar}"
  avatarPos="${position}"`;
    }

    return '';
  };

  const getFooterCode = () => {
    if (showFooter) {
      return `
  footerComponent={
    <Box display="${'flex'}" flexDirection="column" justifyContent="space-between">
      <IconButton>
        <VisibilityIcon />
      </IconButton>
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  }`;
    }

    return '';
  };

  const getActionsCode = () => {
    if (showActions) {
      return `
  actionsComponent={
    <Box display="${'flex'}" justifyContent="space-between">
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Box>
  }`;
    }

    return '';
  };

  const getChildren = () => {
    if (showChildren) {
      return `>
  <Box className={classes.childrenRoot}>
    <Box mr={2}><Button color="primary" variant="contained">${'Reports'}</Button></Box>
    <CmtAvatarGroup avatarSize={34} items={avatars} srcKey="profile_pic" max={5} />
  </Box>
</CmtMediaObject>`;
    }

    return ' />';
  };

  const getSourceCode = () => {
    return (
      `
<CmtMediaObject
  className={classes.root}` +
      getAvatarCode() +
      `
  title="${mediaObject.title}"
  titleProps={{ className: classes.titleRoot }}
  subTitle={
    <Box display="flex" alignItems={{ xl: 'center' }} mb={2}>
      <Box mr={1}>
        <Box className={classes.badgeRoot}>Development</Box>
      </Box>
      <Box color="text.disabled" fontSize={12}>
        Start Date: 25 Jan, 2020 Deadline: 15 Mar, 2020
      </Box>
    </Box>
  }` +
      getActionsCode() +
      `
  content="${mediaObject.description}"` +
      getFooterCode() +
      getChildren()
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
