import React, { useContext, useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import CmtButtons from '../../../../@coremat/CmtButtons';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import PublishIcon from '@material-ui/icons/Publish';
import SaveIcon from '@material-ui/icons/Save';

const buttonOptions = {
  Delete: <DeleteIcon />,
  Save: <SaveIcon />,
  Add: <AddIcon />,
  Publish: <PublishIcon />,
  Send: <SendIcon />,
};

const ButtonsView = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { buttons, enableTooltip, buttonType, buttonSize, showLabel, onClickType } = useContext(CorematContext);

  const getButtonType = () => {
    if (buttonType !== 'combo') return buttonType;
  };

  const getButtonsItems = () => {
    let items = [...buttons];
    if (buttonType === 'combo') {
      items = buttons.slice(0, 3);
      buttons.slice(3, 5).map(item => {
        item.type = 'icon-button';
        items.push(item);
        return item;
      });
    }

    if (!showLabel) {
      items = [...items].map((item, index) => {
        if (enableTooltip && (item.type === 'icon-button' || buttonType === 'icon-button')) {
          item.tooltip = buttons[index].label;
        }

        if (item.type === 'icon-button' || buttonType === 'icon-button') item.label = '';
        return item;
      });
    }

    if (onClickType === 'individual') {
      items = [...items].map(item => {
        item.onClick = handleOnItemClick;
        return item;
      });
    }

    return items.map(item => {
      return { ...item, icon: buttonOptions[item.label] };
    });
  };

  const handleOnItemClick = () => {
    setMessage(`You are using ${onClickType} click method`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <JumboCard>
      <CmtButtons
        items={getButtonsItems()}
        variant={'contained'}
        type={getButtonType()}
        size={buttonSize}
        color={'primary'}
        enableTooltip={enableTooltip}
        onItemClick={handleOnItemClick}
      />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          {message}
        </MuiAlert>
      </Snackbar>
    </JumboCard>
  );
};

export default ButtonsView;
