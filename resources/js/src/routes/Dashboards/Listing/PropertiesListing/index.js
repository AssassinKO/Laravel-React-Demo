import React, { useEffect, useState } from 'react';
import { propertiesList } from '../../../../@fake-db';
import PropertyDetail from './PropertyDetail';
import PropertiesList from './PropertiesList';
import Collapse from '@material-ui/core/Collapse';

const PropertiesListing = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [page, setPage] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [tabValue, setTabValue] = useState('');

  useEffect(() => {
    setCategoryData(
      tabValue
        ? propertiesList.filter(item => item.category === tabValue).slice(0, page * 5)
        : propertiesList.slice(0, page * 5),
    );
  }, [tabValue, page]);

  const handlePageChange = () => {
    setPage(page + 1);
  };

  const onChangeTab = value => {
    setSearchText('');
    setPage(1);
    setTabValue(value);
  };

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const getFilteredData = () => {
    if (searchText) {
      return categoryData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else return categoryData;
  };

  const handlePropertyClick = property => setSelectedProperty(property);

  const showPropertyList = () => setSelectedProperty(null);

  const data = getFilteredData();

  return (
    <React.Fragment>
      <Collapse in={selectedProperty} timeout="auto" unmountOnExit>
        {selectedProperty && <PropertyDetail selectedProperty={selectedProperty} showPropertyList={showPropertyList} />}
      </Collapse>

      <Collapse in={!selectedProperty} timeout="auto" unmountOnExit>
        <PropertiesList
          onPropertyClick={handlePropertyClick}
          tabValue={tabValue}
          onChangeTab={onChangeTab}
          data={data}
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handlePageChange={handlePageChange}
        />
      </Collapse>

      {/*{selectedProperty ? (
        <PropertyDetail selectedProperty={selectedProperty} showPropertyList={showPropertyList} />
      ) : (
        <PropertiesList
          onPropertyClick={handlePropertyClick}
          tabValue={tabValue}
          onChangeTab={onChangeTab}
          data={data}
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handlePageChange={handlePageChange}
        />
      )}*/}
    </React.Fragment>
  );
};

export default PropertiesListing;
