Vue.component('v-model', {
    data() {
        return {
            framework: 'VueJs'
        };
    },
    template: `
    <div>
        <h2>Trabajando con Vmodel</h2>
        <input v-model="framework" v-focus>
        <p>El framework escogido es: {{framework}}</p>
    </div>
    `
});