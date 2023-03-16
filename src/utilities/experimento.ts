function testfn(msg?: string) {
  let count = 0;
  const TOP = 10;
  const variable = msg ?? 'asdasd';

  if (TOP) return;

  return [count, TOP, variable, { hola: 1 }];
}

console.log('\nTEST');

class Test {
  static t: bigint = 1n;
  xd: string;
  constructor() {
    this.xd = '';
  }
  public get value(): string {
    return this.xd;
  }
}

new Test();

const obj = {
  ttt: 10 * 2,
  asd: null,
};

obj.ttt;

// hola mundo

export default testfn;
