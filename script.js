document.getElementById("add-semester").addEventListener("click", function () {
    const resultTable = document.getElementById("result-table").getElementsByTagName("tbody")[0];
    const semesters = resultTable.rows.length + 1;

    const newRow = resultTable.insertRow();
    newRow.innerHTML = `
        <td>${semesters}</td>
        <td contenteditable="true" class="sgpa-input" onblur="updateCGPA()"></td>
        <td contenteditable="true" class="credits-input" onblur="updateCGPA()"></td>
        <td class="cgpa-output">0.00</td>
    `;
});

function updateCGPA() {
    const rows = document.getElementById("result-table").getElementsByTagName("tbody")[0].rows;

    let totalSGPA = 0;
    let totalCredits = 0;

    for (let row of rows) {
        const sgpa = parseFloat(row.cells[1].innerText) || 0;
        const credits = parseFloat(row.cells[2].innerText) || 0;

        totalSGPA += sgpa * credits;
        totalCredits += credits;

        // Update CGPA for the current row
        const cgpa = totalCredits > 0 ? (totalSGPA / totalCredits).toFixed(2) : 0.00;
        row.cells[3].innerText = cgpa;
    }
}
