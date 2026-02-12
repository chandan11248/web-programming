function generateTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const container = document.getElementById('tableContainer');

    // Create a new table element
    const table = document.createElement('table');

    // Loop to create rows
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr'); // Table Row

        // Loop to create columns (cells) inside each row
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td'); // Table Data (Cell)
            td.innerText = "Row " + (i + 1) + ", Col " + (j + 1);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Clear previous table and add the new one
    container.innerHTML = '';
    container.appendChild(table);
}

function highlightEven() {
    // Get all rows in the table
    const rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) {
        // Highlight 2nd, 4th, 6th... rows (indices 1, 3, 5...)
        if (i % 2 !== 0) {
            rows[i].classList.toggle('even-row');
        }
    }
}

function addRow() {
    const table = document.querySelector('table');

    if (!table) {
        alert("Please generate a table first!");
        return;
    }

    // Insert a new row at the end
    const newRow = table.insertRow();

    // Check how many columns the first row has
    // If table has no rows, fallback to 3 columns (or user input)
    let colCount = 3;
    if (table.rows.length > 1) { // checking >1 because we just added one, so >0 is always true
        colCount = table.rows[0].cells.length;
    } else {
        // If we deleted all rows and added one back, use the input value
        colCount = document.getElementById('cols').value;
    }

    const rowIndex = table.rows.length; // Current row count

    for (let i = 0; i < colCount; i++) {
        const cell = newRow.insertCell();
        cell.innerText = "Row " + rowIndex + ", Col " + (i + 1);
    }
}

function deleteRow() {
    const table = document.querySelector('table');

    if (!table || table.rows.length === 0) {
        alert("No rows to delete!");
        return;
    }

    // Delete the last row
    table.deleteRow(table.rows.length - 1);
}
