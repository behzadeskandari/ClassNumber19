////BigO

//let lst = ['Nemo','akbar','asghar','batool','reza','gholi',"jason",'delegate','maryam','mahi'];
//let longlst = Array(1000).fill('nemo');


//function FindingNemo(lst) {

//    let t0 = performance.now();
//    for (var i = 0; i < lst.length; i++) {
//        console.log(lst[i]);

//        if (lst[i] === 'Nemo') {
//            console.log("Nemo found");
//            break;
//        }
//    }
//    let t1 = performance.now();
//    console.log("this operation took" + (t0-t1) +"miliseconds")
//}


//FindingNemo(lst);
//////////////////////////////////////////////////////////////////////////////
//let boxes = ['Nemo', 'akbar', 'asghar', 'batool', 'reza', 'gholi', "jason", 'delegate', 'maryam', 'mahi'];

//function GetBox(boxes) {
//    console.log(boxes[0]);
//    console.log(boxes[2]);
//    console.log(boxes[4]);
//    console.log(boxes[1]);
//}

//GetBox(boxes)


////////////////////////////////////////////////////////////////////////////////

///O
//function FunChallange(input) {
//    let a = 10;
//    a = 50 + 3;
//    for (let i = 0; i < input.length; i++) {
//        anotherFunction(); //O(n)
//        let stranger = true;//O(n)
//        a++;
//    }//O(n)

//    return a;
//} ///O(n)



//function antoherFuncChallange(input) {
//    let a = 5;//O(1)
//    let b = 10;//O(1)
//    let c = 50;//O(1)
//    for (var i = 0; i < input; i++) {
//        let x = i + 1;//O(N)

//        let y = i + 2;//O(N)

//        let z = i + 3;//O(N)

//    }
//    for (var i = 0; i < input; i++) {
//        let p = j * 2;//O(N)
//        let q = j * 2;//O(N)


//    }
//    let whoami = I dont know
//}



//function print(item) {
//    console.log(item[0]);//O(1)
//    var middleIndex = Math.floor(item.length / 2);//O(1)
//    var index = 0;//O(1)


//    while (index < middleIndex) {
//        console.log(item[index]); //O(n /2)
//        index++;//O(n/2)

//    }
//    for (var i = 0; i < 100; i++) {

//        console.log(i)// O(n)
//    }


//}


////O(3 + 2 (N / 2) + N)
//function CountBox(boxes) {
//    for (i = 0; i < boxes.length; i++) {
//        console.log('abc');
//    }
//}

//function CountBoxes2(boxes2) {
//    for (var i = 0; i < boxes2.length; i++) {
//        console.log("abc");
//    }
//}

//let boxes = ['a', 'b', 'c'];
//let boxes2 = ['1','2','3','4','5']

//CountBox(boxes); //O(n)
//CountBoxes2(boxes2)//O(n)


//function printall(numbers) {
//    console.log("these are numbers");// O(1)
//    numbres.forEach(function (number) {
//        console.log(number);//O(n)
//    })

//    console.log("and these are the sum");
//    numbers.forEach(function(firstnumber){ //O(n^2)
//        numbers.forEach(function (secondNumber) {
//            console.log(firstnumber + secondNumber)
//        })
//    }) // O(n^2 + n)

//}
//printall([1, 2, 3, 4, 5]);

///DataStructure









































