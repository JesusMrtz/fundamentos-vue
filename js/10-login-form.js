Vue.component('login-form', {
    data() {
        return {
            logged: false,
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            this.logged = this.user.email === 'jesusmrtztorres@gmail.com' && this.user.password === '1234';
        }
    },
    template: `
    <div>
        <h2>Formulario de login</h2>
        <form @submit.prevent="login">
            <input type="email" name="email" v-model="user.email">
            <input type="password" name="password" v-model="user.password">
            <input type="submit">
        </form>
        <p v-show="logged" style="background-color: green; color: white;">Has iniciado sesión: {{user}}</p>
    </div>
    `
});