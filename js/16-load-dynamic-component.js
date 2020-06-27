Vue.component('load-dynamic-component', {
    data() {
        return {
            components: ['cmp1', 'cmp2', 'cmp3'],
            currentComponent: 'cmp1'
        };
    },
    methods: {
        changeComponent(cmp) {
            this.currentComponent = cmp;
        }
    },
    template: `
    <div>
        <h2>Componentes dinámicos</h2>
        <button v-for="cpm in components" @click="changeComponent(cpm)">
            Selecciona {{cpm}}
        </button>
        <component v-bind:is="currentComponent"></component>
    </div>
    `
});