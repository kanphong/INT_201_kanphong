//Ex.2

//ให้เขียน Function เพื่อทำการสุ่มเลข 1-10 และคืนผลลัพธ์เป็นเลขที่สุ่มได้ จากนั้นให้ผู้เล่นเดาเลข
//โดยถ้ำเดาเลขเกินช่วง ให้หยุดเกม
// • ถ้าผู้เล่นเดาค่าที่สูงกว่าเลขที่สุ่มได้ ให้แสดงข้อความว่า “Too high”
// • ถ้าผู้เล่นเดาค่าที่ต่ำกว่าเลขที่สุ่มได้ ให้แสดงข้อความว่า “Too Low”
// • ถ้าผู้เล่นเดาตรงกับค่าที่สุ่มได้ ให้แสดงข้อความว่า “You WIN!”
// กรณีเดาไม่ถูกต้อง ให้ทำการเฉลยเลขที่สุ่มได้

function GameStart(b) {
  const a = Math.floor(Math.random() * 10) + 1;


  if (b >= 0 && b <= 10) {
    if (b > a) {
      console.log(`Too high | the number ${a}`);
    }
    else if (b < a) {
      console.log(`Too Low | the number ${a}`);
    }
    else if(b = a){
      console.log(`WIN`);
    }
  }else{
      console.log(`ERROR x_x`);
  }
}

GameStart(7);
GameStart(14);
