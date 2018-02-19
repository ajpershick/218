var form = document.getElementById('form1');
var email = document.getElementById('email1').cloneNode(true);
var addEmailButton = document.getElementById('addEmailButton');
var addUserButton = document.getElementById('addUserButton');
var submit = document.getElementById('submit');
var numUsers = 1;
var forms = document.getElementById('forms');
var count = 2;
//var emailDiv = document.getElementById('emails1');
var blankForm = form.cloneNode(true);

function addEmail() {

    if (count > 0) {
        var userEmail = this.parentElement.email;
        var emailDiv = this.parentElement.getElementsByTagName('div')[0];
        var newEmail = email.cloneNode(true);
        emailDiv.appendChild(newEmail);
        console.log('created new email');
        count -=1;
    }
    else {
        alert('3 emails is enough...')
    }
}

function addUser() {
    numUsers +=1;
    var br = document.createElement('br');
    var newUser = blankForm.cloneNode(true);
    newUser.id = 'form' + numUsers;
    newUser.getElementsByTagName('div')[0].id = 'emails' + numUsers;
    newUser.getElementsByTagName('input')[2].id = 'email' + numUsers;
    var newUserButton = newUser.getElementsByTagName('button')[0];
    newUser.getElementsByTagName('button')[0].id = 'button' + numUsers;
    newUserButton.addEventListener('click', addEmail);
    forms.appendChild(newUser);
    count += 2;

}

addEmailButton.addEventListener('click', addEmail);
addUserButton.addEventListener('click', addUser);

// submit.addEventListener('click', function() {
//     alert('Thanks, your information is saved!');
// });


