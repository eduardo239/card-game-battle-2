let end = 1;

let int = setInterval(() => {
  if (end > 2) {
    clearInterval(int);
  }
  end++;
}, 600);

// function takes 2 arguments: an object literal obj and a string
// prop
// return a new object literal with the same properties as obj
// excluding the property prop named prop, if it exists
function omit(obj, prop) {
  var newObj = {};
  for (var key in obj) {
    if (key !== prop) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// function takes a single parameter k and returns a new object,
// representing a step counter with the initial value of 0 and with
// three methods:
// - increment() increments the value by k
// - decrement() decrements the value by k
// - getValue() returns the current value

const counter = (function counter() {
  let value = 0;
  return {
    getValue: function () {
      return value;
    },
    changeBy: function (k) {
      value += k;
    }
  };
})();

function getFixedCounter(k) {
  var myCounter = counter;
  return {
    increment: function () {
      myCounter.changeBy(k);
    },
    decrement: function () {
      myCounter.changeBy(-k);
    },
    getValue: function () {
      return myCounter.getValue();
    }
  };
}

/*
eita # efeeito
eita ## efeito
eita ### efeito

## efeito
### efeito

eita ## efeito
eita ### efeito
## efeito
eita ### efeito

function match '## efeito' and 'eita # efeito'
*/
function match(str) {
  var regex = /^(#{1,6})\s(.*)$/;
  var match = regex.exec(str);
  if (match) {
    return {
      level: match[1].length,
      text: match[2]
    };
  }
}
console.log(match('## efeito'));
