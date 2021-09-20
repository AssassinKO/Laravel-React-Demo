import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const ObjectSummaryContextProvider = ({ children }) => {
  const [alignment, setAlignment] = useState('vertical');
  const [badgeVerticalAlign, setBadgeVerticalAlignment] = useState('top');
  const [badgeHorizontalAlign, setBadgeHorizontalAlignment] = useState('right');
  const [badgeOnItem, setBadgePlacement] = useState(false);
  const [showBadge, setBadgeVisibility] = useState(true);
  const [badgeType, setBadgeType] = useState('counter');
  const [avatarVariant, setAvatarVariant] = useState('rounded');

  return (
    <CorematContext.Provider
      value={{
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
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default ObjectSummaryContextProvider;
