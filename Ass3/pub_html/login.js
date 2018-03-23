const login = new Vue({
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
    username: this.username,
    password: this.password,
  });
}



