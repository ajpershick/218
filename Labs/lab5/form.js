$.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: '/endpoint'
});

$(document).ready(function(){
    console.log("ready function");
    $.ajax({
        method: 'get',
        url: '/users-api',
        data: '',
        success: printUsers
    });
});


function printUsers(data){
    $('body>ul').empty();
    $.each(data, function(){
        $('<li>').html(this.fname+" "+this.lname).appendTo('body>ul');
    });
}
