// 타입 가드를 사용하지 않은 코드
function print(value: number | string): void {
    if (typeof value === 'number') {
        console.log((value as number).toFixed(2));
    } else {
        console.log((value as string).trim());
    }
}

// 타입 가드를 사용한 코드
// 굳이 as 키워드로 타입 단언을 하지 않고 if 문을 이용하여 분기할 수 있다.
function print(value: number | string): void {
    if (typeof value === 'number') {
        console.log(value.toFixed(2))
    } else {
        console.log(value.trim())
    }
}









