let requestURL = 'https://raw.githubusercontent.com/REtangler/landing-page-json/master/json_data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  const resortText = request.response;
  const resort = JSON.parse(resortText);
  show(resort);
}

function show(jsonObj) {
  const resort1 = jsonObj['data'];
  var row_data = '';
  for (let i = 0; i < resort1.length; i++) {
    var row_data = row_data + '<tr>' +
      ' <td>' + resort1[i].Name + '</td>' +
      ' <td>' + resort1[i].Price_per_day + '</td>' +
      ' <td>' + resort1[i].Address + '</td>' +
      ' <td>' + resort1[i].Web_Site + '</td>' +
      '</tr>';
  }
  let table_body_element = document.createElement('tbody');
  table_body_element.innerHTML = row_data;
  document.getElementById('myTable1').appendChild(table_body_element);
}
