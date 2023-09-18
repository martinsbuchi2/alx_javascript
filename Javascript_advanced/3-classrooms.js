#!usr/bin/node 
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
      let seatNumber = studentSeat(i + 1);
      students.push(seatNumber);
    }
    return students;
}
let classRoom = createClassRoom(10);