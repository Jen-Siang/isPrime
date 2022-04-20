function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num%i == 0){
            return false;
        }
        return true;
    }
}

test("eae", () => {
    expect(isPrime(7)).toBeTruthy();
})
test("aaa", () => {
    expect(isPrime(5).toBeTruthy());
})
