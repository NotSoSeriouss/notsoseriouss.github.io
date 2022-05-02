function showHideDivs(rbt, id) {
    hideAllDivs();
    if (id == "answ1") { showDiv("div1") }
    if (id == "answ2") { showDiv("div2") }
    if (id == "answ2") { showDiv("div2") }
    if (rbt == "quest1") {
        if (id == "answ4")
            showDiv("div5")
        if (id == "answ5")
            showDiv("div6")
    }
}

function showDiv(div) {
    document.getElementById(div).style.display = "block"
}

function hideAllDivs() {
    var divsNames = ["div1", "div2", "div3", "div4", "div5", "div6"]
    divsNames.forEach(element =>
        document.getElementById(element).style.display = "none"
        );
}