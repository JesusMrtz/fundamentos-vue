Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0
        };
    },
    computed: {
        amountFormatted: {
            get() {
                return `${this.amount}`;
            },
            set(newValue) {
                this.amount = newValue;
            }
        }
    },
    template: `
    <div>
        <h2>Computed properties get && set</h2>
        <input type="number" min="0" v-model="amount">
        <p>{{amountFormatted | currencyFilter('$')}}</p>
    </div>
    `
});