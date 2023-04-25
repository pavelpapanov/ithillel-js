import {getFormApiRequest, getFormApiData} from "./helpers.js";

// const formApi = getFormApiRequest(formAction, '.js--form-input');

const form = document.querySelector('.js--form');
const formURL = new FormData(form).get('url');
console.log(formURL);

function formSubmit(form) {
  let _form = document.querySelector(form);
  let _loader = document.querySelector('.js--loader');

  _form.addEventListener('submit', function (e) {
    e.preventDefault();
    _loader.classList.remove('d-none');
    const formURL = new FormData(_form).get('url');
    console.log(getFormApiRequest(form, formURL));
    // getFormApiData(`${_form.action}${formURL}`);
  });
}

formSubmit('.js--form');