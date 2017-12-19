function div(a: number, b: number): number {
    if (b == 0) {
      throw new Error('division by 0 is not allowed');
    }
    return a / b;
  }

  try {
    let result1 = div(10, 3);
    console.debug('result1', result1);
  
    let result2 = div(10, 0);
    console.debug('result2', result2);
  }
  catch(error) {
    console.error('Fehler', error);
  }
  finally {
    console.debug('finally');
  }
  