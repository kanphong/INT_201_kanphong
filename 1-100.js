let num = {
  num_1: 0,
  num_2: 0,
  num_3: 0
};

function random() {
  return Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < 3; i++) {
    switch (i) {
        case(i=0):
            num.num_1 = random()
            break;
        case(i=1):
            num.num_2 = random()
            break;
        case(i=2):
            num.num_3 = random()
            break;
    }
}

console.log(`Your number | ${num.num_1} ${num.num_2} ${num.num_3}`)
console.log(`1: Find Sum`)  
console.log(`2: Find Minimum Value`)
console.log(`3: Find Maximum Value`)

function menu(choice){
  if (choice == 1) {
    console.log(num.num_1+num.num_2+num.num_3);
  }
  
  else if (choice == 2) {
    if(num.num_1 < num.num_2 && num.num_1 < num.num_3){
      console.log(num.num_1);
    }else if (num.num_2 < num.num_1 && num.num_2 < num.num_3) {
      console.log(num.num_2);
    }else if (num.num_3 < num.num_1 && num.num_3 < num.num_2) {
      console.log(num.num_3);
    }
  }
  
  else if (choice == 3){
    if(num.num_1 > num.num_2 && num.num_1 > num.num_3){
      console.log(num.num_1);
    }else if (num.num_2 > num.num_1 && num.num_2 > num.num_3) {
      console.log(num.num_2);
    }else if (num.num_3 > num.num_1 && num.num_3 > num.num_2) {
      console.log(num.num_3);
    }
  }
}

console.log(menu(1));
console.log(menu(2));
console.log(menu(3));