export const randomizePrizesFunc = (array) => {
  let result = [];
  let prizes = array.map((el, i) => {
    return {
      id: i,
      prize: el,
      closed: false,
    };
  });

  result = [...prizes];

  for (let i = prizes.length; i < 225; i++) {
    result.push({id : i, prize: '', closed: false});
  }
  return result;
};
