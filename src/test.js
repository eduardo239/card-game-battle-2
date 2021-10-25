let end = 1;

let int = setInterval(() => {
  if (end > 2) {
    clearInterval(int);
  }
  end++;
}, 600);
