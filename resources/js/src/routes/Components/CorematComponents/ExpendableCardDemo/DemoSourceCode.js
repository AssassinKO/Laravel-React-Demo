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
    showMainContent,
    showExpendableContent,
    showSocialButtons,
  } = useContext(CorematContext);

  const { basicCard, background, overlay } = coremat;
  const { header, content, expendableContent } = basicCard;

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

  const socialMediaButtons = () => {
    if (showSocialButtons) {
      return `
    actionsComponent={
      <React.Fragment>
        <IconButton aria-label="${'add to favorites'}">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </React.Fragment>
    }`;
    }

    return '';
  };

  const expendableContentSourceCode = () => {
    if (showExpendableContent) {
      return (
        `
  <CmtCardExpendableContent` +
        socialMediaButtons() +
        `>
    <Typography paragraph variant="body2">Method:</Typography>
    <Typography paragraph variant="body2">${expendableContent.text1}</Typography>
    <Typography paragraph variant="body2">${expendableContent.text2}</Typography>
    <Typography paragraph variant="body2">${expendableContent.text3}</Typography>
    <Typography variant="body2">${expendableContent.text4}</Typography>
  </CmtCardExpendableContent>`
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
      contentSourceCode() +
      expendableContentSourceCode() +
      `  
</CmtCard>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
