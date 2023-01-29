const container=document.querySelector('.container');
const  btn = document.getElementById('addBtn');
const btnDiv =document.querySelector('.btn');


function getVal(){
 return JSON.parse(localStorage.getItem('notes') || "[]");
}
getVal().forEach(element => {
  const textElement = createTextElement(element.id,element.note);
  container.insertBefore(textElement,btnDiv);
});

function createTextElement(id,note){
  const textElement = document.createElement('textarea');
  textElement.classList.add('notes');
  textElement.value = note;
  textElement.placeholder="Your notes here";

  textElement.addEventListener("change",()=>{
    updateNote(id,textElement.value);
  });

  textElement.addEventListener("dblclick",()=>{
    const check = confirm("Do you sure?");
    if(check){
      deleteNote(id,textElement);
    }
  })
  textElement.addEventListener("touchmove",()=>{
    const check = confirm("Do you sure?");
    if(check){
      deleteNote(id,textElement);
    }
  })

  return textElement;
}

if(btn){
  btn.addEventListener('click',()=>{
    const notes=getVal();
    let obj={
      id:Math.floor(Math.random()*100000),
      note:""
    }
    const textElement = createTextElement(obj.id,obj.note);
    container.insertBefore(textElement,btnDiv);
    notes.push(obj);
    saveNotes(notes);
  })
}

function saveNotes(notes){
  localStorage.setItem("notes",JSON.stringify(notes));
}

function updateNote(id,note){
  const notes = getVal();
  const UpdateVal = notes.filter((note)=>note.id==id)[0];
  UpdateVal.note = note;
  saveNotes(notes);

}

function deleteNote(id,textElement){
  const notes = getVal().filter((note)=>note.id!=id);
  saveNotes(notes);
  container.removeChild(textElement);
}