import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';

const DemoSourceCode = () => {
  const { showConcealedIcon, showExtrasContainer, showSubHeader } = useContext(CorematContext);

  const concealedIconSourceCode = () => {
    if (showConcealedIcon) {
      return `
  concealedIcon={<TuneIcon />}${''}`;
    }

    return '';
  };

  const subHeaderSourceCode = () => {
    if (showSubHeader) {
      return `
  subHeader="Sub Headers"`;
    }

    return '';
  };

  const extrasContainerSourceCode = () => {
    if (showExtrasContainer) {
      return `
  extrasContainer={${`<MoreHorizIcon />`}}`;
    }

    return '';
  };

  const getSourceCode = () => {
    return (
      `
const [title, setTitle] = useState('Latest Notifications');

const onRevealedAction = status => {
  setTitle(status ? 'Filter By' : 'Latest Notifications');
};

<CmtBackDrop
  backLayerConcealed={title}
  onRevealed={onRevealedAction}` +
      concealedIconSourceCode() +
      extrasContainerSourceCode() +
      subHeaderSourceCode() +
      `
  backLayerRevealed={<FilterForm />}>
  <Notifications notifications={data} />
</CmtBackDrop>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
