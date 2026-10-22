function addNote() {
    let text=document.getElementById("note").Value; 
    if(text=="")return alert("enter a note.");
    let note=document.createElement("div");
    note.className="note";
    note.innerHTML=
    "<span>"+text+"</span>"+
    'button onclick="deleteNote(this)">delete</button>'+
    '<button onclick="editNote(this)">edit</button>';
}
function editNote(btn) {
    let span=btn.parentElement.querySelector("span");
    let text=prompt("edit note:",span.textContent);
    if(text)span.textContent=text;
}
function deleteNote(btn) {
    btn.parentElement.remove();
}