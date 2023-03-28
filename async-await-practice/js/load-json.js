// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

loadJson('https://javascript.info/no-such-user.json').catch(alert); // Error: 404

async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (Response.status == 200) {
      let user = await response.json();
      return user;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.error(err);
  }
}

loadJson('https://javascript.info/no-such-user.json');
