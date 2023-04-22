let drop=document.getElementById("drop")
let list=document.getElementById("list")


let info=[{id:1,name:"john",profession:"developer",age:"18" },{id:2, name:"jack", profession:"developer",age:"20"},{id:3, name:"karen",profession:"admin", age:"19"}]
function fill()
{
    if(drop.value=="pro")
    {
        alert("select a profession before clicking the button.")
    }
    else{

        let x=drop.value

        
            while (list.lastElementChild) {
                list.removeChild(list.lastElementChild);
        
            }
        for(i in info)
        {
        if(drop.value==info[i].profession)
        {
            console.log(info[i].id)
            var newdiv=document.createElement("dev")
            newdiv.id="d1"
            list.append(newdiv)


            var newspan1=document.createElement("span")
            newspan1.innerText=info[i].id+"."
            newdiv.append(newspan1)

           
              
            
            var newspan2=document.createElement("span")
            newspan2.innerText="Name"+":"+info[i].name
            newdiv.append(newspan2)


            var newspan3=document.createElement("span")
            newspan3.innerText="Profession"+":"+info[i].profession
            newdiv.append(newspan3)


            var newspan4=document.createElement("span")
            newspan4.innerText="Age"+":"+info[i].age
            newdiv.append(newspan4)
            
        }
        }
    }

}


function addu()
{

    let sno=info.length+1
    
    let name1=document.getElementById("name").value
    let prof=document.getElementById("profe").value
    let age1=document.getElementById("age").value
    if(name1==""||prof==""||age1=="")
    {
        alert("enter values all to add")
        return
    }
    info.push({id:sno,name:name1,profession:prof,age:age1})
    console.log(info)
    alert("User added")
}




    
