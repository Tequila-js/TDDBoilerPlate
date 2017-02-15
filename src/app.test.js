import test from 'tape';
import sum from './app';

const fixture = [
    { a: 6,  b:4,  result:10 },
    { a: 22, b:3,  result:25 },
    { a: -3, b:2,  result:-1 },
    { a: 5,  b:-2, result:3 }
]

fixture.map(({ a, b, result }) => {
    const name = `adding ${a} and ${b} should return ${result}`;

    test(name, t => {
      const actual = sum(a,b);
      const expected = result;

      t.equal(actual, expected);

      t.end();
    });
})
