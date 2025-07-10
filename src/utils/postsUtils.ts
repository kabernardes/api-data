// type Posts = {
//   body: string;
//   id: number;
//   title: string;
//   user_id: number;
// }[];

//1-  função que recebe um array de posts e retorna somente os posts de um usuário específico
export const getPostsByUser = () => {
  return console.log('Implement getPostsByUser function');
};

//2- função que recebe um array de posts e retorna somente os títulos dos posts e ids dos posts
export const getPostsTitles = () => {
  return console.log('Implement getPostsTitles function');
};

//3 -função que recebe um array de posts e retorna somente os posts que têm mais de 100 caracteres no corpo
export const getPostsWithLongBody = () => {
  return console.log('Implement getPostsWithLongBody function');
};

//4- função que teste se todos os posts tem título
export const allPostsHaveTitle = () => {
  return console.log('Implement allPostsHaveTitle functiality');
};

// nehama

export const changeArrayItem = (
  array: number[],
  positionToChange: number,
  newItem: number
): number[] => {
  const isOutOfBounds =
    positionToChange < 0 || positionToChange >= array.length;

  if (isOutOfBounds) {
    return array;
  }
  // map solution
  const mapSolution = array.map((item, index) =>
    index === positionToChange ? newItem : item
  );

  // slice solution
  const sliceSolution = [
    ...array.slice(0, positionToChange),
    newItem,
    ...array.slice(positionToChange + 1),
  ];

  // return mapSolution;
  return sliceSolution;
};
