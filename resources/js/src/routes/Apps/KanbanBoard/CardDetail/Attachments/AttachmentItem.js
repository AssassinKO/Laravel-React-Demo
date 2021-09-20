import React from 'react';
import { AttachFile, OpenInNew, VideoLabel } from '@material-ui/icons';

import { getTimeDiffString } from '../../../../../@jumbo/utils/dateHelper';
import useStyles from './index.style';
import { getFileExtension } from '../../../../../@jumbo/utils/fileHelper';

const AttachmentItem = ({ attachment, updateAttachment }) => {
  const classes = useStyles();
  const createdAt = getTimeDiffString(attachment.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago');

  const disableDefaultEvent = event => event.preventDefault();

  const onCoverAdd = event => {
    event.preventDefault();

    updateAttachment({ ...attachment, isCover: true }, true);
  };

  const onCoverRemove = event => {
    event.preventDefault();

    updateAttachment({ ...attachment, isCover: false });
  };

  const fileExtension = getFileExtension(attachment.name);
  const isImage = attachment.metaData.type.toLowerCase().includes('image');
  const inlineStyle = isImage ? { backgroundImage: `url(${attachment.fullImage})` } : null;

  return (
    <div className={classes.thumbnailRoot}>
      <a className={classes.thumbnailPreview} href={attachment.fullImage} style={inlineStyle} onClick={disableDefaultEvent}>
        {!isImage && <span className={classes.thumbnailPreviewText}>{fileExtension || <AttachFile />}</span>}
      </a>

      <div className={classes.thumbnailDetails}>
        <div className={classes.thumbnailTitleInfo}>
          <span className={classes.thumbnailTitle}>{attachment.name}</span>
          <a
            className={classes.thumbnailTitleAction}
            href={attachment.fullImage}
            target="_blank"
            rel="noreferrer nofollow noopener">
            <OpenInNew />
          </a>
        </div>

        <span className={classes.thumbnailActionOptions}>
          <span>
            Added
            <span className={classes.dateTime} title={createdAt}>
              {createdAt}
            </span>
          </span>
          <span>
            <a className="options-item" href={'comment'} onClick={disableDefaultEvent}>
              <span className="options-item-text">Comment</span>
            </a>
          </span>
          <span>
            <a className="options-item" href={'delete'} onClick={disableDefaultEvent}>
              <span className="options-item-text">Delete</span>
            </a>
          </span>
          <span>
            <a className="options-item" href={'edit'} onClick={disableDefaultEvent}>
              <span className="options-item-text">Edit</span>
            </a>
          </span>
        </span>
        {isImage && (
          <span className={classes.thumbnailActionOptions}>
            {attachment.isCover ? (
              <a className="options-item d-flex" href={'remove-cover'} onClick={onCoverRemove}>
                <VideoLabel fontSize="small" className="options-item-icon" />
                <span className="options-item-text">Remove cover</span>
              </a>
            ) : (
              <a className="options-item d-flex" href={'make-cover'} onClick={onCoverAdd}>
                <VideoLabel fontSize="small" className="options-item-icon" />
                <span className="options-item-text">Make cover</span>
              </a>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(AttachmentItem);
