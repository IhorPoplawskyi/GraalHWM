import { generateMap } from "../mockData/graalBase";

export const MainPage = () => {
  let data = generateMap();
  console.log(data);
  return (
    <div style={{width: '100vw', display: "flex", justifyContent: 'center'}}>
      <div style={{ width: 700, height: 500, border: "1px solid black", display: 'flex', flexWrap: 'wrap' }}>
        {data.map((el) => <div style={{height: 30, width: 30, border: '1px solid red'}}>{el.id}</div>)}
      </div>
    </div>
  );
};
