Vue.directive('change-styles', (element, binding) => {
    element.style.backgroundColor = binding.value.backgroundColor;
    element.style.color = binding.value.color;
});