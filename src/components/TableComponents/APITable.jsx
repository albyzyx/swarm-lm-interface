import React, { useState, useEffect } from 'react';

const APITable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedData = localStorage.getItem('selectedCardData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleCheckboxChange = (id) => {
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];

    setSelectedRows(newSelectedRows);
    onSelect(newSelectedRows);
  };

  const onSelect = (selectedRows) => {
    console.log('Selected Rows:', selectedRows);
    // You can perform additional actions with the selected rows here
  };
  return (
    <table className="api-table">
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>Name</th>
          <th>API Key</th>
          <th>Modal Name</th>
          <th>Price Pool</th>
          <th>Gpu Specification</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            <td>{row.inputName}</td>
            <td>{row.apiKey}</td>
            <td>{row.totalRecords}</td>
            <td>{row.price}</td>
            <td>{row.gpu}</td>
            {/* Add more cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default APITable;
