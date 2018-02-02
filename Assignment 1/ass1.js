table1 = document.getElementById('table1');
table2 = document.getElementById('table2');
var table1Boxes = document.getElementById('table1').getElementsByTagName('td');
var table2Boxes = document.getElementById('table2').getElementsByTagName('td');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');
var cheat = document.getElementById('cheat');

//var counter = new Array(table1BoxesBoxes.length).fill(0);

for (var i = 0; i < table1Boxes.length; i++) {
    table1Boxes[i].addEventListener("click", function() {
        this.classList.toggle("grey");
    });
}

function showSolutionTable() {
    for (var j = 0; j < table1Boxes.length; j++) {
        console.log('j=', j, table1Boxes[j], table2Boxes[j]);
        if ((table1Boxes[j].classList.value === 'grey' && table2Boxes[j].classList.value !== 'grey') || table1Boxes[j].classList.value !== 'grey' && table2Boxes[j].classList.value === 'grey') {
            return alert('Try again.');
        }
    }
    alert('Nice job!');
    showTable();
    var congrats = document.createElement('P');
    var text = document.createTextNode("gg");
    congrats.appendChild(text);
    document.body.appendChild(congrats);
}

submit.addEventListener("click", function() {
    showSolutionTable();
});

function resetTable() {
    for (var k = 0; k < table1Boxes.length; k++) {
        table1Boxes[k].classList.value = '';
    }
}

reset.addEventListener("click", function() {
    resetTable();
});

function showTable() {
    if ((table2.style.display === 'none' || table2.style.display === '') ){
        table2.style.display = 'table';
    }
    else {
        table2.style.display = 'none';
    }
}

cheat.addEventListener("click", function() {
    showTable();
});




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

