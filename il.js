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
    var divsNames = ["qd1", "qp1", "qp2", "qp3", "qs1"];
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
            results[0] = "q1::1";
        }
        if (val == "2") {
            showDiv("qs1");
            results[0] = "q1::2";
        }
    }
    if (rbt == "q2") {
        showDiv("qp2");
        setUneditable("qp1");
        results[1] = "q2:" + val;
    }
    if (rbt == "q3") {
        showDiv("qp3");
        setUneditable("qp2");
        viewElement("qp3");
        results[2] = "q3:" + val;
    }
    if (rbt == "q4") {
        setUneditable("qp3");
        results[3] = "q4:" + val;
    }
    if (rbt == "q5") {
        if (val == "1") {

        }
        if (val == "2") {

        }
        if (val == "3") {
        
        }
    }
}

function checkResults() {
    /*Print the results array*/
    console.debug(results);
}