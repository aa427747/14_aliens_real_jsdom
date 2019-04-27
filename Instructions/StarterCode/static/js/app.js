// UNIT 14 - JAVASCRIPT AND DOM MANIPULATION
// CREATED - APRIL, 2019
// *******************************************************************************

// Question/Note - I know the code below will work outside if the init() function, but having an problem with the update, so thinking it has to be in a function?  Is that true?

// 1. Using information in the UFO dataset, create/appends table to the UFO webpage.
function getUfoData() {
  // Create variable for the data in the data.js
  var tableData = data;
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  console.log(tableData);
  // Step 1: Loop Through `data` and console.log each ufo report object
  // Step 2:  Use d3 to append one table row `tr` for each ufo report object
  // Step 3:  Use `Object.entries` to console.log each ufo report value
  // Step 4: Use d3 to append 1 cell per ufo report value (date/time, city, state, shape, duration, comments)
  // Step 5: Use d3 to update each cell's text with
  tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(`Key: ${key}, Value: ${value}`);
      // Append a cell to the row for each value in the ufo report object
      var cell = tbody.append("td");
      cell.text(value);
    });
    // For RG notes - This is what it would look like with Arrow Functions
    // tableData.forEach((ufoReport) => {
    //   var row = tbody.append("tr");
    //   Object.entries(ufoReport).forEach(([key, value]) => {
    //     var cell = tbody.append("td");
    //     cell.text(value);
    //   });
    // });
  // Close the tableData 
  })
// Close the init() function.
};

// Run the init() function.
getUfoData()



// 2. Create a filter of the dataset data table to look at specific elements using the <Input> or multiple tags to filter the data.

// 2a. FORM FILTER by Date

// Submit Button handler through the function, but haven't gotten it to work yet.
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();
//   // Select the input value from the form (.node, the input will select the value that is in the form.)
//   var inputValue = d3.select("#datetime").node().value;
//   console.log(inputValue);
//   d3.select("#datetime").node().value = "";
//   buildFilter(ufofilter);

// Assign the data from `data.js` to a descriptive variable
var sites = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sites);

  // clear the input value
  d3.select("#datetime").node().value = "";

// function buildFilter(ufofilter) {
  // Assign the data from `data.js` to a descriptive variable
  // var sites = data;
  // console.log(sites);
  
  var filteredData = sites.filter(site => site.datetime === inputValue);
    // d3.select(".summary").text(site.city).append("li").text(`Site: ${site.city}`);
  console.log(filteredData);

  // DISPLAY from filtered (selected) data
  var filterTableData = filteredData;
  
  // Get a reference to the table body
  // var table = d3.select(".summary");
  // var table = d3.select("#filteredufo-table");
  // var table = d3.select("tbody");
  var table = d3.select("#ufo-table");
  
  var tbody = d3.select("tbody");
  tbody.html(" ");
  // The .remove came from: https://stackoverflow.com/questions/38918120/replace-old-content-d3
  // d3.select("tbody").remove();
  // tbody.text("");
  // Console.log the weather data from data.js
  console.log(filterTableData);
  // RG Notes -- The following will allow you to separate the table heading (key) from the table values (value).
  // filterTableData.forEach(function(filterUfoReport) {
  //   console.log(filterUfoReport);
  //   var tbody = table.append("tbody")
  //   var row = table.append("tr");
  //   Object.keys(filterUfoReport).forEach(function(key) {
  //     console.log(`Key: ${key}`);
  //     var cell = table.append("th");
  //     cell.text(key);
  //   });
  //   var row = table.append("tr");
  //   Object.values(filterUfoReport).forEach(function(value) {
  //     console.log(`Value: ${value}`);
  //     var cell = table.append("td");
  //     cell.text(value);
  //   });
  // var filtertable = d3.select("tbody");

  // RG Notes -- The following will create both the key and values, but only displying the values, so could use the Object.values and get the same thing.
  filterTableData.forEach(function(filterUfoReport) {
    console.log(filterUfoReport);
    var tbody = table.append("tbody")
    var row = tbody.append("tr");
    Object.entries(filterUfoReport).forEach(function([key, value]) {
      console.log(`Key: ${key}, Value: ${value}`);
      // Append a cell to the row for each value in the ufo report object
      // var listitem = filtertable.append("li").text(`Key: ${key}, Value: ${value}`);
      // var cell = table.append("th");
      // cell.text(key);
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Close the DATE submit function: 
});

// d3.select("#filter-btn").on("click", handleSubmit);

// 2b. FORM FILTER by City:
var sites = data;

  // Select the submit button
var submit = d3.select("#filter-city");


submit.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();


//***How to reset the filter?? */
//   document.getElementById("reset").onclick = function() {
//     document.getElementById("numbers").innerHTML = "";
//  };

  // d3.event.reset();

  // Select the input element and get the raw HTML node
  var inputcityElement = d3.select("#city");

  // Get the value property of the input element
  var inputcityValue = inputcityElement.property("value");

  console.log(inputcityValue);
  console.log(sites);

  // clear the input value
  d3.select("#city").node().value = "";

  var filteredcityData = sites.filter(site => site.city === inputcityValue);
    // d3.select(".summary").text(site.city).append("li").text(`Site: ${site.city}`);
  console.log(filteredcityData);

  // DISPLAY from filtered (selected) data
  var filtercityTableData = filteredcityData;

  // Get a reference to the table body
  // var table = d3.select(".summary");
  var table = d3.select("#ufo-table");
  // var table = d3.select("#filteredufo-table");
  // Console.log the weather data from data.js
  console.log(filtercityTableData);

  filtercityTableData.forEach(function(filterUfoReport) {
    console.log(filterUfoReport);
    var row = table.append("tr");
    Object.keys(filterUfoReport).forEach(function(key) {
      console.log(`Key: ${key}`);
      var cell = table.append("th");
      cell.text(key);
    });
    var row = table.append("tr");
    Object.values(filterUfoReport).forEach(function(value) {
      console.log(`Value: ${value}`);
      var cell = table.append("td");
      cell.text(value);
    });
  //Close the filtercityTableData function:  
  });
// Close the City Submit
});

// Add event listener for submit button
// d3.select("#submit").on("click", handleSubmit);


// Question/Note - DO I NEED TO Create a function that will update the table??

// function updateTable(newselectiondata) {
//   var FILTER = document.getElementById("ufo-table");

  // Note the extra brackets around 'newx' and 'newy'
  // Plotly.restyle(LINE, "values", [newselectiondata]);

//   filtercityTableData.forEach(function(filterUfoReport) {
//    console.log(filterUfoReport);
//    var row = table.append("tr");
//    Object.keys(filterUfoReport).forEach(function(key) {
//      console.log(`Key: ${key}`);
//      var cell = table.append("th");
//      cell.text(key);
//    });
//    var row = table.append("tr");
//    Object.values(filterUfoReport).forEach(function(value) {
//      console.log(`Value: ${value}`);
//      var cell = table.append("td");
//      cell.text(value);
//    });
// }

// function getUfoData(ufoDataSet) {

//   // Initialize empty arrays to contain the new selected criteria
//   var selectiondata = [];

//   // Fill the x arrays as a function of the selected dataset
//   switch (ufoDataSet) {
//     case "UFO":
//       // function init()
//       break;
//     case "Date":
//       alert(ufoDataSet)
//       break;
//     case "City":
//       alert(ufoDataSet)
//       break;
//     case "State":
//       alert(ufoDataSet)
//       break;
//     default:
//       console.log("I'm sorry, I can't find that!");
//       break;
//     }

//   // updateTable(selectiondata);
// };