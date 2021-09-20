import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import { coremat } from '../../../../@fake-db/coremat-components';

const DemoSourceCode = () => {
  const { size, variant, color } = useContext(CorematContext);

  const getSizeCode = () => {
    if (typeof size === 'string') {
      return `size="${size}"`;
    }

    return `size={${size}}`;
  };

  const getAvatarUrl = () => {
    return `src="${coremat.avatar}"`;
  };

  const getSourceCode = () => {
    return (
      `
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}" alt="avatar" ` +
      getAvatarUrl() +
      ` />
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}">
  NP
</CmtAvatar>
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}">
  <FavoriteIcon />
</CmtAvatar>
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}" />
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
