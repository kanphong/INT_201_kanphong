// let persons = [                     //สร้าง obj เก็บ ชื่อ กับ อายุ
//   { name: "Metha", age: 16 },
//   { name: "Kalista", age: 18 },
//   { name: "Irada", age: 27 },
//   { name: "orianna", age: 14 },
//   { name: "Syndra", age: 24 },
// ];

year = [14, 12, 10, 17, 13];                    //สร้าง arrray เก็บอายุเด็ก
function threeyearlater(year) {                 //
  year_three = year.map((b) => b + 3);
  return level(year_three);
}

function level(year_three) {
  year_three.forEach((element) => {
    if (element >= 18) {
      console.log(`${element} : เย็ดได้`);
    } else {
      console.log(`${element} : เย็ดไม่ได้`);
    }
  });
}

threeyearlater(year);
