const app = new Vue({
  el: '#app',
  data: {
    username: '',
    password: '',
    checkin: '',
    string: '',
    name: '',
    id: '',
    show: 'login',
  }
});

function logIn(){
  axios.post('/login', {
    username: app.username,
    password: app.password,
    })
    .then(function (response) {
      app.show = 'landing'
    })
    .catch(function (error) {
      console.log(error)
    })
}



