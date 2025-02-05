var style;
var score = 0;
var correct = true;

document.getElementById('score').innerHTML = score;


function onDragStart(event) {
  style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
    return false;
}



function onDrop(event) {
  var offset = event.dataTransfer.getData("text/plain").split(',');
  const dm = Array.from(document.getElementsByClassName('dragme')); 
  console.log(offset);
  console.log(dm);
  const index = dm.findIndex(obj => obj.id === offset[2]);
  if (dm[index] != undefined) {
    dm[index].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	  dm[index].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
  }
  
  //dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
  
const garbage = ["brokenGlass", "plasticStraws"];
const compost = ["bananaPeel", "eggshells"];
const recycling = ["shampoo", "newspaper"];
const ewaste = ["computerParts"];
const bins = ["garbage", "recycling", "compost", "ewaste"];

const items = [
  {
    name: 'shampoo',
    hint: 'images/shampoo_hint.png'
  },
  {
    name: 'newspaper',
    hint: 'images/news_hint.png'
  },
  {
    name: 'bananaPeel',
    hint: 'images/bananaPeel_hint.png'
  },
  {
    name: 'computerParts',
    hint: 'images/computerParts_hint.png'
  },
  {
    name: 'brokenGlass',
    hint: 'images/brokenGlass_hint.png'
  }
];


let toSearch = [];
    const id = offset[2];

    console.log(id);
    const draggableElement = document.getElementById(id);
    
    const dropzone = event.target;
    let inBin = false;

    console.log(draggableElement);
      console.log(dropzone);
      if (dropzone.id === "compost") {
        toSearch = compost;
        inBin = true;
        console.log("assigned c");
      }

      else if (dropzone.id === "garbage") {
        toSearch = garbage;
        inBin = true;
        console.log("assigned g");
      }
      else if (dropzone.id === "recycling") {
        toSearch = recycling;
        inBin = true;
      }

      else if (dropzone.id === "ewaste") {
        toSearch = ewaste;
        inBin = true;
      }
      console.log("TOSEARCH " + toSearch);
      console.log("DROPPED: " + dropzone.id);
      if (draggableElement != null) {
        if (toSearch.includes(draggableElement.id)) {
          console.log("good job");
          if (correct) {
            score++;
            document.getElementById('score').innerHTML = score;
          }
          correct = true;
          draggableElement.remove();
          console.log(dm);
          if (dm.length-1 == 0) { //garbage disposal array is empty so need to do pop up for next level
            console.log(document.getElementById("transparent"));
            document.getElementById("transparent").src= "images/level2.png";
            document.getElementById("transparent").style.zIndex = 1;
           }
          console.log(dm.length);
        }
        
        else if (inBin){
          console.log("sorry dude");
          correct = false;
          console.log(document.getElementById("transparent"));
          console.log(items);
          for(var item in items){
            console.log(items[item]);
            if(id === items[item].name)
            {
              console.log(item.hint)
              document.getElementById("transparent").src= items[item].hint;
              document.getElementById("transparent").style.zIndex = 1;
            }
          }
          getElementById.style.top= getBoundingClientRect().top + 500 + "px";
        }
      }
      
      event
    .dataTransfer
    .clearData();
    
  }

  document.body.addEventListener('mousedown', fn, true); 
function fn() {
  document.getElementById("transparent").src = "images/transparent.png";
  document.getElementById("transparent").style.zIndex = -1;
}

  var dm = document.getElementsByClassName('dragme');
for (var i = 0; i < dm.length; i++) {
	dm[i].addEventListener('dragstart', onDragStart, false);
	document.body.addEventListener('dragover', onDragOver, false);
	document.body.addEventListener('drop', onDrop, false);
}
