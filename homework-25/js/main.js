function Swapi(params) {
  const { form, elPre, elController, elId, elLoader } = params;
  const elForm = document.querySelector(`.${form}`);
  this.formSubmit = async (e) => {
    e.preventDefault();
    elLoader.classList.remove('d-none');
    const { getData } = await import('./helpers.js');
    const formURL = new FormData(elForm).get('url');
    const regEx = /\//;
    const hasSlash = regEx.test(formURL);
    if (hasSlash) {
      const normalizeURL = formURL.trim();
      const response = await getData(elForm.action, normalizeURL);
      this.showResponse(response, normalizeURL);
    } else {
      alert('введіть "/"');
      elLoader.classList.add('d-none');
    }
  }
  this.showResponse = (response, url) => {
    if (response?.status === 'success') {
      const getURLInfo = url.split('/');
      elController.classList.remove('d-none');
      elController.innerHTML = getURLInfo[0];
      const id = getURLInfo[1];
      if (id) {
        elId.classList.remove('d-none');
        elId.innerHTML = id;
      } else {
        elId.classList.add('d-none');
      }
      elPre.innerHTML = JSON.stringify(response.data, null, 2);
    } else {
      elController.classList.add('d-none');
      elId.classList.add('d-none');
      elPre.innerHTML = JSON.stringify(response, null, 2);
    }
    ;
    elLoader.classList.add('d-none');
  }
  this.init = function () {
    elForm.addEventListener('submit', this.formSubmit)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const swapi = new Swapi({
    form: 'js--form',
    elPre: document.querySelector('.js--pre'),
    elController: document.querySelector('.js--controller'),
    elId: document.querySelector('.js--id'),
    elLoader: document.querySelector('.js--loader')
  })
  swapi.init();
})
