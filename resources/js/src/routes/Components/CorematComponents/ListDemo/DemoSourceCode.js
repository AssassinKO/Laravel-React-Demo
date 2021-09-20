import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { resultEmpty, initLoader, showFooter, paginationType, position, loadMore } = useContext(CorematContext);

  const getData = () => {
    if (resultEmpty) {
      return '[]';
    }

    return 'data';
  };

  const getFooterCode = () => {
    if (showFooter) {
      return `
  footerProps={
    {
      loading: ${loadMore},
      footerText: 'No more content',
    }
  }`;
    }

    return '';
  };

  const getPaginationSourceCode = () => {
    return (
      `
<CmtListPagination
  paginationProps={{ page: 1, count: 5 }}
  position="${position}"
  data={` +
      getData() +
      `}
  renderRow={renderRow}
  onEndReached={() => console.log('You have reached end of list')}
  ListEmptyComponent={
    <ListEmptyResult
      loader={${initLoader}}
      title="No Data Found"
      content="Empty result description"
      actionTitle="Add Content"
    />
  }
/>
`
    );
  };

  const getListSourceCode = () => {
    return (
      `
<CmtList
  data={` +
      getData() +
      `}
  renderRow={renderRow}
  onEndReached={() => console.log('You have reached end of list')}
  ListEmptyComponent={
    <ListEmptyResult
      loader={${initLoader}}
      title="No Data Found"
      content="Empty result description"
      actionTitle="Add Content"
    />
  }` +
      getFooterCode() +
      `
/>
`
    );
  };

  const getSourceCode = () => {
    return (
      (paginationType === 'pagination' ? getPaginationSourceCode() : getListSourceCode()) +
      `
const renderRow = (item, index) => {
  return (
    <Box mb={2} key={index} className={classes.itemRoot}>
      <JumboCard>
        <CmtMediaObject avatar={item.profile_pic} title={item.title} titleProps={{ className: classes.titleRoot }}>
          <Typography className={classes.descText} variant="body2">
            {item.description}
          </Typography>
        </CmtMediaObject>
      </JumboCard>
    </Box>
  );
};
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
