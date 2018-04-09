const app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        userID: '',
        show: 'login',
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
            console.log('successfully logged in');
            app.show = 'landing'
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
      },

      logOut: function () {
        // Get rid of session
        app.show = 'login';
      },
    }
});




