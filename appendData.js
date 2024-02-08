

function appendData(form, dataArray) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const newObj = {};
        formData.forEach((value, key) => {
            newObj[key] = value;
        });
        dataArray.push(newObj);

        // Display the updated table
        const table = createTableView(dataArray);
        document.body.appendChild(table);
    });
}
