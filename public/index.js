// function displayOnLoad(){
//     const parentElem = document.getElementById('listitems')
//     parentElem.innerHTML = ' ';
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const obj = JSON.parse(localStorage.getItem(key));
//         Displaydata(obj);
//     }
// }
function savedtolocalstorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj = {
        name:name,
        email:email,
        phone:phone
    }
    axios.post("http://localhost:1200/login",obj)
    .then((response)=>{
        console.log(response.data)
         Displaydata(response.data.userdetails)

    document.getElementById('nameme').value= '';
    document.getElementById('emailme').value='';
    document.getElementById('phoneme').value='';
    }).catch((err)=>console.log(err))
    //localStorage.setItem('userdetails',obj)//but here only object object are save in localstorage but not correctand key is same everytime so
    //so to change key in local storage and stringyfy object to store in this
    //correct way are this below
    // localStorage.setItem(obj.email,JSON.stringify(obj));
    // Displaydata(obj)
   
}
function Displaydata(obj){
    const parentElem = document.getElementById("listitems");
    const childElem = document.createElement('li');
    // console.log(obj)
    childElem.textContent = obj.myname + '-' + obj.email + '-' + obj.phone;
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "Button";
    deleteBtn.value = "Delete";
    deleteBtn.onclick = ()=>{
        
        parentElem.removeChild(childElem);
        axios.delete(`http://localhost:1200/deleteuser/${obj.id}`)
        .then((response)=>{
            console.log("deleted")
        }).catch((err)=>{
            console.log(err)
        })

    }
    const editBtn = document.createElement('input');
    editBtn.type = 'Button';
    editBtn.value = "edit";
    editBtn.onclick = ()=>{
        //localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
        document.getElementById('nameme').value= obj.myname;
        document.getElementById('emailme').value=obj.email;
        document.getElementById('phoneme').value=obj.phone;
        axios.delete(`http://localhost:1200/deleteuser/${obj.id}`)
        .then((response)=>{
            console.log('in edited option')
        }).catch((err)=>{
            console.log(err)
        })



    }
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}
function displayOnLoad(){
    const parentElem = document.getElementById('listitems')
    parentElem.innerHTML = ' ';
    axios.get("http://localhost:1200/userdetail")
    .then((response)=>{
        for(let i = 0;i<response.data.allusers.length;i++){
            Displaydata(response.data.allusers[i])
        }
        // console.log(response)
    }).catch((err)=>console.log(err))
    
}

window.addEventListener('load', displayOnLoad);