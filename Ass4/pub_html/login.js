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
          a.then(function (response) {
            console.log('success');
            checkForm();
            if (app.activeCheckIn) {
              app.show = 'eventStart'
            }
            else {
              app.show = 'landing'
            }
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




