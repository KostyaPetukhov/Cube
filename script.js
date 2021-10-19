"use strict";

const table = document.getElementById('cube');
const deleteColsButton = document.getElementById('deleteColsButton');
const deleteRowsButton = document.getElementById('deleteRowsButton');
let matrix = {rows: 4, columns: 4};
let currentIndex = {row: 0, column: 0};
let rowIndex = 0;
let cellIndex = 0;

const drawTable = () => {
  for (let i = 0; i < matrix.rows; i++){
    const tr = document.createElement('tr');
      for (let j = 0; j < matrix.columns; j++){
        const td = document.createElement('td');
        tr.appendChild(td);
      }
    table.appendChild(tr);
  }
};

drawTable();

table.onmouseover = function getCurrentIndex(e) {
  let rowIndex = e.target.parentElement.rowIndex;
  let cellIndex = e.target.cellIndex;
  
    if (rowIndex != undefined) {
      currentIndex.row = rowIndex;
      currentIndex.column = cellIndex;
      deleteColsButton.style.left = `${cellIndex*37}px`;
      deleteRowsButton.style.top = `${rowIndex*37}px`;
    }
};

const addRow = () => {
  const tr = document.createElement('tr');

    for (let i = 0; i < matrix.columns; i++){
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  table.appendChild(tr);
  matrix.rows++;
  console.log(matrix);
};

const addColumn = () => {
  const rows = table.querySelectorAll('tr');

  for (let i = 0; i < matrix.rows; i++) {
    const td = document.createElement('td');
    rows[i].appendChild(td);
  }
  matrix.columns++;
  console.log(matrix);
};

const deleteRow = () => {
  let currentRow = currentIndex.row;
 
    if(matrix.rows > 1)
    {
      table.removeChild(document.querySelectorAll('tr')[currentRow]);
      matrix.rows--;
      console.log(matrix);
    }
    if (matrix.rows == currentIndex.row) {
      deleteRowsButton.style.top = `${(currentIndex.row-1)*37}px`;
    }
};

const deleteColumn = () => {
  let currentColumn = currentIndex.column;
  const rows = table.querySelectorAll('tr');
  
    if (matrix.columns > 1) {
      for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].getElementsByTagName('td')[currentColumn]);
      }
      matrix.columns--;
      console.log(matrix);
    }
    if (matrix.columns == currentIndex.column) {
      deleteColsButton.style.left = `${(currentIndex.column-1)*37}px`;
    }
    
};

const showDeleteButton = () => {
  if(matrix.columns > 1) {
  deleteColsButton.style.visibility = "visible";
  }
  if (matrix.rows > 1 ) {
  deleteRowsButton.style.visibility = "visible";
  }
};

const hideDeleteButton = () => {
  deleteColsButton.style.visibility = "hidden";
  deleteRowsButton.style.visibility = "hidden";
};


