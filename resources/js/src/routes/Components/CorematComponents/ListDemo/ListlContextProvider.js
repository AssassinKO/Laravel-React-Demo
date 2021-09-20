import React, { useState } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';

const ListlContextProvider = ({ children }) => {
  const [resultEmpty, setResultEmpty] = useState(false);
  const [initLoader, setInitLoader] = useState(false);
  const [showFooter, setFooterVisibility] = useState(false);
  const [paginationType, setPaginationType] = useState('load-more');
  const [position, setPosition] = useState('center');
  const [loadMore, setLoadMore] = useState(false);

  return (
    <CorematContext.Provider
      value={{
        resultEmpty,
        setResultEmpty,
        initLoader,
        setInitLoader,
        showFooter,
        setFooterVisibility,
        paginationType,
        setPaginationType,
        position,
        setPosition,
        loadMore,
        setLoadMore,
      }}>
      {children}
    </CorematContext.Provider>
  );
};

export default ListlContextProvider;
