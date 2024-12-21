addpara = () =>{
    var text = document.getElementById("Task1").value;
    
    if(text === ''){
        const alert1 = document.getElementById("alert");
        const alert2 = document.createTextNode("Enter a  Valid Task");
        alert1.appendChild(alert2);
        return;
    }
    
    
    var parent = document.getElementById("tasks");
    var child = document.createElement("p");
    child.className = "newP";
    child.setAttribute('draggable',true);
    child.setAttribute('ondragstart','onDragStart(event);')
    child.setAttribute('id','forDrop')
   
    var tNode = document.createTextNode(text);
    child.appendChild(tNode);
    parent.appendChild(child);
    
    updateValue = () =>{
        const Parent = document.getElementById("tasks");
        const totalNum = Parent.childNodes.length;
        const span = document.getElementById("value1");
        span.textContent = totalNum;
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete";
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () =>{
        parent.removeChild(child)
        updateValue();
    } 
    child.appendChild(deleteBtn);


    document.getElementById("Task1").value = "";

    updateValue();

    onDragStart = (event) => {
        console.log("Drag-Start");
        // event.target.classlist +=(" Hold");
        event.dataTransfer.setData('text', event.target.id)
        setTimeout(()=>{
            event.target.classList.add("Hide");
        },0);
    }
    
    onDragOver = (event) => {
        console.log("Drag-End");
        event.preventDefault();
    }

    onDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        const droP = document.getElementById(id);
        
        // const dropZone = event.target;
        // dropZone.appendChild(droP)

        if(event.target.classList.contains("toAdd2") || event.target.classList.contains("toAdd2")){
            event.target.appendChild(droP);
        }
        droP.classList.remove("Hide");
        event.dataTransfer.clearData();
    };

        //  const newDiv = document.createElement("div");
        // newDiv.className = ("newdiv");
        // newDiv.textContent = "Drag Here to Remove Task";
        // document.getElementById("dBack").appendChild(newDiv);
      
    

    }

inputClear=()=>{
    const alert1 = document.getElementById("alert");
    alert1.innerHTML = '';
}


document.getElementById("Task1").addEventListener("keypress", (event) =>{
    if (event.key === "Enter") {
        addpara();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") {
        const parent = document.getElementById("tasks");
        const lastChild = parent.lastElementChild;
        if (lastChild) {
            parent.removeChild(lastChild); 
        }
        updateValue();
    }
});



    // const dropDiv = document.getElementsByClassName("toAdd");
    // console.log(dropDiv)
    
    //     toAdd.addEventListener('dragover', (e)=>{
    //         e.preventDefault();
    //         console.log("Drag-Over");
    //     });
    //     toAdd.addEventListener('dragenter', ()=>{
    //         console.log("Drag-Enter");
    //     });
    //     toAdd.addEventListener('dragleave', ()=>{
    //         console.log("Drag-Leave");
    //     });
    //     // This Drop Event is Not Working.....?
    //     toAdd.addEventListener('drop', (e)=>{
    //         e.preventDefault();
    //         const drop = document.getElementById(forDrop);
    //         toAdd.appendChild(drop); 
            
    //     });


