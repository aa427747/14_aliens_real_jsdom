// UNIT 14 - JAVASCRIPT AND DOM MANIPULATION
// CREATED - APRIL, 2019
// *******************************************************************************

// 1. Using information in the UFO dataset, create/appends table to the UFO webpage.
function buildUfoData() {
  var tableData = data;
  var tbody = d3.select("tbody");
  console.log(tableData);
  tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(`Key: ${key}, Value: ${value}`);
      // Append a cell to the row for each value in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    }); 
  })
};

// Run the init() function.
buildUfoData();

// 2. Create a filter of the dataset data table to look at specific elements using the <Input> or multiple tags to filter the data.

// Filter function and each of the submit functions will point back to this rebuild of the table.
function updateUfoData(filteredData) {
  var tbody = d3.select("tbody");
  tbody.text("");
  var filtercityTableData = filteredData;
  console.log(filtercityTableData);
  filtercityTableData.forEach(function(filterUfoReport) {
    console.log(filterUfoReport);
    var row = tbody.append("tr");
    Object.values(filterUfoReport).forEach(function(value) {
      console.log(`Value: ${value}`);
      var cell = row.append("td");
      cell.text(value);
    });  
  });
}

// 2a. FORM FILTER by Date
// Submit Button handler through the function for Date.  Once the date is entered and the filter 
// selected it will rebuld the table in the updateUfoData 
function handleSubmit() {
    // var sites = data;
    d3.event.preventDefault();
    // Select the input value from the form (.node, the input will select the value that is in the form.)
    var inputValue = d3.select("#datetime").node().value;
    console.log(inputValue);
    d3.select("#datetime").node().value = "";
    var inputElement = inputValue;
    var sites = data;
    var filteredData = sites.filter(site => site.datetime === inputElement);
    console.log(filteredData);
    updateUfoData(filteredData)
}

// Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit); 

// 2b. FORM FILTER by City
// Submit Button handler through the function for City.  Once the date is entered and the filter 
// selected it will rebuld the table in the updateUfoData 
function handleSubmitCity() {
  // var sites = data;
  d3.event.preventDefault();
  // Select the input value from the form (.node, the input will select the value that is in the form.)
  var inputValue = d3.select("#city").node().value;
  console.log(inputValue);
  d3.select("#city").node().value = "";
  var inputElement = inputValue;
  var sites = data;
  var filteredData = sites.filter(site => site.city === inputElement);
  console.log(filteredData);
  updateUfoData(filteredData)
}

// Add event listener for submit button
d3.select("#filter-city").on("click", handleSubmitCity); 
// d3.select("#filter-btn").on("click", handleSubmitCity); 

// 2c. FORM FILTER by State
// Submit Button handler through the function for State.  Once the date is entered and the filter 
// selected it will rebuld the table in the updateUfoData 
function handleSubmitState() {
  // var sites = data;
  d3.event.preventDefault();
  // Select the input value from the form (.node, the input will select the value that is in the form.)
  var inputValue = d3.select("#state").node().value;
  console.log(inputValue);
  d3.select("#state").node().value = "";
  var inputElement = inputValue;
  var sites = data;
  var filteredData = sites.filter(site => site.state === inputElement);
  console.log(filteredData);
  updateUfoData(filteredData)
}

// Add event listener for submit button
d3.select("#filter-state").on("click", handleSubmitState); 

// 2d-2. FORM FILTER by Country
// Submit Dropdown handler through the function for Country.  Once the country is selected, the filter 
// will rebuld the table in the updateUfoData 
// Submit Button handler through the function for Country.
function handleSubmitCountry(inputValue) {
  // var sites = data;
  // d3.event.preventDefault();
  // Select the input value from the form (.node, the input will select the value that is in the form.)
  // var inputValue = d3.select("#country").node().value;
  // console.log(inputValue);
  // d3.select("#country").node().value = "";
  var inputElement = inputValue;
  var sites = data;
  var filteredData = sites.filter(site => site.country === inputElement);
  console.log(filteredData);
  updateUfoData(filteredData)
}

// Add event listener for submit button
// d3.select("#filter-country").on("click", handleSubmitCountry); 

// 2e-2. FORM FILTER by Country
// Submit Dropdown handler through the function for Shapes.  Once the shape is selected, the filter 
// will rebuld the table in the updateUfoData 
function handleSubmitShape(inputValue) {
  // var sites = data;
  // d3.event.preventDefault();
  // Select the input value from the form (.node, the input will select the value that is in the form.)
  // var inputValue = d3.select("#shape").node().value;
  // var inputShape = inputValue;
  // console.log(inputShape);
  // d3.select("#shape").node().value = "";
  var inputElement = inputValue;
  var sites = data;
  var filteredData = sites.filter(site => site.shape === inputElement);
  console.log(filteredData);
  updateUfoData(filteredData)
}

// Add event listener for submit button
// d3.select("#filter-shape").on("click", handleSubmitShape); 

// Add event listener for submit button to reset the table after filtering.
d3.select("#reset-btn").on("click", buildUfoData); 

// 2d-1. FORM FILTER by Country
// Submit Dropdown handler through the function for Country.  Once the country is selected, the filter 
// will rebuld the table in the updateUfoData 
// Submit Button handler through the function for Country.
function getUfoShapeData(ufoDataSet) {
  // Initialize empty arrays to contain the new selected criteria
  var inputValue = [];
  // Fill the x arrays as a function of the selected dataset
  switch (ufoDataSet) {
    case "circle":
      inputValue = "circle";
      break;
    case "light":
      inputValue = "light";
      // alert(ufoDataSet)
      break;
    case "triangle":
      var inputValue = "triangle";
      // alert(ufoDataSet)
      break;
    case "fireball":
      var inputValue = "fireball";
      // alert(ufoDataSet)
      break;
    case "formation":
      var inputValue = "formation";
      // alert(ufoDataSet)
      break;
    case "sphere":
      var inputValue = "sphere";
      // alert(ufoDataSet)
      break;
    case "disk":
      var inputValue = "disk";
      // alert(ufoDataSet)
      break;
    case "chevron":
      var inputValue = "chevron";
      // alert(ufoDataSet)
      break;
    case "flash":
      var inputValue = "flash";
      // alert(ufoDataSet)
      break;
    case "changing":
      var inputValue = "changing";
      // alert(ufoDataSet)
      break;
    case "oval":
      var inputValue = "oval";
      // alert(ufoDataSet)
      break;
    case "cigar":
      var inputValue = "cigar";
      // alert(ufoDataSet)
      break;
    case "teardrop":
      var inputValue = "teardrop";
      // alert(ufoDataSet)
      break;
    case "other":
      var inputValue = "other";
      // alert(ufoDataSet)
      break;
    case "unknown":
      var inputValue = "unknown";
      // alert(ufoDataSet)
      break;
    default:
      console.log("I'm sorry, I can't find that!");
      break;
    console.log(inputValue)
    }

  handleSubmitShape(inputValue);
}

// 2e-1. FORM FILTER by Country
// Submit Dropdown handler through the function for Shapes.  Once the shape is selected, the filter 
// will rebuld the table in the updateUfoData 
function getUfoCountryData(ufoDataSet) {
  // Initialize empty arrays to contain the new selected criteria
  var inputValue = [];
  // Fill the array as a function of the selected dataset
  switch (ufoDataSet) {
    case "us":
      inputValue = "us";
      break;
    case "ca":
      inputValue = "ca";
      // alert(ufoDataSet)
      break;
    default:
      console.log("I'm sorry, I can't find that!");
      break;
    console.log(inputValue)
    }

  handleSubmitCountry(inputValue);
} 

