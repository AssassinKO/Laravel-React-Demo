import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { CollapsibleSection, SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    alignment,
    setAlignment,
    badgeVerticalAlign,
    setBadgeVerticalAlignment,
    badgeHorizontalAlign,
    setBadgeHorizontalAlignment,
    badgeOnItem,
    setBadgePlacement,
    showBadge,
    setBadgeVisibility,
    badgeType,
    setBadgeType,
    avatarVariant,
    setAvatarVariant,
  } = useContext(CorematContext);

  const alignments = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  const badgeTypes = [
    { label: 'Counter', value: 'counter' },
    { label: 'Rating', value: 'rating' },
  ];

  const badgePositions = [
    { label: 'On Component', value: true },
    { label: 'On Avatar', value: false },
  ];

  const verticalAlignments = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  const horizontalAlignments = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  const variants = [
    { label: 'Circle', value: 'circle' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
  ];

  return (
    <SettingsComponent title="Cmt Object Summary">
      <CollapsibleSection heading="Content" open>
        <SectionLegend title="Alignment">
          {alignments.map((item, index) => (
            <AppRadioButton
              key={index}
              name="avatar-alignment"
              label={item.label}
              value={item.value}
              checked={alignment === item.value}
              onChange={() => setAlignment(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Avatar Variants">
          {variants.map((item, index) => (
            <AppRadioButton
              key={index}
              name="avatar-variant"
              label={item.label}
              value={item.value}
              checked={avatarVariant === item.value}
              onChange={() => setAvatarVariant(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Badge Settings" open>
        <SectionLegend>
          <AppSwitch label={'Show Badge'} checked={showBadge} onChange={event => setBadgeVisibility(event.target.checked)} />
        </SectionLegend>

        <SectionLegend title="Badge Type">
          {badgeTypes.map((item, index) => (
            <AppRadioButton
              key={index}
              name="badge-placement"
              label={item.label}
              value={item.value}
              checked={badgeType === item.value}
              onChange={() => setBadgeType(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Badge Placement">
          {badgePositions.map((item, index) => (
            <AppRadioButton
              key={index}
              name="badge-placement"
              label={item.label}
              value={item.value}
              checked={badgeOnItem === item.value}
              onChange={() => setBadgePlacement(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Badge Vertical Alignment">
          {verticalAlignments.map((item, index) => (
            <AppRadioButton
              key={index}
              name="badge-v-alignment"
              label={item.label}
              value={item.value}
              checked={badgeVerticalAlign === item.value}
              onChange={() => setBadgeVerticalAlignment(item.value)}
            />
          ))}
        </SectionLegend>

        <SectionLegend title="Badge Vertical Alignment">
          {horizontalAlignments.map((item, index) => (
            <AppRadioButton
              key={index}
              name="badge-h-alignment"
              label={item.label}
              value={item.value}
              checked={badgeHorizontalAlign === item.value}
              onChange={() => setBadgeHorizontalAlignment(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>
    </SettingsComponent>
  );
};

export default DemoSettings;
