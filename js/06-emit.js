Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota'
        };
    },
    template: `
    <div>
        <h2>Emitir eventos con VueJs2</h2>
        <p @click="$emit('show-car-brand', carBrand)"  style="cursor: pointer">Pulsa aquí para emitir un evento a la instancia</p>
    </div>
    `
});