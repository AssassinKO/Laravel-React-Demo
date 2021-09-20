import React from 'react';
import Theme from '../../partials/customizer/Theme';
import ThemeStyles from '../../partials/customizer/ThemeStyles';
import DisplayLayout from '../../partials/customizer/DisplayLayout';
import OtherSettings from '../../partials/customizer/OtherSettings';
import SidebarSize from '../../partials/customizer/SidebarSize';
import ThemeColor from '../../partials/customizer/ThemeColor';
import SidebarOption from '../../partials/customizer/SidebarOption';
import NavigationLayout from '../../partials/customizer/NavigationLayout';
import CustomizerBody from '../../partials/customizer/CustomizerBody';

const Customizer = () => {
  return (
    <CustomizerBody>
      <Theme />
      <ThemeColor />
      <NavigationLayout />
      <DisplayLayout />
      <OtherSettings />
      <SidebarOption />
      <SidebarSize />
      <ThemeStyles />
    </CustomizerBody>
  );
};

export default Customizer;
