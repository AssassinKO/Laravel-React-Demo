import React, { useContext, useEffect } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { SectionLegend, SettingsComponent } from '../../../../@jumbo/components/CorematDemosComponents';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';
import AppSwitch from '../../../../@jumbo/components/Common/formElements/AppSwitch';

const DemoSettings = () => {
  const {
    column,
    setColumns,
    responsive,
    setResponsiveStatus,
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
  } = useContext(CorematContext);

  const columnSizes = [2, 3, 4];

  const paginationTypes = [
    { label: 'Load More', value: 'load-more' },
    { label: 'Pagination', value: 'pagination' },
  ];

  const positions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  useEffect(() => {
    if (initLoader) {
      setResultEmpty(true);
    }
  }, [initLoader, setResultEmpty]);

  useEffect(() => {
    if (!resultEmpty) {
      setInitLoader(false);
    }
  }, [resultEmpty, setInitLoader]);

  return (
    <SettingsComponent title="Cmt Grid View">
      <SectionLegend title="Basic Settings">
        <AppSwitch
          name="responsive"
          label="Responsive Grid"
          checked={responsive}
          onChange={event => setResponsiveStatus(event.target.checked)}
        />
      </SectionLegend>

      {!responsive && (
        <SectionLegend title="Choose column size">
          {columnSizes.map((option, index) => (
            <AppRadioButton
              key={index}
              name="column"
              label={option}
              value={option}
              checked={column === option}
              onChange={() => setColumns(option)}
            />
          ))}
        </SectionLegend>
      )}

      <SectionLegend>
        <AppSwitch
          name="show-initial-loader"
          label="Show Initial Loader"
          checked={initLoader}
          onChange={event => setInitLoader(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend>
        <AppSwitch
          name="result-empty"
          label="Make Result Empty"
          checked={resultEmpty}
          onChange={event => setResultEmpty(event.target.checked)}
        />
      </SectionLegend>

      <SectionLegend>
        <AppSwitch
          name="show-footer"
          label="Show Footer"
          checked={showFooter}
          onChange={event => setFooterVisibility(event.target.checked)}
        />
      </SectionLegend>

      {showFooter && (
        <SectionLegend title="Show Loading more content">
          {paginationTypes.map((item, index) => (
            <AppRadioButton
              key={index}
              name="pagination-type"
              label={item.label}
              value={item.value}
              checked={paginationType === item.value}
              onChange={() => setPaginationType(item.value)}
            />
          ))}
        </SectionLegend>
      )}

      {showFooter && paginationType === 'pagination' && (
        <SectionLegend title="Pagination Position">
          {positions.map((item, index) => (
            <AppRadioButton
              key={index}
              name="show-border"
              label={item.label}
              value={item.value}
              checked={position === item.value}
              onChange={() => setPosition(item.value)}
            />
          ))}
        </SectionLegend>
      )}

      {showFooter && paginationType === 'load-more' && (
        <SectionLegend>
          <AppSwitch
            name="show-load-more-content"
            label="Show Loading more content"
            checked={loadMore}
            onChange={event => setLoadMore(event.target.checked)}
          />
        </SectionLegend>
      )}
    </SettingsComponent>
  );
};

export default DemoSettings;
