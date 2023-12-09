import React, { useState } from 'react';
// import './APITable.css'; // Import your CSS file

const APITable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

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

  const data = [
    { id: 1, name: 'GeraMaster1', apiKey: "_dsfjdasjdlfjlsdfjlsjdflsa", disabled: "no", pin: 545646, dupeFolding: "N" },
    { id: 2, name: 'Ishkan', apiKey: "_kljlkjlkjlasdkkdsladfjlka", disabled: "no", pin: 654654, dupeFolding: "N" },
    { id: 3, name: 'Jenny', apiKey: "_kljlkjlkjlasdkkdsladfjlka", disabled: "no", pin: 654654, dupeFolding: "N" }
  ];

  return (
    <table className="api-table">
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>Name</th>
          <th>API Key</th>
          <th>Disabled</th>
          <th>PIN</th>
          <th>Dupe Folding</th>
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
            <td>{row.name}</td>
            <td>{row.apiKey}</td>
            <td>{row.disabled}</td>
            <td>{row.pin}</td>
            <td>{row.dupeFolding}</td>
            {/* Add more cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default APITable;
