import React, { useState } from 'react';
import { Button, Snackbar, makeStyles } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { HighlightedCode } from '../../Common';
import CmtCard from '../../../../@coremat/CmtCard';
import copy from 'clipboard-copy';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& pre.language-jsx': {
      paddingTop: 25,
    },
  },
  btnCopyRoot: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
    color: theme.palette.common.white,
    width: 40,
    height: 40,
    minWidth: 10,
    borderRadius: '50%',
  },
}));

const SourceCodeComponent = ({ sourceCode }) => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(undefined);

  const onCopyButtonClick = async () => {
    await copy(sourceCode);
    setSnackbarMessage('The source code has been copied.');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return sourceCode ? (
    <CmtCard className={classes.cardRoot}>
      <Button className={classes.btnCopyRoot} onClick={onCopyButtonClick}>
        <FileCopyIcon />
      </Button>
      <HighlightedCode code={sourceCode} language="jsx" />
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} message={snackbarMessage} />
    </CmtCard>
  ) : null;
};

export default SourceCodeComponent;
