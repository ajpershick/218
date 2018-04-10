const app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: '',
      userID: '',
      show: 'login',
      currentUser: [],
    },
    methods: {
      logIn: function () {
        // if (username is registered in DB)
        {
          axios.post('/login', {
            username: this.username,
            password: this.password,
          })
          .then(function (response) {
            if (response.data[0] !== undefined){
              if (response.data[0].username === app.username && response.data[0].password === app.password) {
                app.currentUser = response.data[0].username;
                app.show = 'landing'
              }
              else {
                alert('Username/Password combination not in the system')
              }
            }
            else {
              alert('Username/Password combination not in the system')
            }
          })
            .catch(function (error) {
              console.log(error)
          })
        }
      },

      goToRegister: function() {
        app.show = 'register';
      },

      register: function() {
        var validated = 0;
        validateUser().then(function (response) {
          if (response.data[0] !== undefined){
            if (response.data[0].username === app.username) {
              alert('Username already taken');
              validated = 1;
            }
            else {
              validated = 0;
            }
          }
        })
          .catch(function (error) {
            console.log(error)
          });

        if (validated !== 1){
          axios.post('/register', {
            username: this.username,
            password: this.password,
          })
            .then(function (response) {
              console.log('successfully registered');
              app.show = 'landing'
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },

      logOut: function () {
        // Get rid of session
        app.show = 'login';
      },

    }
});

function validateUser() {
  return axios.post('/validateUser', {
    username: app.username,
    password: app.password,
  })
}







