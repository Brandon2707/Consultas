const API_URL = 'http://localhost:3001/usuarios';

export async function getData(endpoint) {
  const response = await fetch(` ${API_URL}`);
  return response.json();
}

export async function postData(endpoint, data) {
  const response = await fetch(` ${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function putData(endpoint, id, data) {
  const response = await fetch(`${API_URL}/${endpoint}/${id} `, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function deleteData(endpoint, id) {
  const response = await fetch(`${API_URL}/${endpoint}/${id} `, {
    method: 'DELETE'
  });
  return response.json();
}