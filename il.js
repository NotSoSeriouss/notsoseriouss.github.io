function showDiv(id) {
    document.getElementById(id).style.display = "block"
}

function hideDiv(id) {
    document.getElementById(id).style.display = "none"
}

function viewElement(id) {
    document.getElementById(id).scrollIntoView();
}

function hideAllDivs() {
    var divsNames = ["qd1", "qp1", "qp2", "qp3", "qs1", "qs2", "qs3", "qs4", "qs5", "qs6", "qg1", "qg2", "qg3", "qg4", "sumbit", "answer"];
    divsNames.forEach(element =>
        document.getElementById(element).style.display = "none"
        );
}

function setUneditable(id) {
    var ancestor = document.getElementById(id);
    var descendants = ancestor.getElementsByClassName("r");
    for (var i = 0; i < descendants.length; i++) {
        /* Set all the radio buttons to uneditable */
        descendants[i].disabled = true;
    }
}

function setup() {
    hideAllDivs();
    showDiv('qd1');
}

var results = new Array();
function update(rbt, val) {
    console.debug(rbt + val);
    if (rbt == "q1") {
        setUneditable("qd1");
        if (val == "1") {
            showDiv("qp1");
            viewElement("qp1");
            results.push("q1::1");
        }
        if (val == "2") {
            showDiv("qs1");
            viewElement("qs1");
            results.push("q1::2");
        }
        if (val == "3") {
            showDiv("qg1");
            viewElement("qg1");
            results.push("q1::3");
        }
    }
    if (rbt == "q2") {
        showDiv("qp2");
        viewElement("qp2");
        setUneditable("qp1");
        results.push("q2:" + val);
    }
    if (rbt == "q3") {
        showDiv("qp3");
        setUneditable("qp2");
        viewElement("qp3");
        results.push("q3:" + val);
    }
    if (rbt == "q4") {
        setUneditable("qp3");
        results.push("q4:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
    if (rbt == "q5") {
        if (val == "1") {
            showDiv("qs2");
            viewElement("qs2");
            setUneditable("qs1");
            results.push("q5::1");
        }
        if (val == "2") {
            showDiv("qs4");
            viewElement("qs4");
            setUneditable("qs1");
            results.push("q5::2");
        }
        if (val == "3") {
        
        }
    }
    if (rbt == "q6") {
        showDiv("qs3");
        setUneditable("qs2");
        viewElement("qs3");
        results.push("q6:" + val);
    }
    if (rbt == "q7") {
        setUneditable("qs3");
        results.push("q7:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
    if (rbt == "q8") {
        setUneditable("qs4");
        results.push("q8:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
    if (rbt == "q9") {
        setUneditable("qs5");
        showDiv("qs6");
        viewElement("qs6");
        results.push("q9:" + val);
    }
    if (rbt == "q10") {
        setUneditable("qs6");
        results.push("q10:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
    if (rbt == "q11") {
        setUneditable("qg1");
        results.push("q11:" + val);
        if (val == "1") {
            showDiv("qg2");
            viewElement("qg2");
        }
        if (val == "2") {
            showDiv("qg4");
            viewElement("qg4");
        }
        if (val == "3") {
            showDiv("qg3");
            viewElement("qg3");
        }
    }
    if (rbt == "q12") {
        setUneditable("qg2");
        showDiv("qg4");
        viewElement("qg4");
        results.push("q12:" + val);
    }
    if (rbt == "q13") {
        setUneditable("qg3");
        results.push("q13:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
    if (rbt == "q14") {
        setUneditable("qg4");
        results.push("q14:" + val);
        showDiv("sumbit");
        viewElement("sumbit");
    }
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function checkResults() {
    /*Print the results array*/
    console.debug(results);
    // C++ only
    for (var i = 0; i < 4; i++) {
        if (arrayEquals(results, [ "q1::1", "q2:1", "q3:2", "q4:" + i ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/cpp.png";
            viewElement("answer");
            return;
        }
    }

    //C++ and qt
    for (var i = 0; i < 4; i++) {
        if (arrayEquals(results, [ "q1::1", "q2:1", "q3:1", "q4:" + i ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/cppqt.png";
            viewElement("answer");
            return;
        }
    }

    // Java with awt and swing
    for (var i = 0; i < 4; i++) {
        if (arrayEquals(results, [ "q1::1", "q2:2", "q3:1", "q4:" + i ])) { 
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/javaandawt.png";
            viewElement("answer");
            return;
        }
    }
    //Java only
    for (var i = 0; i < 4; i++) {
        if (arrayEquals(results, [ "q1::1", "q2:2", "q3:2", "q4:" + i ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/java.png";
            viewElement("answer");
            return;
        }
    }
    //My sql and js
    if (arrayEquals(results, [ "q1::2", "q5::1", "q6:1", "q7:1" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/mysqlandjs.png";
        viewElement("answer");
        return;
    }
    //Only js
    if (arrayEquals(results, [ "q1::2", "q5::1", "q6:2", "q7:1" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/jsonly.png";
        viewElement("answer");
        return;
    }
    //My sql and php
    if (arrayEquals(results, [ "q1::2", "q5::1", "q6:1", "q7:2" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/mysqlandphp.png";
        viewElement("answer");
        return;
    }
    //Only php
    if (arrayEquals(results, [ "q1::2", "q5::1", "q6:2", "q7:2" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/phply.png";
        viewElement("answer");
        return;
    }
    //WordPress and Html
    if (arrayEquals(results, [ "q1::2", "q5::2", "q8:1" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/wordpressandhtml.png";
        viewElement("answer");
        return;
    }
    //Html, Bootstrap and Jquery
    if (arrayEquals(results, [ "q1::2", "q5::2", "q8:2" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/htmlbootstrapandjquery.png";
        viewElement("answer");
        return;
    }

    //C++ and Unreal Engine 5
    for (var i = 0; i < 3; i++) {
        if (arrayEquals(results, [ "q1::3", "q11:1", "q12:" + i, "q14:1" ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/cppandue.png";
            viewElement("answer");
            return;
        }
    }
    //C# and Unity
    for (var i = 0; i < 3; i++) {
        if (arrayEquals(results, [ "q1::3", "q11:1", "q12:" + i, "q14:2" ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/csharpandunity.png";
            viewElement("answer");
            return;
        }
    }
    //CONSOLES VV
    //C++ and Unreal Engine 5
    for (var i = 0; i < 3; i++) {
        if (arrayEquals(results, [ "q1::3", "q11:2", "q12:" + i, "q14:1" ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/cppandue.png";
            viewElement("answer");
            return;
        }
    }
    //C# and Unity
    for (var i = 0; i < 3; i++) {
        if (arrayEquals(results, [ "q1::3", "q11:2", "q12:" + i, "q14:2" ])) {
            hideAllDivs();
            showDiv("answer");
            document.getElementById("answerImg").src = "images/csharpandunity.png";
            viewElement("answer");
            return;
        }
    }
    
    //C or C++ with android game libs
    if (arrayEquals(results, [ "q1::3", "q11:3", "q13:1" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/candroid.png";
        viewElement("answer");
        return;
    }
    //C++ and metal api
    if (arrayEquals(results, [ "q1::3", "q11:3", "q13:2" ])) {
        hideAllDivs();
        showDiv("answer");
        document.getElementById("answerImg").src = "images/cppmetal.png";
        viewElement("answer");
        return;
    }
}