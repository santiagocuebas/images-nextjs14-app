import axios from "../axios";

export async function handleForm(form: HTMLFormElement) {
  return axios({
    method: form.method,
    url: form.action.replace(location.origin, ''),
    data: form
  }).then(res => res.data)
    .catch(err => {
      return err.response?.data ??
        { log: 'An error occurred while trying to connect to the API' };
    });
}
