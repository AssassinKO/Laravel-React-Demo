import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import { coremat } from '../../../../@fake-db/coremat-components';

const DemoSourceCode = () => {
  const { dotPosition, dotStyle, settings } = useContext(CorematContext);
  const { carouselImages } = coremat;
  const dataString = JSON.stringify(carouselImages, null, 2);
  const settingsString = JSON.stringify(settings, null, 2);

  const getSourceCode = () => {
    return `
<CmtCarousel
  outline={${dotStyle === 'outline'}}
  color="#6200EE"
  activeColor="#6200EE"
  dotSize={10}
  settings={settings}
  data={carouselImages}
  dotPosition="${dotPosition}"
  renderRow={renderRow}
/>

const renderRow = (item, index) => {
  return (
    <Box key={index} className={classes.itemRoot}>
      <JumboCard>
        <CmtMediaObject
          avatar={item.profile_pic}
          avatarPos="center"
          title={item.title}
          titleProps={{ className: classes.titleRoot }}>
          <Typography variant="body2" className={classes.descText}>
            {item.description}
          </Typography>
        </CmtMediaObject>
      </JumboCard>
    </Box>
  );
};

const settings = ${settingsString};

const carouselImages = ${dataString};
`;
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
