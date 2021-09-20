import React, { useContext, useEffect, useState } from 'react';

import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';

const DemoSettings = () => {
  const { dotPosition, setDotPosition, dotStyle, setDotStyle, settings, setCarouselSettings } = useContext(CorematContext);

  const [carouselMode, setCarouselMode] = useState('horizontal');

  const alignments = [
    { label: 'Vertical Mode', value: 'vertical' },
    { label: 'Horizontal Mode', value: 'horizontal' },
  ];

  const positions = [
    { label: 'Top Center', value: 'top' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Bottom Center', value: 'bottom' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
  ];

  const styles = [
    { label: 'Outline', value: 'outline' },
    { label: 'Contained', value: 'contained' },
  ];

  useEffect(() => {
    if (carouselMode === 'vertical') {
      setCarouselSettings({
        ...settings,
        vertical: true,
        verticalSwiping: true,
      });
    } else {
      setCarouselSettings({
        ...settings,
        vertical: false,
        verticalSwiping: false,
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselMode]);

  return (
    <SettingsComponent title="Cmt Carousel">
      <SectionLegend title="Carousel Mode">
        {alignments.map((item, index) => (
          <AppRadioButton
            key={index}
            name="carousel-mode"
            label={item.label}
            value={item.value}
            checked={carouselMode === item.value}
            onChange={() => setCarouselMode(item.value)}
          />
        ))}
      </SectionLegend>

      <SectionLegend title="Dot Style">
        {styles.map((item, index) => (
          <AppRadioButton
            key={index}
            name="dot-style"
            label={item.label}
            value={item.value}
            checked={dotStyle === item.value}
            onChange={() => setDotStyle(item.value)}
          />
        ))}
      </SectionLegend>

      <SectionLegend title="Dot Position">
        {positions.map((item, index) => (
          <AppRadioButton
            key={index}
            style={{ minWidth: 170 }}
            name="dot-position"
            label={item.label}
            value={item.value}
            checked={dotPosition === item.value}
            onChange={() => setDotPosition(item.value)}
          />
        ))}
      </SectionLegend>
    </SettingsComponent>
  );
};

export default DemoSettings;
