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
    var divsNames = ["qd1", "qp1", "qp2", "qp3", "qs1", "qs2", "qs3", "qs4", "qs5", "qs6", "qg1", "qg2", "qg3"];
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
            results.push("q1::1");
        }
        if (val == "2") {
            showDiv("qs1");
            results.push("q1::2");
        }
    }
    if (rbt == "q2") {
        showDiv("qp2");
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
    }
    if (rbt == "q5") {
        if (val == "1") {
            showDiv("qs2");
            setUneditable("qs1");
            results.push("q5::1");
        }
        if (val == "2") {
            showDiv("qs4");
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
    }
    if (rbt == "q8") {
        setUneditable("qs4");
        results.push("q8:" + val);
    }
    if (rbt == "q9") {
        setUneditable("qs5");
        showDiv("qs6");
        results.push("q9:" + val);
    }
    if (rbt == "q10") {
        setUneditable("qs6");
        results.push("q10:" + val);
    }
}

function checkResults() {
    /*Print the results array*/
    console.debug(results);
}