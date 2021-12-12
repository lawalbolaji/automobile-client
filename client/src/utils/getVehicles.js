// send request to api end point and retrive list of makes
export default async function vehiclesAPI(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
    });
    return response.json();
}