// const { json } = require("body-parser");

const compile = async () => {
    var code_inp = document.getElementById('textarea-input').value;
    const obj = {code: code_inp};
    const response = await fetch('http://127.0.0.1:8000/compile', {
      method: 'POST',
      body: JSON.stringify(obj), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    const myJson = await response.json();
    console.log(myJson)
    output(myJson)
  }

const output = async (res) => {
    var output_window = document.getElementById('textarea-output')
    console.log(res['out'])
    output_window.innerHTML += res['out'] += "\n"
}