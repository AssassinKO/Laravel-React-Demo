import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import { getBackgroundSourceCode, getOverlaySourceCode } from '../../../../@jumbo/utils/corematDemoHelper';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const {
    extraActions,
    avatarType,
    showAvatar,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    showCardMedia,
    showMainContent,
    showFooter,
  } = useContext(CorematContext);

  const { basicCard, background, overlay } = coremat;
  const { header, media, content } = basicCard;

  const getAvatarType = () => {
    if (showAvatar) {
      if (avatarType === 'icon') {
        return `icon={<AllInclusiveIcon fontSize="${'default'}" />}
    `;
      } else if (avatarType === 'icon-avatar') {
        return `avatar={
      <CmtAvatar color="primary" size="large">
        <AllInclusiveIcon fontSize="${'small'}" />
      </CmtAvatar>
    }
    `;
      } else if (avatarType === 'avatar') {
        return `avatar={<CmtAvatar src={'${header.avatar}'} size="large" alt="Avatar" />}
    `;
      }
    }

    return '';
  };

  const headerSourceCode = () => {
    return (
      ` <CmtCardHeader
    ` +
      getAvatarType() +
      `title={'${header.title}'}
    subTitle={'${header.subTitle}'}
    actions={actions}
    actionHandleIcon={<MoreVertIcon fontSize="${'default'}" />}>${
        extraActions
          ? `
    <Button color="primary">View Demo</Button>
  `
          : ''
      }</CmtCardHeader>`
    );
  };

  const mediaSourceCode = () => {
    if (showCardMedia) {
      return `
  <CmtCardMedia image={'${media}'} />`;
    }

    return '';
  };

  const contentSourceCode = () => {
    if (showMainContent) {
      return `
  <CmtCardContent>
    <Typography variant="body2" color="textSecondary" component="p">
      ${content.description}
    </Typography>
  </CmtCardContent>`;
    }

    return '';
  };

  const getSeparatorSourceCode = () => {
    return ` separator={{ color: '#bdbdbd', borderWidth: 1, borderStyle: 'solid' }}`;
  };

  const footerSourceCode = () => {
    if (showFooter) {
      return (
        `
  <CmtCardFooter` +
        getSeparatorSourceCode() +
        `>
    <Box display="flex" alignItems="center" width={1}>
      <Box mr={4}>
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: 14 }}>
          View Demo
        </Button>
      </Box>

      <CmtAvatarGroup items={avatars} srcKey="profile_pic" max={5} avatarSize={34} />
    </Box>
  </CmtCardFooter>`
      );
    }

    return '';
  };

  const getSourceCode = () => {
    return (
      `
<CmtCard` +
      getBackgroundSourceCode(showBackground, backgroundStyle, background) +
      getOverlaySourceCode(showOverlay, overlayStyle, overlay) +
      `>
 ` +
      headerSourceCode() +
      mediaSourceCode() +
      contentSourceCode() +
      footerSourceCode() +
      `  
</CmtCard>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
