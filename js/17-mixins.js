const myMixin = {
    mounted() {
        console.log('MIXIN init!!');
        console.log(this.mixinData);
    },
    data() {
        return {
            mixinData: 'Mixin data'
        };
    },
    methods: {
        test() {
            console.log('Test from mixin');
        }
    }
};

Vue.component('mixins', {
    mixins: [myMixin],
    mounted() {
        console.log('Moutend from component with mixin');
    },
    data() {
        return {
            mixinData: 'Mixin data desde el componente'
        };
    },
    template: `
    <div>
        <h2>Uso de mixins</h2>
        <p>{{mixinData}}</p>

    </div>
    `
});