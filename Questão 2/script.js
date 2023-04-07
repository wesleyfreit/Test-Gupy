const n = 9;

async function checkFibonacci() {
  let pos = 0,y = 0,x = 1;

  do {
    y = x;
    x += pos;
    pos = y;
  } while (x < n);

  if (x == n) {
    console.log("pertence");
  } else {
    console.log("não pertence");
  }
}

checkFibonacci();
