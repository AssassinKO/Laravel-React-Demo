import React from 'react';
import Theme from '../../partials/customizer/Theme';
import ThemeStyles from '../../partials/customizer/ThemeStyles';
import DisplayLayout from '../../partials/customizer/DisplayLayout';
import SidebarSize from '../../partials/customizer/SidebarSize';
import CardRadius from '../../partials/customizer/CardRadius';
import ThemeColor from '../../partials/customizer/ThemeColor';
import SidebarOption from '../../partials/customizer/SidebarOption';
import CustomizerBody from '../../partials/customizer/CustomizerBody';
import NavigationLayout from '../../partials/customizer/NavigationLayout';
import OtherSettings from '../../partials/customizer/OtherSettings';
import SidebarLayouts from '../../partials/customizer/SidebarLayouts';

const Customizer = () => {
  return (
    <CustomizerBody>
      <Theme />
      <ThemeColor />
      <NavigationLayout />
      <DisplayLayout />
      <SidebarLayouts />
      <SidebarOption />
      <SidebarSize />
      <ThemeStyles />
      <OtherSettings />
      <CardRadius />
    </CustomizerBody>
  );
};

export default Customizer;
