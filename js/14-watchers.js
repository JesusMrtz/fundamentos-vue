Vue.component('watchers', {
    data() {
        return {
            user: '',
            oldUser: ''
        };
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();

                const getUser = json.results[0];
                this.user = `${getUser.name.title} ${getUser.name.first} ${getUser.name.last}`;
            } catch (e) {
                console.log('Hay un error');
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
    <div>
        <h2>Watchers</h2>
        <button @click="randomUser">Obtener usuario</button>
        <p>Nuevo usuario: <span>{{user}}</span></p>
        <p>Antigüo usuario: <span>{{oldUser}}</span></p>
    </div>
    `
});