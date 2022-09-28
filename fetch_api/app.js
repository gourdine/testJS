document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJSON);

document.getElementById('button3').addEventListener('click',getExternal);






//get local text file
function getText() {
  fetch('test.txt')
  .then(function(res) {
    return (res.text());
  })
  .then(function (data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function (err) {
    console.log(err);
  });
}

//get local json data
function getJSON() {
  fetch('posts.json')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let output = ''
    data.forEach( function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function (err) {
    console.log(err);
  });

}

//get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let output = ''
    data.forEach( function(user) {
      output += 
     `<li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function (err) {
    console.log(err);
  });

}



/*

fetch('url)
  .then(res => res.json)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.error);
    }
    return res;
  })
  .catch(err => console.log(err));

//create sep func err handeling
function handleErrors(res){
  if (!res.ok) throw new Error(res.error);
  return res;
}

fetch('url')
  .then (res => res.json)
  .then (handleErrors)
  .then (res => console.log(res.data))
  .catch(err => console.log(err));

*/