const bingoCard = () => {
  let repeated = [];
  let matrix = [];
  let b = [];
  let i = [];
  let n = [];
  let g = [];
  let o = [];
  let c = [];
  let a = [];
  let r = [];
  let d = [];

  //Funcion para agregar numeros no repetidos al array y agregar el mismo a la matriz

  function add(array, min, max) {
    for (let i = 0; i < 3; i++) {
      let randomNumber = Math.round(Math.random() * (max - min) + min);
      if (!repeated.includes(randomNumber)) {
        // verificamos que el numero a guardar no este repetido y lo guardamos en el array y en la lista de los numeros que van apareciendo
        repeated.push(randomNumber);
        array.push(randomNumber);
      } else {
        while (repeated.includes(randomNumber)) {
          //si el numero esta repetido seguimos creando numeros hasta que alguno no lo este y asi poder guardarlo.
          randomNumber = Math.floor(Math.random() * (max - min) + min);
          if (!repeated.includes(randomNumber)) {
            repeated.push(randomNumber);
            array.push(randomNumber);
            break;
          }
        }
      }
    }
    array.sort(); //ordenamos el arreglo
    matrix.push(array); // lo agregamos a la matriz
  }

  //funcion que determina cuales son los lugares que se deben reemplazar por espacios vacios y asi dar lugar a que las filas tengan solo 5 numeros y solo 2 por columna
  function randomDelete(array) {
    for (let i = 0; i < 3; i++) {
      let spacesLeft = 5; //espacios restantes por eliminar
      let randomReplace = 0;
      while (spacesLeft > 1) {
        randomReplace = Math.round(Math.random() * 8);

        let filterFilled = array.filter((el) => !el.includes("")); // Filtro los elementos del array que tengan 3 numeros, de esta forma se asegura que no va a quedar ningun elemento con 3 numeros
        let firstReplace = Math.round(
          Math.random() * (filterFilled.length - 1)
        );

        if (filterFilled.length) {
          filterFilled[firstReplace].splice(i, 1, "");
          spacesLeft -= 1;
        } else {
          let filtered = array[randomReplace].filter((el) => el !== ""); //Filtro los elementos del elemento del array que no sean un string varcio
          if (array[randomReplace][i] !== "" && filtered.length > 1) {
            //aqui nos aseguramos que el lugar que vamos a reemplazar no sea un string vacio y que el elemento del array tenga al menos un numero
            array[randomReplace].splice(i, 1, "");
            spacesLeft -= 1;
          }
        }
      }
    }
  }

  //Queria hacer DRY, pero por algun motivo al iterar sobre un Array(9).fill([]) cada elemento del arreglo se llenaba de 27 elementos y no de 3 como esperaba

  add(b, 1, 9);
  add(i, 10, 19);
  add(n, 20, 29);
  add(g, 30, 39);
  add(o, 40, 49);
  add(c, 50, 59);
  add(a, 60, 69);
  add(r, 70, 79);
  add(d, 80, 90);
  randomDelete(matrix);

  return matrix;
};

export default bingoCard;
