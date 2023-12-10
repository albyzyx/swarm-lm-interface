import { useState, useEffect } from "react";

const APITable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedData = localStorage.getItem("selectedCardData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="api-table-container">
      <table className="api-table">
        <thead>
          <tr>
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
    </div>
  );
};

export default APITable;
