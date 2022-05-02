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
    var divsNames = ["qd1", "qp1", "qp2"]
    divsNames.forEach(element =>
        document.getElementById(element).style.display = "none"
        );
}

function update(rbt, val) {
    console.debug(rbt + val);
    if (rbt == "q1") {
        if (val == "1") { showDiv("qp1"); }
    }
    if (rbt == "q2") {
        showDiv("qp2");
    }
}

function checkResults() {
    var radioButtons = table.getElementsByClassName("r");
    var results = [];
    console.debug(radioButtons);
    for (var button of radioButtons) {
        results.push(button);
    }
}