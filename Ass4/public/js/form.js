const app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: '',
      userID: '',
      show: 'game',
      currentMove: 'O',
      currentUser: [],
      currentPlayer: 'X',

      tile000: '',
      tile001: '',
      tile002: '',

      tile010: '',
      tile011: '',
      tile012: '',

      tile020: '',
      tile021: '',
      tile022: '',

      tile100: '',
      tile101: '',
      tile102: '',

      tile110: '',
      tile111: '',
      tile112: '',

      tile120: '',
      tile121: '',
      tile122: '',

      tile200: '',
      tile201: '',
      tile202: '',

      tile210: '',
      tile211: '',
      tile212: '',

      tile220: '',
      tile221: '',
      tile222: '',
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
        let validated = 0;
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

      makeMove: function (tile) {
        app.tile = 'X'
      }

    }
});

function validateUser() {
  return axios.post('/validateUser', {
    username: app.username,
    password: app.password,
  })
}







