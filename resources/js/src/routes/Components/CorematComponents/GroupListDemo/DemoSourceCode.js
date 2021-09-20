import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { isExpandable, isGrid } = useContext(CorematContext);

  const getGridAttributes = () => {
    if (isGrid) {
      return `
  itemPadding={10}
  column={2}`;
    }

    return '';
  };

  const getSourceCode = () => {
    return (
      `
const theme = useTheme();

<CmtGroupList
  data={projects}
  renderItem={renderItem}
  renderHeader={renderHeader}
  groupIdentifier={groupIdentifier}
  isExpandable={${isExpandable}}
  isGrid={${isGrid}} ` +
      getGridAttributes() +
      `
/>

const groupIdentifier = dataItem => {
  return { id: dataItem.projectName.toLowerCase(), groupName: dataItem.projectName };
};

const renderItem = (item, index) => {
  return (
    <Box mb={${isGrid ? 0 : 2}} key={index} className={classes.itemRoot}>
      <JumboCard>
        <CmtMediaObject
          avatar={item.profile_pic}
          title={item.title}
          titleProps={{ className: classes.titleRoot }}
          content={item.description}
          contentProps={{ variant: 'body2', className: classes.descText }}>
          <Button variant="contained" color="primary">
            Buy Now
          </Button>
        </CmtMediaObject>
      </JumboCard>
    </Box>
  );
};

const renderHeader = group => {
  return (
    <Typography
        component="div"
        variant="body1"
        style={{ 
          marginBottom: ${isExpandable ? 0 : 10}, 
          marginTop: ${isExpandable ? 0 : 10} 
        }}>
        {group.groupName}
      </Typography>
  );
};
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
