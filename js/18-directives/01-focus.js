Vue.directive('focus', {
    inserted(element) {
        element.focus();
    }
});