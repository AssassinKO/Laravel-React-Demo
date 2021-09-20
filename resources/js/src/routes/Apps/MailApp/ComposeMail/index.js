import React, { useState } from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { emailNotValid, requiredMessage } from '../../../../@jumbo/constants/ErrorMessages';
import { isValidEmail } from '../../../../@jumbo/utils/commonHelper';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch } from 'react-redux';
import { composeMail } from '../../../../redux/actions/MailApp';
import FilePicker from '../FilePicker';
import clsx from 'clsx';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import EmojiPicker from '../MailDetail/EmojiPicker';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './index.style';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import LaunchIcon from '@material-ui/icons/Launch';
import SendIcon from '@material-ui/icons/Send';

const ComposeMail = ({ openDialog, onCloseComposeDialog, mailTo, mailContent }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [to, setTo] = useState(mailTo ? [mailTo] : []);
  const [cc, setCc] = useState('');
  const [bcc, setBcc] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(mailContent ? mailContent : '');
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [minimise, setMinimise] = useState(false);

  const [toError, setToError] = useState('');
  const [ccError, setCcError] = useState('');
  const [bccError, setBccError] = useState('');

  const getHeaderTitle = () => (
    <Box display="flex" alignItems="center">
      <EditIcon />
      <Box component="span" fontSize={{ xs: 14, sm: 16 }} ml={{ xs: 4, xl: 6 }}>
        Compose Message
      </Box>
    </Box>
  );

  const onAddAttachments = files => {
    const newAttachments = files.map(item => {
      return {
        id: item.id,
        originalFile: item.file,
        file: {
          name: item.file.name,
          type: item.file.type,
          size: item.file.size,
          path: item.file.path,
        },
      };
    });

    setAttachments([...attachments, ...newAttachments]);
  };

  const onDeleteAttachments = fileId => {
    const updatedAttachments = attachments.filter(item => item.id !== fileId);
    setAttachments(updatedAttachments);
  };

  const addTo = () => {
    if (email.trim()) {
      setTo(to.concat({ name: 'Receiver name', email }));
      setEmail('');
    }
  };

  const onKeyPress = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      addTo();
    }
  };

  const filterTo = email => {
    const updatedList = to.filter(item => item.email !== email);
    setTo(updatedList);
    setToError('');
  };

  const onPickEmoji = emoji => {
    setMessage(message + emoji);
  };

  const onDiscardMail = () => {
    onCloseComposeDialog();
  };

  const checkValidations = () => {
    if (to.length === 0) {
      setToError(requiredMessage);
    } else if (!to.every(item => isValidEmail(item.email))) {
      setToError(emailNotValid);
    } else if (cc && !isValidEmail(cc)) {
      setCcError(emailNotValid);
    } else if (bcc && !isValidEmail(bcc)) {
      setBccError(emailNotValid);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const mail = {
      from: {
        name: 'Domnic Harris',
        profile_pic: '',
        email: 'domnicharris@example.com',
      },
      to,
      cc,
      bcc,
      subject,
      message,
      attachments,
    };
    dispatch(composeMail(mail));
    onCloseComposeDialog();
  };

  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={() => onCloseComposeDialog()}
      className={clsx(classes.composeMail, openDialog ? 'open' : '')}>
      <CmtCard className={clsx(classes.componseCard, minimise ? 'card-minimise' : '')}>
        <CmtCardHeader className={classes.composeHeader} title={getHeaderTitle()}>
          <Box display="flex" alignItems="center">
            <IconButton className={classes.composeHeaderBtn} onClick={() => setMinimise(!minimise)}>
              <RemoveIcon />
            </IconButton>
            <IconButton className={classes.composeHeaderBtn}>
              <LaunchIcon />
            </IconButton>
            <IconButton className={classes.composeHeaderBtn} onClick={onDiscardMail}>
              <ClearIcon />
            </IconButton>
          </Box>
        </CmtCardHeader>

        <CmtCardContent>
          <PerfectScrollbar className={classes.scrollbarRoot}>
            <Box height={1} display="flex" flexDirection="column">
              <Box>
                <Box mb={3} width="1">
                  <Box className={classes.cBccField}>
                    <Box className={classes.toTextRoot} component="span">
                      To
                    </Box>
                    {to.length > 0 &&
                      to.map(item => (
                        <Chip
                          label={item.email}
                          color={isValidEmail(item.email) ? '' : 'secondary'}
                          onDelete={() => filterTo(item.email)}
                        />
                      ))}
                    <AppTextInput
                      className={clsx(classes.textField, 'to-input-type')}
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                        setToError('');
                      }}
                      helperText={toError}
                      required
                      onKeyDown={onKeyPress}
                      onBlur={() => addTo()}
                    />

                    <Box
                      component="span"
                      ml={4}
                      className="pointer"
                      color="text.secondary"
                      onClick={() => setShowCc(!showCc)}>
                      Cc
                    </Box>

                    <Box
                      component="span"
                      ml={4}
                      className="pointer"
                      color="text.secondary"
                      onClick={() => setShowBcc(!showBcc)}>
                      Bcc
                    </Box>
                  </Box>
                </Box>

                {showCc && (
                  <Box mb={3} width="1">
                    <AppTextInput
                      className={classes.textField}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">CC</InputAdornment>,
                      }}
                      value={cc}
                      onChange={e => {
                        setCc(e.target.value);
                        setCcError('');
                      }}
                      helperText={ccError}
                    />
                  </Box>
                )}

                {showBcc && (
                  <Box mb={3} width="1">
                    <AppTextInput
                      className={classes.textField}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">BCC</InputAdornment>,
                      }}
                      value={bcc}
                      onChange={e => {
                        setBcc(e.target.value);
                        setBccError('');
                      }}
                      helperText={bccError}
                    />
                  </Box>
                )}

                <Box mb={3} width="1">
                  <AppTextInput
                    className={classes.textField}
                    placeholder="Subject"
                    onChange={e => setSubject(e.target.value)}
                  />
                </Box>

                <Box mb={3}>
                  <AppTextInput
                    className={classes.textField}
                    multiline
                    rows={10}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </Box>
              </Box>

              {attachments.length > 0 && (
                <Box display="flex" alignItems="center" flexWrap="wrap" mb={2}>
                  {attachments.map((item, index) => (
                    <Box mr={2} mb={2}>
                      <Chip label={item.file.name} key={index} onDelete={() => onDeleteAttachments(item.id)} />
                    </Box>
                  ))}
                </Box>
              )}

              <Box mt="auto" display="flex" alignItems="center">
                <Button className={classes.btnRoot} variant="contained" color="primary" onClick={checkValidations}>
                  <SendIcon /> Send
                </Button>
                <Box ml={2} className={classes.emojiPickerView}>
                  <EmojiPicker onPickEmoji={onPickEmoji} />
                </Box>
                <Box ml={2} className={classes.filePickerRoot}>
                  <FilePicker onAddAttachments={onAddAttachments} />
                </Box>
                <Box ml="auto">
                  <Tooltip title="Delete">
                    <IconButton onClick={onDiscardMail}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </PerfectScrollbar>
        </CmtCardContent>
      </CmtCard>
    </Dialog>
  );
};

export default ComposeMail;

ComposeMail.prototype = {
  openDialog: PropTypes.bool.isRequired,
  onCloseComposeDialog: PropTypes.func,
  mailTo: PropTypes.object,
  mailContent: PropTypes.string,
};

ComposeMail.defaultProps = {
  mailTo: null,
  mailContent: '',
};
