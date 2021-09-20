import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const { isGrid, setGrid, isExpandable, setExpandable } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Group List">
      <SectionLegend title="Basic Settings">
        <AppSwitch
          name="expandable-view"
          label="Show Expandable View"
          checked={isExpandable}
          onChange={event => setExpandable(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend>
        <AppSwitch
          name="grid-view"
          label="Show As Grid List"
          checked={isGrid}
          onChange={event => setGrid(event.target.checked)}
        />
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
