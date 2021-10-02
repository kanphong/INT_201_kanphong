//Ex.4

// แบบฝึกหัดที่4 ให้เขียนโปรแกรมเพื่อทำเมนูจัดการ Text String ให้ทดสอบโดยใช้ String
// อย่างน้อย 3 กรณีที่แตกต่างกัน
// • ให้เขียน Function เพื่อแสดงเมนูในการจัดการ String
// 1: Reverse String
// 2: Replace Vowels with ‘*’
// 3: Count Vowels in String

// • ตัวอย่างเช่น “Hello World”
// กด 1 ได้ “dlroW olleH”
// กด 2 ได้ “H*ll* W*rld”
// กด 3 ได้ 3

console.log(`1: Reverse String `);
console.log(`2: Replace Vowels with ‘*’`);
console.log(`3: Count Vowels in String`);

function menu(num, word) {
  console.log(`---------------------`);
  console.log(`NUM | ${num}`);
  console.log(`WORD | ${word}`);
  console.log(`---------------------`);

  switch (num) {
    case 1:
      return Reverse(word);
      break;
    case 2:
      return ReplaceVowels(word);
      break;
    case 3:
      return CountVowels(word);
      break;
  }
}

function Reverse(word) {
  let str = String(word);
  let newtext = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newtext += str[i];
  }
  console.log(newtext);
}

function ReplaceVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var str = String(word);
  let newtext = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newtext += '*';
    } else newtext += str[i];
  }
  console.log(newtext);
}

function CountVowels(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var str = String(word);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  console.log(count);
}

console.log(menu(2, "metha"));
console.log(menu(1, "Toey"));
console.log(menu(3, "irada"));