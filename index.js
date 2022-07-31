// no 1
// const biodata = {
//   name: "Rifqi Ahmad Pratama",
//   age: 23,
//   hobbies: [benerang, berkuda, badminton],
//   isMaried: false,
//   schoolList: [
//     {
//       name: "MTS Islam Ngruki",
//       yearln: "2010",
//       yearOut: "2013",
//       major: "null",
//     },
//     {
//       name: "MA Al Mukmin Ngruki",
//       yearln: "2013",
//       yearOut: "2016",
//       major: "Agama",
//     },
//     { name: "Telkom University", yearln: "2017", yearOut: "2020", major: "D3" },
//     { name: "Telkom University", yearln: "2020", yearOut: "2022", major: "S1" },
//   ],
//   skills: [
//     { skillName: "Arduino", level: "beginner" },
//     { skillName: "Android", level: "advanced" },
//   ],
//   interestingCoding: "true",
// };

// no 2

// function cetak() {
//   const indo = parseInt(document.getElementById("indo").value);
//   const inggris = parseInt(document.getElementById("inggris").value);
//   const mtk = parseInt(document.getElementById("mtk").value);
//   const ipa = parseInt(document.getElementById("ipa").value);

//   const total = (indo + inggris + mtk + ipa) / 4;

//   const kecuali =
//     "Masukan angka tidak boleh lebih besar dari 100 dan lebih kecil dari 0";
//   if (total > 90 && total < 100) {
//     document.getElementById("totalBaru").innerHTML = total + " A";
//   } else if (total > 80 && total < 90) {
//     document.getElementById("totalBaru").innerHTML = total + " B";
//   } else if (total > 70 && total < 80) {
//     document.getElementById("totalBaru").innerHTML = total + " C";
//   } else if (total > 60 && total < 70) {
//     document.getElementById("totalBaru").innerHTML = total + " D";
//   } else if (total >= 0 && total < 60) {
//     document.getElementById("totalBaru").innerHTML = total + " E";
//   } else {
//     document.getElementById("totalBaru").innerHTML = kecuali;
//   }
// }

// no 3
// let printSegitiga = 6;
// let x = "";

// if (isNaN(printSegitiga)) {
//   console.log(" Data Harus Number <br/>");
// } else {
//   for (let i = printSegitiga; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       x += j;
//     }
//     x += "\n";
//   }
//   console.log(x);
// }

// no 4
// let data = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
// };

// no 4 A
// const data_new = {
//   ...data,
//   name: "Rifqi Ahmad Pratama",
//   email: "rifqiahmad234a@gmail.com",
//   hobby: "Berenang",
// };
// console.log(data_new);

//  no 4 B
// const {
//   address: { city, street },
// } = data;
// console.log(city, street);
