Vue.component('children-data', {
    data() {
        return {
            componentName: 'Child data component'
        };
    },
    template: `
    <div>
        <h2>Acceso a datos del componente hijo hacia el componente padre</h2>
    </div>
    `
});