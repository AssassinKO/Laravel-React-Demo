import React, { useContext, useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import CmtGridView from '../../../../../@coremat/CmtGridView';

import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import defaultTheme from '../../../../../theme/defaultTheme';
import { THEME_COLORS } from '../../../../constants/CustomizerOptions';
import SidebarThemeContext from '../../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';
import { THEME_TYPES } from '../../../../constants/ThemeOptions';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: '4px 16px',
    },
    '& .Cmt-card-content': {
      padding: 16,
    },
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: theme.palette.success.main,
  },
}));

let activeTheme = {};

const ThemeColor = () => {
  const classes = useStyles();
  const { theme, themeType, setTheme } = useContext(AppContext);
  const { setSidebarTheme } = useContext(SidebarThemeContext);

  activeTheme = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };

  const [themeColors, setThemeColors] = useState({
    primary: activeTheme.primary,
    secondary: activeTheme.secondary,
  });

  useEffect(() => {
    if (themeColors.primary !== activeTheme.primary || themeColors.secondary !== activeTheme.secondary) {
      setTheme(theme => ({
        ...theme,
        palette: {
          ...theme.palette,
          primary: {
            ...theme.palette.primary,
            main: themeColors.primary,
          },
          secondary: {
            ...theme.palette.secondary,
            main: themeColors.secondary,
          },
        },
      }));
    }

    setSidebarTheme(sidebarTheme => {
      let newNavActiveColorSetting = {};

      if (sidebarTheme.backgroundColor && sidebarTheme.navActiveBgColor) {
        newNavActiveColorSetting = {
          navActiveBgColor: sidebarTheme.navActiveBgColor,
        };
      } else if (themeType !== THEME_TYPES.LIGHT) {
        newNavActiveColorSetting = {
          navActiveBgColor: themeColors.primary,
        };
      }

      return {
        ...sidebarTheme,
        ...newNavActiveColorSetting,
      };
    });
  }, [themeColors, setTheme, themeType, setSidebarTheme]);

  const resetColor = () => {
    setThemeColors({
      primary: defaultTheme.palette.primary.main,
      secondary: defaultTheme.palette.secondary.main,
    });
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Theme Color">
        <Button onClick={resetColor}>RESET</Button>
      </CmtCardHeader>
      <CmtCardContent>
        <CmtGridView
          itemPadding={16}
          data={THEME_COLORS}
          column={5}
          renderRow={(item, index) => (
            <div style={{ position: 'relative' }} className="pointer" onClick={() => setThemeColors(item)} key={index}>
              <div
                style={{
                  display: 'flex',
                  borderRadius: 'borderRadius',
                  overflow: 'hidden',
                }}>
                <div style={{ height: 32, flex: 1, backgroundColor: item.primary }} />
                <Box style={{ height: 32, flex: 1, backgroundColor: item.secondary }} />
              </div>
              {item.primary === themeColors.primary && item.secondary === themeColors.secondary && (
                <CheckCircleIcon className={classes.checkIcon} />
              )}
            </div>
          )}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default ThemeColor;
