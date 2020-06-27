Vue.component('methods', {
    data() {
        return {
            name: 'Jesús',
            lastName: 'Martínez'
        };
    },
    computed: {
        fullName() {
            return `${this.name} ${this.lastName}`;
        }
    },
    methods: {
        hello() {
            alert(`Hola mi nombre es ${this.fullName}`);
        }
    },
    template: `
    <div>
        <h2>Ejecutar métodos con VueJs2</h2>
        <p @click="hello" style="cursor: pointer">Presiona este párrafo</p>
    </div>
    `
});