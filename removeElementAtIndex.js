// removeElementAtIndex.js

function removeElementAtIndex(dataArray, index) {
    if (index >= 0 && index < dataArray.length) {
        dataArray.splice(index, 1);
    }
    return dataArray;
}
