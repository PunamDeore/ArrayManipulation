

// Sample data array
let dataArray = [
    { name: "Punam Deore", email: "punamdeore97@gmail.com", mobile: "8483018741" },
    { name: "abc", email: "abc@gmail.com", mobile: "9000000078" }
];

// Initialize function to create table view
function initializeTableView() {
    const table = createTableView(dataArray);
    document.getElementById('tableContainer').appendChild(table);
}

// Initialize function to append data from form
function initializeAppendData() {
    const form = document.getElementById('dataForm');
    appendData(form, dataArray);
}

// Initialize function to remove last element
function initializeRemoveLastElement() {
    const button = document.getElementById('removeLast');
    button.addEventListener('click', function() {
        dataArray = removeLastElement(dataArray);
        updateTableView();
    });
}

// Initialize function to remove element at a given index
function initializeRemoveElementAtIndex() {
    const removeIndexForm = document.getElementById('removeIndexForm');
    removeIndexForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const index = parseInt(document.getElementById('removeIndex').value);
        dataArray = removeElementAtIndex(dataArray, index);
        updateTableView();
    });
}

// Initialize function to add element to top
function initializeAddElementToTop() {
    const addTopForm = document.getElementById('addTopForm');
    addElementToTop(addTopForm, dataArray);
}

// Initialize function to add element at a given index
function initializeAddElementAtIndex() {
    const addIndexForm = document.getElementById('addIndexForm');
    addIndexForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const index = parseInt(document.getElementById('addIndex').value);
        const addAtIndexForm = document.getElementById('addAtIndexForm');
        addElementAtIndex(addAtIndexForm, dataArray, index);
    });
}

// Initialize function to parse CSV string
function initializeParseCSVString() {
    const parseCSVForm = document.getElementById('parseCSVForm');
    parseCSVForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const csvString = document.getElementById('csvString').value;
        const parsedData = parseCSVString(csvString);
        dataArray = dataArray.concat(parsedData);
        updateTableView();
    });
}

// Function to update table view
function updateTableView() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const table = createTableView(dataArray);
    tableContainer.appendChild(table);
}

// Initialize all functions
function initialize() {
    initializeTableView();
    initializeAppendData();
    initializeRemoveLastElement();
    initializeRemoveElementAtIndex();
    initializeAddElementToTop();
    initializeAddElementAtIndex();
    initializeParseCSVString();
}

// Call the initialize function when the page loads
window.addEventListener('load', initialize);
