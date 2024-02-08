

function addElementAtIndex(form, dataArray, index) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const newObj = {};
        formData.forEach((value, key) => {
            newObj[key] = value;
        });
        dataArray.splice(index, 0, newObj);

        // Display the updated table
        const table = createTableView(dataArray);
        document.body.appendChild(table);
    });
}
