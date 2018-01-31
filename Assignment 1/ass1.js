
boxes = document.getElementsByTagName('td');

for (var i = 0; i < boxes.length; i++)
{
    console.log('hi');
    boxes[i].addEventListener("click", function()
    {
        this.style.backgroundColor = "grey";
    });
}

