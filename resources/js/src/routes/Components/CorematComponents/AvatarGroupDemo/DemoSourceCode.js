import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import { coremat } from '../../../../@fake-db/coremat-components';

const DemoSourceCode = () => {
  const { expandable, moreVisibleAction, placeholderLength, size } = useContext(CorematContext);
  const { avatars } = coremat;
  const dataString = JSON.stringify(avatars, null, 2);

  const getSizeCode = () => {
    if (typeof size === 'string') {
      return `
  size="${size}"`;
    }

    return `
  size={${size}}`;
  };

  const getSourceCode = () => {
    return (
      `
const theme = useTheme();

<CmtAvatarGroup
  items={avatars}
  max={6}
  srcKey="profile_pic"` +
      getSizeCode() +
      `
  spacing={${expandable ? 10 : 0}}
  expandable={${expandable}}
  phCharLength={${placeholderLength}}
  itemStyle={{
    outlineColor: '#fafafa',
    outlineThickness: 3,
  }}
  activeItemStyle={{
    outlineColor: theme.palette.primary.main,
    outlineThickness: 3,
    elevation: 10,
  }}
  moreVisibleOn="${moreVisibleAction}"
  onItemClick={(item, index) => console.log('onItemClick', item, index)}
  renderMore={restItems => <RenderMore items={restItems} placeholderLength={placeholderLength} />}
  renderItemSummary={(item, index) => <RenderRow key={index} item={item} placeholderLength={placeholderLength} />}
/>

const RenderRow = ({ item, placeholderLength }) => {
  return (
    <React.Fragment>
      <Typography color="inherit">{item.title}</Typography>
      <Box pb={2} component="p">
        {"It's very engaging. Right?"}
      </Box>
      <CmtAvatar src={item.profile_pic} alt={item.title} variant="rounded" size={125} phCharLength={placeholderLength} />
    </React.Fragment>
  );
};

const RenderMore = ({ items, placeholderLength }) => {
  const classes = useStyles();

  return (
    <CmtList
      data={items}
      renderRow={(item, index) => {
        return (
          <CmtObjectSummary
            key={index}
            avatar={
              <CmtAvatar
                className={classes.avatarRoot}
                color="orange"
                size={40}
                src={item.profile_pic}
                alt={item.title}
                phCharLength={placeholderLength}
              />
            }
            title={item.title}
            titleProps={{ className: classes.titleRoot }}
          />
        );
      }}
    />
  );
};

const avatars = ${dataString};
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
