export function ajax(url, params, method, cb){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let request = new Request(url, {
           method: method, 
           mode: 'cors',
           body:JSON.stringify(params),
           headers:myHeaders
    });
    fetch(request)
       .then(response => response.json())
       .then(result => {})
};