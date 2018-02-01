table1 = document.getElementById('table1').getElementsByTagName('td');

for (var i = 0; i < table1.length; i++) {
    table1[i].addEventListener("click", function() {
        this.classList.toggle("grey");
    });
}


/* Dynamic tables

var dimensions = 12;

function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var table = document.createElement("table");
    var tableBody = document.createElement("tableBody");

    // creating all cells
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode('I fapped');
    cell.appendChild(cellText);
    row.appendChild(cell);

    for (var i = 1; i < dimensions; i++) {
        // creates a table row
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellText = document.createTextNode('I fapped');
        cell.appendChild(cellText);
        row.appendChild(cell);

        for (var j = 1; j < dimensions; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            cell = document.createElement("td");
            cellText = document.createTextNode("cell in row "+i+", column "+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    table.appendChild(tableBody);
    // appends <table> into <body>
    body.appendChild(table);
    // sets the border attribute of tbl to 2;
    table.setAttribute("border", "2");
}

table3 = generate_table();
*/

