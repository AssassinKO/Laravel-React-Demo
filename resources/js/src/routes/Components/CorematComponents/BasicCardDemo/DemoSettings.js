import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import {
  BackgroundSettingSection,
  CollapsibleSection,
  OverlaySettingSection,
  SectionLegend,
  SettingsComponent,
} from '../../../../@jumbo/components/CorematDemosComponents';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    extraActions,
    setExtraActions,
    avatarType,
    setAvatarType,
    showAvatar,
    setShowAvatar,
    showCardMedia,
    setCardMedia,
    showMainContent,
    setMainContent,
    showFooter,
    setFooterVisibility,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Basic Card">
      <CollapsibleSection heading="Header" open={true}>
        <SectionLegend>
          <AppSwitch
            label="Show Avatar or Icon"
            checked={showAvatar}
            onChange={event => setShowAvatar(event.target.checked)}
          />
        </SectionLegend>

        <SectionLegend title="Avatar Style">
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

        <SectionLegend>
          <AppSwitch
            label="Show Extra Actions"
            checked={extraActions}
            onChange={event => setExtraActions(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Content" open={true}>
        <SectionLegend title="Data" displayAsColumn>
          <AppSwitch
            label="Show Card Media"
            checked={showCardMedia}
            onChange={event => setCardMedia(event.target.checked)}
          />

          <AppSwitch
            label="Show Main Content"
            checked={showMainContent}
            onChange={event => setMainContent(event.target.checked)}
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
