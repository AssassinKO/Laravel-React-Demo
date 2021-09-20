import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { CollapsibleSection, SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const { showExtraMedia, setExtraMediaVisibility, showFooter, setFooterVisibility, loadMore, setLoadMore } = useContext(
    CorematContext,
  );

  return (
    <SettingsComponent title="Cmt Notifications">
      <CollapsibleSection heading="Settings" open>
        <SectionLegend displayAsColumn>
          <AppSwitch
            label="Show Extra Media"
            checked={showExtraMedia}
            onChange={event => setExtraMediaVisibility(event.target.checked)}
          />

          <AppSwitch
            label="Show Footer"
            checked={showFooter}
            onChange={event => setFooterVisibility(event.target.checked)}
          />

          <AppSwitch
            label="Show Loading more content"
            checked={loadMore}
            onChange={event => setLoadMore(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>
    </SettingsComponent>
  );
};

export default DemoSettings;
