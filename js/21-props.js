Vue.component('props', {
    props: {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validator: age => {
                if (age > 17) {
                    console.log('Eres mayor de edad');
                    return true;
                } else {
                    console.log('Eres menor de edad');
                    return false;
                }
            }
        }
    },
    template: `
    <div>
        <h2>Props con VueJs</h2>
        <p>{{name}} {{lastName}}, Edad: {{age}}</p>
    </div>
    `
})