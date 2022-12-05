function f(num: number): string | number {

  if (num % 3 === 0) return 'fizz'
  else if (num % 5 === 0) return 'buzz'
  else if (num % 15 === 0) return 'fizzbuzz'
  else return num
}

for (let i: number = 1; i <= 100; i++) console.log(f(i));
