Vue.component('message', {
    data() {
        return {
            message: 'Hola mundo desde el primer componente'
        };
    },
    template: `
    <div>
        <h2>{{message}}</h2>
    </div>
    `
});