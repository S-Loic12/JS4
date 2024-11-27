// function logsubmit(event){
//     log.textcontent=`Tache ajouter! Timestamp:${event.timestamp}`;
//     event.preventDefault();
// }

// const input= document.getElementById('Taches');
// const button= document.getElementById('MK3');
// const taskList= document.getElementById('MK2');
let form= document.getElementById('MK1')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let listcontainer= document.getElementById('MK3');
    let Task =document.getElementById('Taches');
    let li=document.createElement('li');
    let value= Taches.value;
    li.textContent=value;
    listcontainer.appendChild(li);

    let btn=document.createElement("button")
    btn.textContent= "x";
    btn.addEventListener("click", function () {
        if (li) { 
            li.remove();
        }
    });
    


    let editBtn= document.createElement("button")
    editBtn.textContent="Edit";
    editBtn.addEventListener("click", function() {
        let currentValue=li.firstChild.textContent;
        let input=document.createElement("input")
        input.type="text";
        input.value=currentValue;
        
        let saveBtn=document.createElement("button");
        saveBtn.textContent="save";
        saveBtn.addEventListener("click", function() {
            li.textContent= input.value; 
            li.appendChild(btn)
            li.appendChild(editBtn);
        });
        li.textContent='';
        li.appendChild(input);
        li.appendChild(saveBtn);

    });

    li.appendChild(editBtn)
    li.appendChild(btn)

    Task.value='';
})
