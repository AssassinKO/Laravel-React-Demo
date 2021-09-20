export const getBackground = (showBackground, backgroundStyle, background) => {
  if (showBackground) {
    if (backgroundStyle === 'color') {
      return { backgroundColor: background.color };
    } else if (backgroundStyle === 'gradient') {
      return { backgroundColor: background.gradientColors };
    } else if (backgroundStyle === 'image') {
      return { backgroundImage: background.image };
    }
  }

  return {};
};

export const getOverlay = (showOverlay, overlayStyle, overlay) => {
  if (showOverlay) {
    if (overlayStyle === 'color') {
      return { overlay: { colors: overlay.color, opacity: overlay.opacity } };
    } else if (overlayStyle === 'gradient') {
      return {
        overlay: { colors: overlay.gradientColors, opacity: overlay.opacity },
      };
    }
  }

  return {};
};

export const getBackgroundSourceCode = (showBackground, backgroundStyle, background) => {
  if (showBackground) {
    if (backgroundStyle === 'color') {
      return ` backgroundColor={'${background.color}'}`;
    } else if (backgroundStyle === 'gradient') {
      const [bgColor1, bgColor2] = background.gradientColors;
      return ` backgroundColor={['${bgColor1}','${bgColor2}']}`;
    } else if (backgroundStyle === 'image') {
      return ` backgroundImage={'${background.image}'}`;
    }
  }

  return '';
};

export const getOverlaySourceCode = (showOverlay, overlayStyle, overlay) => {
  if (showOverlay) {
    if (overlayStyle === 'color') {
      return ` overlay={{ colors: '${overlay.color}', opacity: ${overlay.opacity} }}`;
    } else if (overlayStyle === 'gradient') {
      const [bgColor1, bgColor2] = overlay.gradientColors;
      return ` overlay={{ colors: ['${bgColor1}','${bgColor2}'], opacity: ${overlay.opacity} }}`;
    }
  }

  return '';
};
