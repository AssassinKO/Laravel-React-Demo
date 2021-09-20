import React, { useContext } from 'react';
import AppCheckbox from '../../../../@jumbo/components/Common/formElements/AppCheckBox';
import { Box } from '@material-ui/core';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import {
  CollapsibleSection,
  SectionLegend,
  SettingsComponent,
  BackgroundSettingSection,
  OverlaySettingSection,
} from '../../../../@jumbo/components/CorematDemosComponents';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    extraContent,
    setExtraContent,
    extraActions,
    setExtraActions,
    avatarType,
    setAvatarType,
    showChildren,
    setShowChildren,
    showAvatar,
    setShowAvatar,
    contentAlignCenter,
    setContentAlignment,
    reverseDirection,
    setContentDirection,
    headerAlignCenter,
    setHeaderAlignment,
    showFooter,
    setFooterVisibility,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Advanced Card">
      <Box display="flex" flexWrap="wrap" alignItems="center" mb={2} mt={-2} color="text.secondary">
        <AppCheckbox
          label="Extra Content"
          checked={extraContent}
          onChange={event => setExtraContent(event.target.checked)}
        />
        <AppCheckbox
          label="Extra Actions"
          checked={extraActions}
          onChange={event => setExtraActions(event.target.checked)}
        />
      </Box>

      <CollapsibleSection heading="Header" open={true}>
        <SectionLegend title="Alignment">
          <AppRadioButton
            name="header-align"
            label="Default"
            checked={!headerAlignCenter}
            value={false}
            onChange={() => setHeaderAlignment(false)}
          />

          <AppRadioButton
            name="header-align"
            label="Center"
            checked={headerAlignCenter}
            value={true}
            onChange={event => setHeaderAlignment(event.target.value)}
          />
        </SectionLegend>

        <SectionLegend>
          <AppSwitch
            label="Show Avatar or Icon"
            checked={showAvatar}
            onChange={event => setShowAvatar(event.target.checked)}
          />
        </SectionLegend>

        <SectionLegend title="Avatar Style<">
          <AppRadioButton
            name="avatar-type"
            label="Avatar"
            checked={avatarType === 'avatar'}
            value="avatar"
            onChange={event => setAvatarType(event.target.value)}
          />

          <AppRadioButton
            name="avatar-type"
            label="Icon"
            checked={avatarType === 'icon'}
            value="icon"
            onChange={event => setAvatarType(event.target.value)}
          />

          <AppRadioButton
            name="avatar-type"
            label="Icon Avatar"
            checked={avatarType === 'icon-avatar'}
            value="icon-avatar"
            onChange={event => setAvatarType(event.target.value)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Content" open={true}>
        <SectionLegend title="Alignment">
          <AppRadioButton
            name="content-align"
            label="Default"
            checked={!contentAlignCenter}
            value={false}
            onChange={() => setContentAlignment(false)}
          />

          <AppRadioButton
            name="content-align"
            label="Center"
            checked={contentAlignCenter}
            value={true}
            onChange={event => setContentAlignment(event.target.value)}
          />
        </SectionLegend>

        <SectionLegend>
          <AppSwitch
            label="Add children as content"
            checked={showChildren}
            onChange={event => setShowChildren(event.target.checked)}
          />
        </SectionLegend>

        <SectionLegend>
          <AppSwitch
            label="Reverse Direction"
            checked={reverseDirection}
            onChange={event => setContentDirection(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Footer" open={false}>
        <AppSwitch label="Show Footer" checked={showFooter} onChange={event => setFooterVisibility(event.target.checked)} />
      </CollapsibleSection>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  );
};

export default DemoSettings;
