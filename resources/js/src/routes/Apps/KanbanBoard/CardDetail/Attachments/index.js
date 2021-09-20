import React, { useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Attachment } from '@material-ui/icons';

import CmtList from '../../../../../@coremat/CmtList';
import SectionHeading from '../SectionHeading';
import AttachmentItem from './AttachmentItem';
import useStyles from './index.style';

const maxItemsShow = 4;
const Attachments = ({ attachments, uploadRootProps, uploadInputProps, updateAttachment }) => {
  const classes = useStyles();
  const [maxVisibleItems, setMaxVisibleItems] = useState(maxItemsShow);
  const [showMoreLess, setMoreLessStatus] = useState(false);

  useEffect(() => {
    setMoreLessStatus(attachments.length > maxItemsShow);
  }, [attachments]);

  const onMoreClick = event => {
    event.preventDefault();
    setMaxVisibleItems(attachments.length);
  };

  const onLessClick = event => {
    event.preventDefault();
    setMaxVisibleItems(maxItemsShow);
  };

  return (
    <div className={classes.root}>
      <SectionHeading iconComponent={<Attachment />} headingComponent="Attachments" />

      <Box pl={10}>
        <CmtList
          data={attachments.slice(0, maxVisibleItems)}
          renderRow={attachment => (
            <AttachmentItem key={attachment.id} attachment={attachment} updateAttachment={updateAttachment} />
          )}
        />

        {showMoreLess && (
          <Box mb={2}>
            {attachments.length > maxVisibleItems ? (
              <a className={classes.buttonMoreLess} href={'view-all'} title="View all attachments" onClick={onMoreClick}>
                View all attachments ({attachments.length - maxVisibleItems} hidden)
              </a>
            ) : (
              <a className={classes.buttonMoreLess} href={'view-less'} title="Show fewer attachments" onClick={onLessClick}>
                Show fewer attachments
              </a>
            )}
          </Box>
        )}

        <Box {...uploadRootProps()} my={2}>
          <input {...uploadInputProps()} />
          <Button className={classes.uploadButton}>Add an attachment</Button>
        </Box>
      </Box>
    </div>
  );
};

export default React.memo(Attachments);
