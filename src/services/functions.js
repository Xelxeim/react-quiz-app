class functions {
  shuffle = (array) => {  //may be replaced with a better algorithm
    array.sort(() => Math.round(Math.random() * 100) - 50);
    return array;
  }

  dropCheckboxes = (className) => {
    const checkboxes = document.getElementsByClassName(className);
    for (let item of checkboxes) {
      item.checked = false;
    }
  }
}

export default new functions();