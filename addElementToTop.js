

function addElementToTop(form, dataArray) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const newObj = {};
        formData.forEach((value, key) => {
            newObj[key] = value;
        });
        dataArray.unshift(newObj);

        // Display the updated table
        const table = createTableView(dataArray);
        document.body.appendChild(table);
    });
}
