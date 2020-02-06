let timeout = 0;

/**
 * initialize auto sliding
 */
showSlide(0, null);

/**
 * used after manually clicking on prev/next
 * @param evt
 */
function changeSlide(evt) {
  const index = parseInt(evt.htmlFor) - 1;
  showSlide(index, index-1);
}

/**
 * auto-sliding
 * @param newIndex
 * @param oldIndex
 */
function showSlide(newIndex, oldIndex) {
  const sliders = document.querySelectorAll('.radio-btn');
  if (newIndex > sliders.length - 1) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = sliders.length - 1;
  }

  // hide element
  if (oldIndex > 0) {
    sliders[oldIndex].checked = false;
  }

  // show element
  sliders[newIndex].checked = true;

  clearTimeout(timeout);
  timeout = setTimeout(() => showSlide(newIndex + 1, newIndex), 3000);
}
