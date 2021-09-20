import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SourceCodeComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import { coremat } from '../../../../@fake-db/coremat-components';
import { getBackgroundSourceCode, getOverlaySourceCode } from '../../../../@jumbo/utils/corematDemoHelper';

const DemoSourceCode = () => {
  const { background, overlay } = coremat;
  const { revealed, showBackground, backgroundStyle, showOverlay, overlayStyle } = useContext(CorematContext);

  const getSourceCode = () => {
    return (
      `
<CmtRevealCard` +
      getBackgroundSourceCode(showBackground, backgroundStyle, background) +
      getOverlaySourceCode(showOverlay, overlayStyle, overlay) +
      `
  revealComponentTitle="Invite your friend"
  revealComponent={<InviteFriendForm />}
  revealed={${revealed}}
  onClose={handleOnClose}>
  <ChildrenComponent revelCard={revelCard} />
</CmtRevealCard>
`
    );
  };

  return <SourceCodeComponent sourceCode={getSourceCode()} />;
};

export default DemoSourceCode;
