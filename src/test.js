// const obj = {
//   name: "Dmitry",
//   getName: () => {
//     console.log(this);
//     return this.name;
//   },
// };
//
// console.log(obj.getName());
//
// const onClick = obj.getName;
// // function () {
// //     console.log(this);
// //     return this.name;
// //   }
//
// console.log(onClick());

console.log("start"); // 1

setTimeout(() => {
  console.log("setTimeout");
}, 0); // 2

new Promise((res, rej) => {
  // res("done");
  rej(Error("error"));
})
  .then((result) => {
    console.log(result);
    return new Promise((res) => {
      res("done2");
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  }); // 3
//
console.log("finish"); // 4
//
//
