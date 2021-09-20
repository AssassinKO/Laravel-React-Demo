import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Picker from 'emoji-picker-react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  emojiPickerRoot: {
    position: 'relative',
    '& .emoji-picker-react': {
      position: 'absolute',
      left: 0,
      top: 48,
      zIndex: 1,
    },
  },
}));

const EmojiPicker = ({ onPickEmoji }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const classes = useStyles();

  const onEmojiClick = (event, emojiObject) => {
    onPickEmoji(emojiObject.emoji);
    setShowEmoji(!showEmoji);
  };

  return (
    <Box className={clsx(classes.emojiPickerRoot, 'emoji-picker')}>
      <IconButton onClick={() => setShowEmoji(!showEmoji)}>
        <InsertEmoticonIcon />
      </IconButton>
      {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
    </Box>
  );
};

export default EmojiPicker;

EmojiPicker.prototype = {
  onPickEmoji: PropTypes.func,
};
