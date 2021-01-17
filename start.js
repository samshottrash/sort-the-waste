var clickNum = -1;
//2,5,3,4,6
const IMGS = ['sara/images/part2.png', 'sara/images/part3.png', 'sara/images/part4.png', 'sara/images/part5.png', 'sara/images/part6.png'];

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
            if(clickNum == 4) {
                window.location.href = 'sara/index.html';
            }
        }
    }
}

function changeIMGBack() {
    if (clickNum > 0) {
        clickNum = clickNum - 1;
        document.body.style.backgroundImage = `url(${IMGS[clickNum]})`;
    }
}