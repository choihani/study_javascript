'use strict';

// JavaScript is synchronous.
// 호이스팅이된 이후부터 코드가 우리가 작성한 순서에 맞춰 동기적으로 실행됨
// hoisting : var, function declaration 이런 선언들이 제일 위로 올라가서 실행됨
console.log('1'); //동기
//setTimeout은 브라우저 함수라 브라우저한테 호출 요청함
setTimeout(() => {
    console.log('2'); //비동기
}, 1000);
console.log('3'); //동기

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello')); //동기


// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => { console.log(error)}
);

