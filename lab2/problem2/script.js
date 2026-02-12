// This array will hold all student objects
let students = [];

function addStudent() {
    // 1. Get values from the input fields
    const name = document.getElementById('name').value;
    // We use parseFloat to convert the text "95" to the number 95
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);

    // Simple validation: Check if fields are empty
    if (name === "" || isNaN(math) || isNaN(science) || isNaN(english)) {
        alert("Please fill in all fields correctly.");
        return; // Stop the function here
    }

    // 2. Calculate Total and Percentage
    const total = math + science + english;
    // (Total / Max Marks) * 100. Max marks is 300 (3 subjects * 100)
    const percentage = (total / 300) * 100;

    // 3. Determine Grade using if-else
    let grade = "";
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 4. Create a student object
    const student = {
        name: name,
        total: total,
        percentage: percentage.toFixed(2), // toFixed(2) keeps only 2 decimal places (e.g., 85.50)
        grade: grade
    };

    // Add to our list
    students.push(student);

    // 5. Add a new row to the table
    addStudentToTable(student);

    // Clear inputs for next student
    document.getElementById('name').value = '';
    document.getElementById('math').value = '';
    document.getElementById('science').value = '';
    document.getElementById('english').value = '';
}

function addStudentToTable(student) {
    const tableBody = document.querySelector('#resultTable tbody');

    // Create a new table row <tr>
    const row = document.createElement('tr');

    // Add class for styling if passed or failed
    if (student.grade === "F") {
        row.classList.add('fail'); // Red color
    } else {
        row.classList.add('pass'); // Green color
    }

    // Insert the cells with student data
    // innerHTML is easier for beginners than creating many 'td' elements manually
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.total}</td>
        <td>${student.percentage}%</td>
        <td>${student.grade}</td>
    `;

    // Add the row to the table body
    tableBody.appendChild(row);
}
