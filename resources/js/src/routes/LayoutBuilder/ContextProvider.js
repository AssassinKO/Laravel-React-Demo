import React, { useState } from 'react';
import defaultContext from '../../@jumbo/components/contextProvider/AppContextProvider/defaultContext';
import { THEME_TYPES } from '../../@jumbo/constants/ThemeOptions';
import { alpha } from '@material-ui/core/styles';

export const BuilderContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [layout, setLayout] = useState(defaultContext.layout);
  const [containerStyle, setContainerStyle] = useState(defaultContext.layoutType);
  const [themeType, setThemeType] = useState(defaultContext.themeType);
  const [primaryColor, setPrimaryColor] = useState(defaultContext.theme.palette.primary.main);
  const [secondaryColor, setSecondaryColor] = useState(defaultContext.theme.palette.secondary.main);
  const [collapsedSource, setCollapsedSource] = useState(false);

  const getSidebarActiveColors = () => {
    if (primaryColor && primaryColor !== '#') {
      if (themeType === THEME_TYPES.SEMI_DARK) {
        return {
          navActiveBgColor: primaryColor,
        };
      }
      if (themeType === THEME_TYPES.DARK) {
        return {
          navActiveBgColor: primaryColor,
        };
      }
      if (themeType === THEME_TYPES.LIGHT) {
        return {
          textActiveColor: primaryColor,
          navActiveBgColor: alpha(primaryColor, 0.1),
        };
      }
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        layout,
        setLayout,
        containerStyle,
        setContainerStyle,
        themeType,
        setThemeType,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        collapsedSource,
        setCollapsedSource,
        getSidebarActiveColors,
      }}>
      {children}
    </BuilderContext.Provider>
  );
};

export default ContextProvider;
