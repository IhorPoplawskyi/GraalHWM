export const generateMap = () => {
  const data = [];
  const openClosed = [true, false]
  for (let i = 1; i < 226; i++) {
    data.push({id: i, closed: openClosed[Math.floor(Math.random() * openClosed.length)]})
  }

  return data;
}