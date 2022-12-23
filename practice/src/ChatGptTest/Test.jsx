import React, { useState } from "react";

// created a multiple checkbox filter featurein simpelest form

function Test() {
  // Create a state variable to store the selected values
  const [selectedValues, setSelectedValues] = useState([]);

  // Create a state variable to store the data that you want to filter
  const [data, setData] = useState([
    { name: "Alice", category: "Category 1" },
    { name: "Bob", category: "Category 2" },
    { name: "Eve", category: "Category 1" },
    { name: "Charlie", category: "Category 2" },
    { name: "Dave", category: "Category 1" },
  ]);

  // Create a function to handle the change event of the checkboxes
  const handleChange = (event) => {
    const { value } = event.target;
    if (event.target.checked) {
      // If the checkbox is checked, add the value to the selected values array
      setSelectedValues([...selectedValues, value]);
    } else {
      // If the checkbox is not checked, remove the value from the selected values array
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  // Create a function to filter the data based on the selected values
  const filterData = (data) => {
    return data.filter((item) => selectedValues.includes(item.category));
  };

  const filteredData = filterData(data);

  return (
    <div>
      <form>
        {/* Render a checkbox for each option */}
        <label>
          <input
            type="checkbox"
            value="Category 1"
            onChange={handleChange}
            checked={selectedValues.includes("Category 1")}
          />
          Category 1
        </label>
        <label>
          <input
            type="checkbox"
            value="Category 2"
            onChange={handleChange}
            checked={selectedValues.includes("Category 2")}
          />
          Category 2
        </label>
      </form>
      <ul>
        {/* {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))} */}
        {filteredData.length === 0
          ? data.map((value) => {
              return (
                <>
                  <li>{value.name}</li>
                </>
              );
            })
          : filteredData.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default Test;
