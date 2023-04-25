export function getApiByActionAttribute(form) {
  let formAPI = document.querySelector(form);
  return formAPI.action;
}

export function getFormApiRequest(form, input) {
  let _api = form.action;
  let _input = document.querySelector(input);

  const req = () => {
    _input.addEventListener('input', function () {
      `${_api}${_input.value}`;
    });
  };
}

export async function getFormApiData(request) {
  let response = await fetch(request, {
    method: 'GET'
  });
  try {
    return {
      status: 'success',
      data: await response.json()
    }
  } catch (event) {
    console.error(event);
    return {
      status: 'error',
      data: null
    }
  }
}