import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import HoverInfoCard from '../../../../@jumbo/components/Common/HoverInfoCard';

const IdeasWidget = () => {
  return (
    <HoverInfoCard
      icon={<WbSunnyIcon style={{ color: '#ffffff' }} />}
      backgroundColor="#0795F4"
      title={23}
      subTitle="Ideas"
    />
  );
};

export default IdeasWidget;
