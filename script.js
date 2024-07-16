// 1. Если а – четное посчитать а*б, иначе а+б
export function getSumOrMultiply(a, b) {
  return a % 2 === 0 ? a * b : a + b;
}

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
export function getQuarter(x, y) {
  if (x > 0 && y > 0) {
    return "I";
  }
  if (x < 0 && y > 0) {
    return "II";
  }
  if (x < 0 && y < 0) {
    return "III";
  }
  if (x > 0 && y < 0) {
    return "IV";
  }
  return "0;0";
}

// 3. Найти сумму только положительных из трех чисел

export function getSumOfEvenNumbers(a, b, c) {
  let sum = 0;
  if (a > 0) {
    sum += a;
  }
  if (b > 0) {
    sum += b;
  }
  if (c > 0) {
    sum += c;
  }
  return sum;
}

// 4. Посчитать выражение макс (а*б*с, а+б+с)+3

export function getMax(a, b, c) {
  const multy = a * b * c + 3;
  const sum = a + b + c + 3;
  return multy > sum ? multy : sum;
}

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил

export function getMark(mark) {
  if (mark > 0 && mark < 20) {
    return "F";
  }

  if (mark >= 20 && mark < 40) {
    return "E";
  }

  if (mark >= 40 && mark < 60) {
    return "D";
  }

  if (mark >= 60 && mark < 75) {
    return "C";
  }

  if (mark >= 75 && mark < 90) {
    return "B";
  }

  if (mark >= 90 && mark <= 100) {
    return "A";
  }

  throw new Error("There is no such mark!");
}

// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
export function getSumAndQuantity(a, b) {
  let sum = 0;
  let quantity = 0;
  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      sum += a;
      quantity++;
    }
  }
  return { sum, quantity };
}

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
export function isPrime(number) {
  if (number <= 1) {
    return "not prime";
  }
  for (let i = 2; i <= Math.round(number / 2); i++) {
    if (number % i === 0) {
      return "not prime";
    }
  }
  return "prime";
}

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
export function getSqrt(number) {
  if (number < 0) {
    throw new Error("Wrong number");
  }
  for (let i = 1; i < number; i++) {
    const sqrt = i * i;
    if (sqrt === number) {
      return i;
    }

    if (sqrt > number) {
      return sqrt - number < i ? i : i - 1;
    }
  }
}

export function getSqrtBinary(number) {
  if (number < 0) {
    throw new Error("Wrong number");
  }

  let left = 1;
  let right = number;

  while (left <= right) {
    const middle = parseInt((left + right) / 2);
    const sqrt = middle * middle;

    if (sqrt === number) {
      return middle;
    }

    if (sqrt > number) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return number - right * right < number - left * left ? right : left;
}
