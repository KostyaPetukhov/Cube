
let table = document.getElementById('cube');

function createCell(row) {
  row.insertCell(-1);
}

function delCell(row) {
  row.deleteCell(-1);
}

function addRow() {
  let newRow = table.insertRow(-1);
  let colsLength = table.rows[0].cells.length;
  for (let i = 0; i < colsLength; i++) {
    createCell(newRow);
  }
}

function addCol() {
  let rows = table.rows;
  for (let i = 0, l = rows.length; i < l; i++) {
    createCell(rows[i]);
  }
}

function delRow() {
    table.deleteRow(-1);
}

function delCol() {
  let rows = table.rows;
  for (let i = 0, l = rows.length; i < l; i++) {
    delCell(rows[i]);
  }
}

function showDeleteButton() {
  let rows = table.rows.length;
    if (rows <= 1) {
    document.getElementsByClassName('deleteButton')[0].style= "visibility: visibility";
    document.getElementsByClassName('deleteButton')[1].style= "visibility: hidden";
    } else {
      document.getElementsByClassName('deleteButton')[0].style= "visibility: visibility";
      document.getElementsByClassName('deleteButton')[1].style= "visibility: visibility";
    }
  let cols = table.rows[0].cells.length;
  if (cols <= 1) {
  document.getElementsByClassName('deleteButton')[0].style= "visibility: hidden";
  document.getElementsByClassName('deleteButton')[1].style= "visibility: visibility";
  } else {
    document.getElementsByClassName('deleteButton')[0].style= "visibility: visibility";
    document.getElementsByClassName('deleteButton')[1].style= "visibility: visibility";
  }
}

function hideDeleteButton() {
  document.getElementsByClassName('deleteButton')[0].style= "visibility: hidden";
  document.getElementsByClassName('deleteButton')[1].style= "visibility: hidden";
}

