Vue.component('computed-properties', {
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
    template: `
    <div>
        <h2>Computed properties</h2>
        <p>{{fullName}}</p>
    </div>
    `
});