import React, { useState } from "react";

function Table() {
    const [searchDate, setSearchDate] = useState('');
    const [data, setData] = useState([
      { id: 1, name: 'apple', date:"new Date(2015, 5, 22)"},
      { id: 2, name: 'cova', date:"new Date(2015, 5, 22)"},
      { id: 3, name: 'orange', date:"new Date(2015, 5, 22)" },
      { id: 4, name: 'mango', date:"new Date(2015, 5, 22)" },
      { id: 5, name: 'green-apple', date:"new Date(2015, 5, 22)" },
    ]);
  
    const handleSearchDateChange = (event) => {
      setSearchDate(event.target.value);
    };
  
    const filteredData = data.filter((row) =>
      row.name.includes(searchDate)
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search by date"
          value={searchDate}
          onChange={handleSearchDateChange}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((value, key) => (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default Table;