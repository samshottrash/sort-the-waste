var clickNum = -1;
//2,5,3,4,6
const IMGS = ['part2.png', 'part3.png', 'part4.png', 'part5.png', 'part6.png'];

function changeIMG() {

    var button = document.getElementById("button");
    var d3 = document.getElementById("d3");
    var d4 = document.getElementById("d4");
    var d5 = document.getElementById("d5");
    button.style.display="none";
    d3.style.display="block";
    d4.style.display="block";
    d5.style.display="block";
    
    if (clickNum != 4) {
        if(d3.className != undefined) {
            clickNum++;
            document.body.style.backgroundImage = `url(${IMGS[clickNum]})`;
        }
    } else {
        d3.style.display="none";
        d4.style.display="none";
        d5.style.display="none";
    }
}

function changeIMGBack() {
    if (clickNum > 0) {
        clickNum = clickNum - 1;
        document.body.style.backgroundImage = `url(${IMGS[clickNum]})`;
    }
}

function skip() {
    clickNum = 4;
    document.body.style.backgroundImage = `url(${IMGS[clickNum]})`;
    d3.style.display="none";
    d4.style.display="none";
    d5.style.display="none";
}