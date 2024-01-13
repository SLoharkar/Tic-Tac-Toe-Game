// Function called whenever user tab on any box 
var data1 = "";
var data2 = "";
var data3 = "";
var data4 = "";
var data5 = "";
var data6 = "";
var data7 = "";
var data8 = "";
var data9 = "";

var tomwin = "Tom is Winner";
var jerrywin = "Jerry is Winner";
var tom = "tom";
var jerry = "jerry";
var tomimgpath = "images/tom.png";
var jerryimgpath = "images/jerry.png";

var tom_img = tomimgpath;
var jerry_img = jerryimgpath;

function myfunc() {

    var img1 = document.getElementById("b1");
    var img2 = document.getElementById("b2");
    var img3 = document.getElementById("b3");
    var img4 = document.getElementById("b4");
    var img5 = document.getElementById("b5");
    var img6 = document.getElementById("b6");
    var img7 = document.getElementById("b7");
    var img8 = document.getElementById("b8");
    var img9 = document.getElementById("b9");


    //logic 123
    if (data1 == tom && data2 == tom && data3 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();
    }
    else if (data1 == jerry && data2 == jerry && data3 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();
    }

    //logic 147
    else if (data1 == tom && data4 == tom && data7 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data1 == jerry && data4 == jerry && data7 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }

    //logic 789
    else if (data7 == tom && data8 == tom && data9 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data7 == jerry && data8 == jerry && data9 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }

    //logic 369
    else if (data3 == tom && data6 == tom && data9 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data3 == jerry && data6 == jerry && data9 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }

    //logic 159
    else if (data1 == tom && data5 == tom && data9 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data1 == jerry && data5 == jerry && data9 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }

    //logic 357
    else if (data3 == tom && data5 == tom && data7 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data3 == jerry && data5 == jerry && data7 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }


    //logic 258
    else if (data2 == tom && data5 == tom && data8 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data2 == jerry && data5 == jerry && data8 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }


    //logic 456
    else if (data4 == tom && data5 == tom && data6 == tom) {
        document.getElementById('print').innerHTML = tomwin;
        clearFields();

    }
    else if (data4 == jerry && data5 == jerry && data6 == jerry) {
        document.getElementById('print').innerHTML = jerrywin;
        clearFields();

    }

    else if ((data1 == tom || data1 == jerry) && (data2 == tom
        || data2 == jerry) && (data3 == tom || data3 == jerry) &&
        (data4 == tom || data4 == jerry) && (data5 == tom ||
            data5 == jerry) && (data6 == tom || data6 == jerry) &&
        (data7 == tom || data7 == jerry) && (data8 == tom ||
            data8 == jerry) && (data9 == tom || data9 == jerry)) {
        var tomt = document.getElementById("tomturns");
        var jerryt = document.getElementById("jerryturns");

        tomt.style.visibility = "visible";
        jerryt.style.visibility = "visible";
        tomt.src = tom_img;
        jerryt.src = jerry_img;

        document.getElementById('print')
            .innerHTML = "Match Tie";
    }
    else {

        var tomturns = document.getElementById("tomturns");
        var jerryturns = document.getElementById("jerryturns");

        // Here, Printing Result 
        if (flag == 1) {
            jerryturns.src = "";
            jerryturns.style.visibility = "hidden";
            tomturns.style.visibility = "visible";
            tomturns.src = tom_img;
            document.getElementById('print')
                .innerHTML = "Player Tom Turn";
        }
        else {
            tomturns.src = "";
            tomturns.style.visibility = "hidden";
            jerryturns.style.visibility = "visible";
            jerryturns.src = jerry_img;
            document.getElementById('print')
                .innerHTML = "Player Jerry Turn";
        }
    }



}

function clearFields() {

    statdata = document.getElementById("print").textContent;
    flag = 2;

}

flag = 1;

function myfunc_1() {
    var imgb1 = document.getElementById("b1");

    if (flag == 1) {
        imgb1.src = tom_img;
        data1 = "tom";
        flag = 0;
    }
    else if (data1 != "tom" && flag == 0) {
        imgb1.src = jerry_img;
        data1 = "jerry";
        flag = 1;
    }

}

function myfunc_2() {
    var imgb2 = document.getElementById("b2");

    if (flag == 1 && data2 != "jerry") {
        imgb2.src = tom_img;
        data2 = "tom";
        flag = 0;
    }
    else if (data2 != "tom" && flag == 0) {
        imgb2.src = jerry_img;
        data2 = "jerry";
        flag = 1;
    }

}

function myfunc_3() {
    var imgb3 = document.getElementById("b3");

    if (flag == 1 && data3 != "jerry") {
        imgb3.src = tom_img;
        data3 = "tom";
        flag = 0;
    }
    else if (data3 != "tom" && flag == 0) {
        imgb3.src = jerry_img;
        data3 = "jerry";
        flag = 1;
    }

}

function myfunc_4() {
    var imgb4 = document.getElementById("b4");

    if (flag == 1 && data4 != "jerry") {
        imgb4.src = tom_img;
        data4 = "tom";
        flag = 0;
    }
    else if (data4 != "tom" && flag == 0) {
        imgb4.src = jerry_img;
        data4 = "jerry";
        flag = 1;
    }
}


function myfunc_5() {
    var imgb5 = document.getElementById("b5");

    if (flag == 1 && data5 != "jerry") {
        imgb5.src = tom_img;
        data5 = "tom";
        flag = 0;
    }
    else if (data5 != "tom" && flag == 0) {
        imgb5.src = jerry_img;
        data5 = "jerry";
        flag = 1;
    }
}


function myfunc_6() {
    var imgb6 = document.getElementById("b6");

    if (flag == 1 && data6 != "jerry") {
        imgb6.src = tom_img;
        data6 = "tom";
        flag = 0;
    }
    else if (data6 != "tom" && flag == 0) {
        imgb6.src = jerry_img;
        data6 = "jerry";
        flag = 1;
    }
}

function myfunc_7() {
    var imgb7 = document.getElementById("b7");

    if (flag == 1 && data7 != "jerry") {
        imgb7.src = tom_img;
        data7 = "tom";
        flag = 0;
    }
    else if (data7 != "tom" && flag == 0) {
        imgb7.src = jerry_img;
        data7 = "jerry";
        flag = 1;
    }
}

function myfunc_8() {
    var imgb8 = document.getElementById("b8");

    if (flag == 1 && data8 != "jerry") {
        imgb8.src = tom_img;
        data8 = "tom";
        flag = 0;
    }
    else if (data8 != "tom" && flag == 0) {
        imgb8.src = jerry_img;
        data8 = "jerry";
        flag = 1;
    }
}


function myfunc_9() {
    var imgb9 = document.getElementById("b9");

    if (flag == 1 && data9 != "jerry") {
        imgb9.src = tom_img;
        data9 = "tom";
        flag = 0;
    }
    else if (data9 != "tom" && flag == 0) {
        imgb9.src = jerry_img;
        data9 = "jerry";
        flag = 1;
    }
}

// Function to reset game 
function myfunc_10() {
    location.reload();
}


