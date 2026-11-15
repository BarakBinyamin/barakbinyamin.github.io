/*https://stackoverflow.com/questions/36170425/detect-click-outside-element*/
export default function directive(app) {
    // you can name the directive whatever you want. -> click-outside
    app.directive('click-outside', {
      beforeMount(el, binding) {
        el.clickOutsideEvent = (evt) => {
          evt.stopPropagation();
          if (!(el === evt.target || el.contains(evt.target))) {
            binding.value(evt, el);
          }
        };
        window.requestAnimationFrame(() => {
          document.addEventListener("click", el.clickOutsideEvent);
        });
      },
      unmounted(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
    })
}