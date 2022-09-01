const bingoCard = () => {
  let repeated = [];
  let matrix = [];
  let min = 1;
  let max = 9;

  for (let i = 0; i < 9; i++) {
    for (let x = 0; x < 3; x++) {
      let randomNumber = Math.round(Math.random() * (max - min) + min);
      if (!repeated.includes(randomNumber)) {
        repeated.push(randomNumber);
      } else {
        while (repeated.includes(randomNumber)) {
          //si el numero esta repetido seguimos creando numeros hasta que alguno no lo este y asi poder guardarlo.
          randomNumber = Math.floor(Math.random() * (max - min) + min);
          if (!repeated.includes(randomNumber)) {
            repeated.push(randomNumber);
            break;
          }
        }
      }
    }

    min += i === 0 ? 9 : 10;
    max += i === 7 ? 11 : 10;
  }

  repeated.sort((a, b) => a - b);

  while (repeated.length) {
    matrix.push(repeated.splice(0, 3));
  }

  for (let i = 0; i < 3; i++) {
    let spacesLeft = 5; //espacios restantes por eliminar
    let randomReplace = 0;
    while (spacesLeft > 1) {
      randomReplace = Math.round(Math.random() * 8);

      let filterFilled = matrix.filter((el) => !el.includes("")); // Filtro los elementos del array que tengan 3 numeros, de esta forma se asegura que no va a quedar ningun elemento con 3 numeros
      let firstReplace = Math.round(Math.random() * (filterFilled.length - 1));
      if (filterFilled.length) {
        filterFilled[firstReplace].splice(i, 1, "");
        spacesLeft -= 1;
      } else {
        let filtered = matrix[randomReplace].filter((el) => el !== ""); //Filtro los elementos del elemento del array que no sean un string vacio
        if (matrix[randomReplace][i] !== "" && filtered.length > 1) {
          //aqui nos aseguramos que el lugar que vamos a reemplazar no sea un string vacio y que el elemento del array tenga al menos un numero
          matrix[randomReplace].splice(i, 1, "");
          spacesLeft -= 1;
        }
      }
    }
  }

  return matrix;
};

export default bingoCard;
