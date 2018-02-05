    var rows = document.getElementsByTagName("tr");

function initDiv(){

}

function changeColorOdd(rowNum) {
        var i = 0;
        //console.log(rowNum);
        // //console.log(rows[0].cells[0].innerHTML);
        //console.log(rows[rowNum].cells.length);
        for (i = 0; i < 6; i++) {
            var myStyle = rows[rowNum].cells[i].style;
            if (i % 2 !== 0) {
                if (myStyle.backgroundColor == "purple") {
                    myStyle.backgroundColor = "green";
                    myStyle.foregroundColor = "yellow";
                } else {
                    myStyle.backgroundColor = "purple";
                    myStyle.foreGroundColor = "black" ;
                }

            }
        }
    }

    function changeColor(event,rowNum) {
        var i = 0;
       // console.log(event);
        event.stopPropagation();
       // rowNum.stopPropagation();
        //console.log(rowNum);
        // //console.log(rows[0].cells[0].innerHTML);
        //console.log(rows[rowNum].cells.length);
        for (i = 0; i < 6; i++) {
            var myStyle = rows[rowNum].cells[i].style;
            if (i % 2 === 0) {
                if (myStyle.backgroundColor == "red") {
                    myStyle.backgroundColor = "blue";
                    myStyle.foregroundColor = "yellow";
                } else {
                    myStyle.backgroundColor = "red";
                    myStyle.foreGroundColor = "black" ;
                }

            }
        }
    }

    function swapValue(event,rowNum) {
        var i = 0;
        //console.log(rowNum);
        //event.stopPropagation();
        for (i = 0; i < 6; i += 2) {
            var temp = rows[rowNum].cells[i].innerHTML;
            //console.log(typeof(temp));
            rows[rowNum].cells[i].innerHTML = rows[rowNum].cells[i + 1].innerHTML;
            rows[rowNum].cells[i + 1].innerHTML = temp;
        }
    }


// function fullName(firstName, lastName, callback){
// 	var temp = 'temp variable of fullName'
//   console.log("My name is " + firstName + " " + lastName);
//   callback(lastName);
// }

// var greeting = function(ln){
//   console.log('Welcome Mr. ' + ln);
// };

// fullName("Jackie", "Chan", greeting);