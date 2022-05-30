// Code that builds HTML table and fills it with data from data.js file
// Import the data from data.js
const tableData = data;
// Reference the HTML table by using d3 (JavaScript Library)
var tbody = d3.select("tbody");
// Create a function that iterates through the array of objects and appends to table
// tbody.html("") tells us to reference html page and ("") is an empty string
function buildTable(data) {
    tbody.html("");
// Add the forEach Function to iterate through data
// let row = tbody.append("tr"); create variable that will append a row to the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => { //Loop through data rows telling JavaScript to reference one object from the array of UFO sightings
            let cell = row.append("td"); // Append data to a table
            cell.text(val); // Add Values to table
            }
        );
    });
}

// Add a Filter (Date)
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };