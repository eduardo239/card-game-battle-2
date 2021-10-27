// function that check if object is empty
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function generateRandomNumberInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
