class FormElement {
  constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }

  getValue() {
    return this.value;
  }
}

class TextElement extends FormElement {
  createInput() {
    const _input = document.createElement('input');
    _input.setAttribute('name', this.name);
    _input.setAttribute('type', this.type);
    _input.setAttribute('value', this.value);
    return _input;
  }

  initInput(form, inputClass, placeholder) {
    let _input = this.createInput(form);
    _input.setAttribute('class', inputClass);
    _input.setAttribute('placeholder', placeholder);
    form.appendChild(_input);
  }
}

class CheckboxElement extends FormElement {
  createCheckbox() {
    const _input = document.createElement('input');
    _input.setAttribute('name', this.name);
    _input.setAttribute('type', this.type);
    _input.setAttribute('id', this.name);
    return _input;
  }

  initCheckbox(form, inputClass, status, labelText, link = null) {
    let _inputGroup = document.createElement('div');
    let _input = this.createCheckbox(form);
    let _label = document.createElement('label');
    _input.setAttribute('class', inputClass);
    _label.setAttribute('for', this.name);
    _label.textContent = labelText;
    _inputGroup.appendChild(_input);
    _inputGroup.appendChild(_label);

    if (status === true) {
      _input.setAttribute('checked', status);
    }

    if (link) {
      let _link = document.createElement('a');
      _label.textContent = `${labelText} in `;
      _link.setAttribute('href', link);
      _link.setAttribute('target', '_blank');
      _link.textContent = 'Terms of service';
      _inputGroup.appendChild(_link);
    }

    form.appendChild(_inputGroup);
  }
}

class ButtonElement extends FormElement {
  createButton(type) {
    let _button = document.createElement('button');
    _button.setAttribute('type', type);
    _button.textContent = this.value;
    return _button;
  }

  initButton(form, type, buttonClass, buttonText = 'Register') {
    let _button = this.createButton(type);
    _button.setAttribute('class', buttonClass);
    _button.textContent = buttonText;
    form.appendChild(_button);
  }
}

const form = document.querySelector('.js--form');
const formInputName = new TextElement('name', 'text', '');
const formInputEmail = new TextElement('email', 'email', '');
const formInputPass = new TextElement('password', 'password', '');
const formInputRepeatPass = new TextElement('password', 'password', '');
const formCheckbox = new CheckboxElement('checkbox', 'checkbox', '');
const formButton = new ButtonElement('button', 'button', '');

formInputName.initInput(form, 'form__input js--name', 'Your Name');
formInputEmail.initInput(form, 'form__input', 'Your Email');
formInputPass.initInput(form, 'form__input', 'Password');
formInputRepeatPass.initInput(form, 'form__input', 'Repeat your password');
formCheckbox.initCheckbox(form, 'form__checkbox', false, 'I agree all statements', 'https://nodesource.com/legal/product-tos');
formButton.initButton(form, 'submit', 'button js--button');

let inputName = document.querySelector('.js--name');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(inputName.value);
});