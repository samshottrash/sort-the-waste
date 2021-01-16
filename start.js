var clickNum = 0;
//2,5,3,4,6
const IMGS = ['part2.png', 'part3.png', 'part4.png', 'part5.png'];

function changeIMG() {
    document.body.style.backgroundImage = `url(${IMGS[clickNum]})`;
    if (clickNum != 3) {
        clickNum++;
    }
}