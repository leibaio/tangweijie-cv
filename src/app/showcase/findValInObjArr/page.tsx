export default function findValInObjArrPage() {
  const testObjArr = [
    { id: 101, name: "手机", price: 2999 },
    { id: 102, name: "电脑", price: 5999 },
    { id: 103, name: "平板", price: 1999 },
  ];

  // 找到 id = 102
  const x = testObjArr.find((item, index, array) => {
    return item.id === 102;
  });
  console.log("[ x ] >", x);

  // 找到 price > 2000
  const y = testObjArr.filter((item) => item.price > 2000);
  console.log("[ y ] >", y);

  // forEach
  let targetItem = null;
  testObjArr.forEach((item) => {
    if (item.name === "平板") {
      targetItem = item;
    }
  });
  console.log("[ targetItem ] >", targetItem);

  return (
    <div>
      <h1>find()方法</h1>
    </div>
  );
}
