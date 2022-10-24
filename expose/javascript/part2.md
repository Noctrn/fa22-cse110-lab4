Q12
    A: student.name
    B: student['Grad Year']
    C: student.greeting();
    D: student['Favorite Teacher'].name
    E: student.courseLoad[0]
Q13: 
    32 - String takes control over the int
    1 - We cannot subtract a string from an int, so math is performed
    3 - the value of 0 is added
    3null - null gets converted into a string
    4 - true has value of 1
    0 - both are 0
    3undefined - undefined converted to string
    NaN - this operation cannot be performed in js do differnces in types
Q14:
    true - converted to values, so true
    false - since both are strings, they are covertedto values and compared
    true - converted to values, so true
    false - since we ae checking for equality without conversion they are not equal
    false - converteed to values 1 != 2
    true - 2!=0, so boolean oconverted to true, true == true
Q15: === is a strict equality operator, so you can use it to compare values like false and 0, while == is a non strict equality operator and it uses value convesion.
Q16: In code 
Q17: When we call modifyArray the function iterates trough each member of the array and doubles their value. It is importnat to note that the vaues of the array that is passed trough are actually modified in the scope of the function, however, the passed in array remains wit the same values outside of the scope. The function modifies each member of the array and pushes it to the new array which gets retured with final vlaues being: [ 2, 4, 6 ]. So in order to actually modify the otriginal array you need it to do: 
let a = [1,2,3]
a = modifyArray(a, doSomething);
Q18:    1
        4
        2
        3
