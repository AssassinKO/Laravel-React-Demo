import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import Button from '@material-ui/core/Button';
import { useDropzone } from 'react-dropzone';
import CmtImage from '../../../../@coremat/CmtImage';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../../redux/actions/WallApp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtList from '../../../../@coremat/CmtList';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';

const useStyles = makeStyles(() => ({
  textFieldRoot: {
    '& .MuiInput-underline': {
      '&:before, &:after': {
        display: 'none',
      },
    },
  },
  iconSm: {
    fontSize: 16,
  },
  gridThumb: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    borderRadius: 4,
  },
}));

const CreatePost = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userDetail } = useSelector(({ wallApp }) => wallApp);
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, .pdf',
    multiple: true,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          id: Math.floor(Math.random() * 10000),
          path: file.path,
          metaData: { type: file.type, size: file.size },
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  const onAddAttachments = files => {
    setAttachments([...attachments, ...files]);
  };

  const handlePostSubmit = () => {
    const post = {
      content,
      attachments,
      owner: {
        name: userDetail.name,
        profile_pic: userDetail.profile_pic,
        id: userDetail.id,
      },
    };
    dispatch(createPost(post));
    setAttachments([]);
    setContent('');
  };

  return (
    <CmtCard>
      <Box width={1}>
        <CmtCardContent>
          <Box display="flex">
            <CmtAvatar size={40} src={userDetail.profile_pic} alt={userDetail.name} />
            <Box ml={4} flex={1}>
              <AppTextInput
                placeholder="What's in your mind?"
                multiline
                rows={2}
                fullWidth
                value={content}
                className={classes.textFieldRoot}
                onChange={e => setContent(e.target.value)}
              />
            </Box>
          </Box>
          <Box mt={2}>
            <CmtList
              data={attachments}
              style={{ display: 'flex', flexWrap: 'wrap' }}
              renderRow={(item, index) => (
                <Box p={1} key={index}>
                  <CmtImage className={classes.gridThumb} src={item.preview} />
                </Box>
              )}
            />
          </Box>
          <Box mt={2} display="flex">
            <Box
              {...getRootProps()}
              mr={{ xs: 0, md: 5 }}
              display="flex"
              alignItems="center"
              color="text.disabled"
              fontSize={12}
              className="pointer">
              <input {...getInputProps()} />
              <CameraEnhanceIcon className={classes.iconSm} /> <Box ml={3}>Add photo video</Box>
            </Box>
            <Box ml="auto">
              <Button
                size="small"
                color="primary"
                variant="contained"
                disabled={!content.trim() && attachments.length === 0}
                onClick={handlePostSubmit}>
                Send
              </Button>
            </Box>
          </Box>
        </CmtCardContent>
      </Box>
    </CmtCard>
  );
};

export default CreatePost;
