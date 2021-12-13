export default async function vehiclesAPI(url = '') {
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
    }).then(async data => {
      return {result: await data.json(), error: ''}
    })
    .catch(err => { 
      return {result: [], error: err}
    })

    return response;
}