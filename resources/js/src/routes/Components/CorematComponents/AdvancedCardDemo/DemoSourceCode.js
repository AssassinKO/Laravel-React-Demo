import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import { getBackgroundSourceCode, getOverlaySourceCode } from '../../../../@jumbo/utils/corematDemoHelper';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const {
    extraContent,
    extraActions,
    avatarType,
    showChildren,
    showAvatar,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    contentAlignCenter,
    headerAlignCenter,
    reverseDirection,
    showFooter,
  } = useContext(CorematContext);

  const { advancedCard, background, overlay } = coremat;

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
        return `avatar={<CmtAvatar src={'${advancedCard.avatar}'} size="large" alt="Avatar" />}
    `;
      }
    }

    return '';
  };

  const getExtraContnent = () => {
    let code = '';
    if (extraContent) {
      code = `
      <CmtDropdownMenu
        TriggerComponent={
          <Box mt={3}>
            <Button aria-controls="fade-menu" aria-haspopup="true" color="primary" variant="contained">
              Open Menu
            </Button>
          </Box>
        }
        items={menuItems}
        onItemClick={handleItemClick}
      />`;
    }

    return code
      ? `
    extraContent={${code}}`
      : '';
  };

  const headerSourceCode = () => {
    return (
      ` <CmtCardHeader
    ` +
      getAvatarType() +
      `title={'${advancedCard.title}'}
    subTitle={'${advancedCard.subTitle}'}
    alignCenter={${headerAlignCenter ? `true` : `false`}}
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

  const contentSourceCode = () => {
    return (
      `
  <CmtAdvCardContent
    title={advancedCard.contentTitle}
    subTitle={advancedCard.contentSubTitle}
    subTitleProps={{ variant: 'body2' }}
    alignCenter={${contentAlignCenter ? `true` : `false`}}
    reverseDir={${reverseDirection ? `true` : `false`}}` +
      getExtraContnent() +
      `    
   >    ${
     showChildren
       ? `
    <DemoChart />`
       : `    `
   }
  </CmtAdvCardContent>`
    );
  };

  const getSeparatorSourceCode = () => {
    return ` separator={{ color: theme.palette.borderColor.dark, borderWidth: 1, borderStyle: 'solid' }}`;
  };

  const footerSourceCode = () => {
    if (showFooter) {
      return (
        `
  <CmtCardFooter` +
        getSeparatorSourceCode() +
        `>
    <Box display="flex" alignItems="center" justifyContent="space-between" width={1}>
      <Button>View History</Button>

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
const theme = useTheme();

<CmtAdvCard` +
      getBackgroundSourceCode(showBackground, backgroundStyle, background) +
      getOverlaySourceCode(showOverlay, overlayStyle, overlay) +
      `>
 ` +
      headerSourceCode() +
      contentSourceCode() +
      footerSourceCode() +
      `  
</CmtAdvCard>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
