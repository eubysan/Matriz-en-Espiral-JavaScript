let rows;
let cols;

//  validar que solo sea numeros
do {
  rows = parseInt(prompt('Ingrese un numero de filas:'));
  cols = parseInt(prompt('Ingrese un numero de columnas:'));
  // Integer - NaN
} while (isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0);

let ini = 0; // la matriz inicia en 0
let limit_rows = rows - 1; // Se resta 1 ya que la matriz inicia en 0
let limit_cols = cols - 1; // Se resta 1 ya que la matriz inicia en 0
let nums = 1; // inicia en 1 para luego incrementar su valor
let tope = rows * cols; // el tope es la cantidad de la fila x la columna

// declarando la matriz
let matriz = new Array();

// creando la matriz
for (let x = 0; x < rows; x++) {
  matriz[x] = new Array(rows);
}

// incio recrorrido de la matriz --------------------------------------------------------------
while (nums <= tope) {
  // este condicional es para que los numeros solo sean <= al topee establecido
  if (nums <= tope) {
    // recorrido hacia la derecha
    for (let i = ini; i <= limit_cols; i++) {
      matriz[ini][i] = nums;
      nums++;
    }
  }

  if (nums <= tope) {
    // recorrido hacia abajo
    for (let j = ini + 1; j <= limit_rows; j++) {
      matriz[j][limit_cols] = nums;
      nums++;
    }
  }

  if (nums <= tope) {
    // recorrido hacia la izquierda
    for (let k = limit_cols - 1; k >= ini; k--) {
      matriz[limit_rows][k] = nums;
      nums++;
    }
  }

  if (nums <= tope) {
    // recorrido hacia arriba
    for (let l = limit_rows - 1; l >= ini + 1; l--) {
      matriz[l][ini] = nums;
      nums++;
    }
  }
  ini = ini + 1;
  limit_cols = limit_cols - 1;
  limit_rows = limit_rows - 1;
}
// final del recrorrido de la matriz --------------------------------------------------------------

const titulo = document.querySelector('.titulo2');
titulo.textContent = `Total de la matriz: ${rows} * ${cols} = ${tope}`;

const div = document.querySelector('.container');
const table = document.querySelector('.espiral tbody');

// creando la matriz y resultado de los valores obtenidos
for (let x = 0; x < rows; x++) {
  const row = document.createElement('tr');
  for (let y = 0; y < cols; y++) {
    const col = document.createElement('td');
    col.id = matriz[x][y];

    // imprime los valores
    col.textContent = matriz[x][y];

    // recorrido hacia la derecha
    if (col.id >= 1 && col.id <= cols) {
      col.style.background = '#3da5d9';
    }

    down = cols + 1;
    downlimit = cols - 1 + rows;

    // recorrido hacia abajo
    if (col.id >= down && col.id <= downlimit) {
      col.style.background = '#ea7317';
    }

    left = downlimit + 1;
    leftlimit = left - 2 + cols;
    // recorrido hacia la izquierda
    if (col.id >= left && col.id <= leftlimit) {
      col.style.background = '#ffe45e';
    }

    up = leftlimit + 1;
    uplimit = up + rows - 3;
    // recorrido hacia arriba
    if (col.id >= up && col.id <= uplimit) {
      col.style.background = '#73bfb8';
    }
    row.appendChild(col);
  }
  table.appendChild(row);
}
