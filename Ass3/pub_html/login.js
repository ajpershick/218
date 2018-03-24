Vue.use(VeeValidate); // good to go.
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
        activeCheckIn: false
    },
    methods: {
        logIn: function(){
            axios.post('/login', {
                username: this.username,
                password: this.password,
            })
                .then(function (response) {
                    console.log('success');
                    checkForm();
                    app.show = 'landing'
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        Checking: function(){
            axios.post('/checking', {
                checkIn_ID: this.checkIn
            })
                .then(function (response) {
                    console.log('Check-in is active now');
                    app.activeCheckin = true;
                    app.show = 'checking';
                    alert('Check-ins are now active')
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        stopChecking: function(){
            console.log('Check-in is active now');
            app.activeCheckIn = false;
            app.show = 'checked-in';
            alert('Check-ins are now disabled');
        },

        goToLogIn: function(){
            app.show = 'login';
        },

        CheckIn: function(){
            axios.post('/checkIns', {
                checkIn_ID: this.checkIn
            })
            .then(function (response) {
                if (app.activeCheckIn){
                    app.show = 'thanks';
                    alert('Check-in confirmed!')
                }
                else{
                    alert('Check-ins are not active right now. Try again later.')
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        },

        goToCheckIn: function(){
            app.show = 'check-in';
        },

        goToHistory: function(){
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
