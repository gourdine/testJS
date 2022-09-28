document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','data.txt',true);
  //console.log('READYSTATE', xhr.readyState);

  xhr.onprogress = function name(params) {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200){
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function name(params) {
    console.log('Request errorr...');
  }

  xhr.send();

  // HTTP Statuses
  // 200 :  OK
  // 403 :  Forbidden
  // 404 : Not Found
}

/*  readyState values
*   0: request not initialized
*   1: server connection established
*   2: request received
*   3: processing request
*   4: request finished and reponse is ready
*/