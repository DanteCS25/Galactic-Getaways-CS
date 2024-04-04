function showTextInput() {
    var inputField = document.getElementById('inputField');
    var textValue = document.getElementById('textValue');
    if (inputField.style.display !== 'none') {
      inputField.style.display = 'none';
      textValue.style.display = 'block';
    } else {
      inputField.style.display = 'block';
      textValue.style.display = 'none';
    }
  }
  