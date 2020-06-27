Vue.component('parent-data', {
    template: `
    <div>
        <h2>Acceso a datos del componente padre hacia el componente hijo</h2>
        <p>{{$parent.appName}}</p>
    </div>
    `
});