Vue.component('v-if', {
    data() {
        return {
            age: 10
        };
    },
    template: `
    <div>
        <h2>Condicionales con v-if</h2>
        <input v-model="age">
        <p v-if="age > 79 ">Eres una persona de la cuarta edad</p>
        <p v-if="age > 39 ">Eres una persona de la tercera edad</p>
        <p v-if="age > 30 ">Es un adulto maduro</p>
        <p v-if="age > 17 ">Es un joven adulto</p>
        <p v-else>Es menor de edad</p>
    </div>
    `
});