import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { column, responsive, resultEmpty, initLoader, showFooter, paginationType, position, loadMore } = useContext(
    CorematContext,
  );

  const getData = () => {
    if (resultEmpty) {
      return '[]';
    }

    return 'data';
  };

  const getColumnsSizesCode = () => {
    if (responsive) {
      return `
  responsive={{
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 3,
  }}`;
    }

    return `
  column={${column}}`;
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
<CmtGridPagination
  paginationProps={{ page: 1, count: 5 }}
  position="${position}"
  data={` +
      getData() +
      `}
  renderRow={renderRow}
  itemPadding={10} ` +
      getColumnsSizesCode() +
      `
  onEndReached={() => console.log('You have reached end of list')}
  ListEmptyComponent={
    <GridEmptyResult
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
<CmtGridView
  data={` +
      getData() +
      `}
  renderRow={renderRow}
  itemPadding={10} ` +
      getColumnsSizesCode() +
      `
  onEndReached={() => console.log('You have reached end of list')}
  ListEmptyComponent={
    <GridEmptyResult
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
const theme = useTheme();

const renderRow = (item, index) => {
  return (
    <Box key={index} className={classes.itemRoot}>
      <JumboCard>
          <CmtMediaObject
            avatar={item.logo}
            title={item.name}
            titleProps={{ className: 'pointer titleRoot' }}
            actionsComponent={
              <Box className={classes.badgePrice} component="span">
                {item.price}
              </Box>
            }>
            <Box display="flex" alignItems="center">
              <Typography className={classes.typoList} variant="body2">
                {item.sold}
                <Box ml={1} component="span" color="text.secondary">
                  Sold
                </Box>
              </Typography>
            </Box>
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
