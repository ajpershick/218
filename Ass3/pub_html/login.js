Vue.use(VeeValidate); // good to go.
getEventStatus();
const app = new Vue({
    el: '#app',
    data: {
        username: 'admin',
        password: '1234',
        checkIn: '',
        string: '',
        name: '',
        id: '',
        show: 'login',
        activeCheckIn: false,
        attendees: '',
    },
    methods: {
      logIn: function () {
        if (this.username === 'admin' && this.password === '1234') {
          axios.post('/login', {
            username: this.username,
            password: this.password,
          })
            .then(function (response) {
              console.log('success');
              checkForm();
              if (app.activeCheckIn){
                  app.show = 'eventStart'
              }
              else{
                app.show = 'landing'
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          alert('Your username or password is incorrect.')
        }
      },

      eventStart: function () {
        axios.post('/eventStart', {
          checkIn_ID: this.checkIn
        })
          .then(function (response) {
            console.log('Check-in is active now');
            app.eventID++;
            app.activeCheckIn = true;
            app.show = 'eventStart';
            alert('Check-ins are now active');
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      stopEvent: function () {
        renderAttendees();
        axios.post('/stopEvent', {
        })
          .then(function (response) {
            app.activeCheckIn = false;
            app.show = 'checked-in';
            alert('Check-ins are now disabled');
          })
          .catch(function (error) {
            console.log(error);
          })
      },

      goToLogIn: function () {
        getEventStatus();
        app.show = 'login';
      },

      CheckIn: function () {
        if (this.string === this.checkIn) {
          axios.post('/checkIns', {
            string: this.string,
            name: this.name,
            ID: this.id,
          })
            .then(function (response) {
              if (app.activeCheckIn) {
                app.show = 'thanks';
                alert('Check-in confirmed!');
              }
              else {
                alert('Check-ins are not active right now. Try again later.');
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        }
        else {
          alert('Check-ins are not active right now. Try again later.');
        }
      },

      goToCheckIn: function () {
        this.activeCheckIn = getEventStatus();
        app.show = 'check-in';
      },

      goToHistory: function () {
        app.show = 'history';
      },
    }
});

function checkForm(){
    this.errors = [];
    if (!this.username) this.errors.push("username required.");
    if (!this.password) this.errors.push("password required.");
    if (this.errors !== '')
    {
        return 1;
    }
}

function getEventStatus(){
  axios.get('/eventStatus', {
  })
    .then(function (response) {
        app.activeCheckIn = response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

function renderAttendees () {
    console.log('test1');
  axios.get('/eventAttendees', {
  })
    .then(function (response) {
        console.log('test2');
      app.attendees = response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

