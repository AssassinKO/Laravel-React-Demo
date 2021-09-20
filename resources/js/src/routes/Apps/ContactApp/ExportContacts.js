import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportContacts = ({ children, data }) => {
  const contacts = data.map(item => {
    item.phoneStrings = item.phones.map(contact => contact.phone).join(',');
    return item;
  });
  return (
    <ExcelFile element={children}>
      <ExcelSheet data={contacts} name="Contacts">
        <ExcelColumn label="Id" value="id" />
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Email" value="email" />
        <ExcelColumn label="Phones" value="phoneStrings" />
        <ExcelColumn label="Company" value="company" />
        <ExcelColumn label="Designation" value="designation" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportContacts;
