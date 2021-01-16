
var style;
function onDragStart(event) {
  style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.id);

  event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
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
  dm[index].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	dm[index].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
  
  //dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
  
const garbage = ["brokenGlass", "plasticStraws"];
const compost = ["bananaPeel", "eggshells"];
const recycling = ["shampoo", "newspaper"];

let toSearch = [];
    const id = offset[2];

    console.log(id);
    const draggableElement = document.getElementById(id);
    
    const dropzone = event.target;

    console.log(draggableElement);
      console.log(dropzone);
      if (dropzone.id === "compost") {
        toSearch = compost;
        console.log("assigned c");
      }

      else if (dropzone.id === "garbage") {
        toSearch = garbage;
        console.log("assigned g");
      }
      else if (dropzone.id === "recycling") {
        toSearch = recycling;
      }
      console.log("TOSEARCH " + toSearch);

      if (toSearch.includes(draggableElement.id)) {
        console.log("good job");
        dm.splice(index);
        draggableElement.remove();
      }
      else {
        console.log("sorry dude");
      }
      
      event
    .dataTransfer
    .clearData();
    
  }

  var dm = document.getElementsByClassName('dragme');
for (var i = 0; i < dm.length; i++) {
	dm[i].addEventListener('dragstart', onDragStart, false);
	document.body.addEventListener('dragover', onDragOver, false);
	document.body.addEventListener('drop', onDrop, false);
}