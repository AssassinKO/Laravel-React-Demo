import React from 'react';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HoverInfoCard from '../../../../@jumbo/components/Common/HoverInfoCard';

const Documents = () => {
  return (
    <HoverInfoCard
      backgroundColor="#FF8C00"
      icon={<FolderOpenIcon style={{ color: '#ffffff' }} />}
      title={387}
      subTitle="Documents"
    />
  );
};

export default Documents;
