Vue.component('v-for', {
    data() {
        return {
            frameworks: [{
                    id: 1,
                    name: 'Angular'
                },
                {
                    id: 2,
                    name: 'VueJs'
                },
                {
                    id: 3,
                    name: 'ReactJs'
                },
                {
                    id: 4,
                    name: 'Svelte'
                }
            ]

        };
    },
    template: `
    <div>
        <h2>Recorrer arreglos con v-for</h2>
        <ol v-if="frameworks">
            <li v-for="framework in frameworks">{{framework.name}}</li>
        </ol>
    </div>
    `
});