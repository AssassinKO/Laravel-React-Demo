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
    showMainContent,
    setMainContent,
    showExpendableContent,
    setExpendableContent,
    showSocialButtons,
    setSocialButtonsVisibility,
  } = useContext(CorematContext);

  return (
    <SettingsComponent title="Cmt Expendable Card">
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
            label="Show Main Content"
            checked={showMainContent}
            onChange={event => setMainContent(event.target.checked)}
          />

          <AppSwitch
            label="Show Expendable Content"
            checked={showExpendableContent}
            onChange={event => setExpendableContent(event.target.checked)}
          />

          <AppSwitch
            label="Show Social Buttons"
            checked={showSocialButtons}
            onChange={event => setSocialButtonsVisibility(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  );
};

export default DemoSettings;
