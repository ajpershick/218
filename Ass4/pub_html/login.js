getEventStatus();
const app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        checkIn: '',
        string: '',
        name: '',
        userID: '',
        show: 'login',
        activeCheckIn: false,
        attendees: [],
        history: [],
    },
    methods: {
      logIn: function () {
        // if (this.username === 'admin' && this.password === '1234')
        {
          axios.post('/login', {
            username: this.username,
            password: this.password,
          })
            a.then(function (response) {
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
            userID: this.userID,
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
          renderHistory();
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
  axios.get('/eventAttendees', {
  })
    .then(function (response) {
      app.attendees = response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

function renderHistory () {
  axios.post('/history', {
      checkIn_ID: app.checkIn
  })
    .then(function (response) {
      app.history = response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

