import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { showBorder, onlyIcon, iconPosition, alignment } = useContext(CorematContext);

  const getSourceCode = () => {
    return `
const [value, setValue] = useState('');

<CmtSearch
  border={${showBorder}} 
  onlyIcon={${onlyIcon}} 
  iconPosition="${iconPosition}"
  align="${alignment}"
  placeholder="Search Keywords"
  value={value}
  onChange={e => setValue(e.target.value)} />
`;
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
