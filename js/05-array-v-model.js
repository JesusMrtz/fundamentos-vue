Vue.component('array-v-model', {
    data() {
        return {
            frameworks: []
        };
    },
    template: `
    <div>
        <h2>Vmodel con arreglos</h2>
        <input id="vuejs" type="checkbox" value="VueJs" v-model="frameworks">
        <label for="vuejs">VueJs</label>
        <input id="angular" type="checkbox" value="Angular" v-model="frameworks">
        <label for="angular">Angular</label>
        <input id="react" type="checkbox" value="React" v-model="frameworks">
        <label for="react">React</label>
        <p>Losframeworks escogidos son: {{frameworks}}</p>
    </div>
    `
});