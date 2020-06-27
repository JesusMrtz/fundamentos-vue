Vue.filter('currencyFilter', (value, currency) => {
    return `${currency}${value}`;
});