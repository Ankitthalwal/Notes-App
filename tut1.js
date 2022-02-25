console.log("this is tut");
showNotes;
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = '';
  // console.log(notesObj);
})
//    '''''''''''''''''Function  to showNotes.............>.............
showNotes();

function showNotes() {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let html = '';
  notesObj.forEach(function (element, index) {
    html += `
 <div class="  noteCard my-2 mx-2" style="width: 18rem;">
                
<div class="card-body">
  <h5 class="card-title">Note ${index + 1} </h5>
  <p class="card-text">.${element}</h5>
  <button   id='${index}"  onclick="deleteNote(this.id)"class="btn btn-primary">delete Notes</button>
    
</div>
</div>
  `;
  });
  //   when   the Forloop complete his work
  let notesElm = document.getElementById('notes');
  
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  }
  
  else{
    notes.Elm.innerHTML = `nothing to show!  use "Add a Note" section above to add notes.`;
  }
}

//.................Function to Delete a Note.........
function  deleteNote(index){
   console.log('I am deleting' ,index);
  

// it is for to update local storage
let notes = localStorage.getItem('notes');

if (notes == null) {
  notesObj = [];
}
else {
  notesObj = JSON.parse(notes);
} 
notesObj.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(notesObj));

showNotes();
}
//     making search button effective...................

 let search = document.getElementById('searchTxt');
search.addEventListener("input" ,function(){
  let inputval= search.value.toLowerCase();
  // 
  // console.log('Input Event fired!', inputval);//   this above code give input event fired when we search anything in search button...so we used inputvalue
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName('p')[0].innerText;
    if(cardTxt.includes(inputval)){
      element.style.display = 'block';
    }else{
      element.style.display='none';
    }
  })
});