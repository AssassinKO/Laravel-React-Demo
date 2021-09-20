import React, { useContext, useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import CmtSearch from '../../../../@coremat/CmtSearch';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';

const SearchView = () => {
  const { showBorder, onlyIcon, iconPosition, alignment } = useContext(CorematContext);
  const [value, setValue] = useState('');

  return (
    <JumboCard>
      <CmtSearch
        border={showBorder}
        onlyIcon={onlyIcon}
        iconPosition={iconPosition}
        align={alignment}
        placeholder="Search Keywords"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </JumboCard>
  );
};

export default SearchView;
