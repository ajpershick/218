boxes = document.getElementById('table1').getElementsByTagName('td');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        this.style.backgroundColor = "grey";
    });
}



