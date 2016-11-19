const isPrime = (number) => {
    for (let i = 2;i<=Math.sqrt(number);i++){
        if (number % i === 0) return false; 
    }
    return (number < 2) ? false : true;
}

const getPrimes = (start, finish) => {
    const primes = [];  
    if (start > finish) [start,finish] = [finish,start];
    for (let i=start;i<=finish;i++){
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}
