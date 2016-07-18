function queryOMDB(query) {

  let term = query.replace(/\s/, '+');
  let url = 'http://omdbapi.com/?s='+term
  //this returns a promise
  return fetch(url).then( res => res.json())
}

export default queryOMDB;
