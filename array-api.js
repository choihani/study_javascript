// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    //내 답안
    let str="";
    for(fruit of fruits){
        str += fruit+" ";
    }
    console.log(str);

    //답안
    const result = fruits.join();
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const arr = fruits.split(",");
    const arr2 = fruits.split(",",2);
    console.log(arr);
    console.log(arr2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    array.reverse();
    console.log(array); // 배열자체의 순서가 바뀜
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    console.clear();
    //내답
    // const result = array.splice(2);
    // console.log(result);
    // console.log(array); 
    // slice는 지우는 함수이기때문에 지운값을 반환해주고 실제값에서 지우지 않은 값이 남아있음

    // 답안
    const result = array.slice(2,5); //배열에서 원하는 부분만 리턴받아서 올때 사용
    console.log(result);
    console.log(array); 
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    // 내 답안
    console.clear();
    for(student of students){
      if(student.score === 90){
          console.log(student);
      }
    }

    // 답안
    // const result = students.find(function(student, index){
    //   // console.log(student, index);
    //   return student.score === 90;
    // });
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    console.clear();

    //내 답안
    let arr = [];
    for(student of students){
      if(student.enrolled){
        arr.push(student);
      }
    }
    console.log(arr);

    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    //답안
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();    
    //답안 //some 하나라도 만족하는게 있으면 true
    const result = students.some((student) => student.score < 50);
    console.log(result);
    
    //every 모든 학생들이 조건에 해당한다면 true
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
  }
  
  console.clear();  
  // Q9. compute students' average score
  {
    console.clear();
    // const result = students.reduceRight((prev, curr) => {
    const result = students.reduce((prev, curr) => {
      console.log('-----------');
      console.log(prev);
      console.log(curr);
      return prev + curr.score;
    },0);
    console.log(result);
    
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result2 / students.length);
  }
  
  console.clear();
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.reduce((prev, curr) => prev + curr.score+", ","");
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }