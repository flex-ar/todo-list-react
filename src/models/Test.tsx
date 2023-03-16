type returnInArrayType = <T>(a: T) => T[];
const returnInArray: returnInArrayType = value => [value];

returnInArray<number>(1);

type testType = <A>(a: A) => <B>(b: B) => string;
const test: testType = v => b => v + '' + b;

type t1 = <T extends {}>(obj: T) => T;
const fn1: t1 = obj => ({ ...obj });

fn1({ text: '' });

test(1);

export const Test = () => {
  return <div>hola</div>;
};
