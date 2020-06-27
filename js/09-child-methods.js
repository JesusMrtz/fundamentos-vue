Vue.component('child-methods', {
    data() {
        return {
            componentName: 'Child methods component'
        };
    },
    methods: {
        showComponentName() {
            console.log('Llamada al método del componente hijo showComponentName(): ', this.componentName);
        }
    },
    template: `
    <div>
        <h2>Acceso a métodos del componente hijo hacia el componente padre</h2>
    </div>
    `
});