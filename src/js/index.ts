let contenElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton");
let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("options");

buttonElement.addEventListener("click",
    (getChildrensChildren) => {
        var para = document.createElement("li");
        var element = document.getElementById("newLine");
        var numberOfChildren = element.childElementCount + 1;
        var setNumberOfChildren = numberOfChildren;
        
        switch (selectElement.value) {
            case "UpperCase":
                {
                    var xyz = inputElement.value.toUpperCase();
                    break;
                }
            
            case "LowerCase":
                {
                    var xyz = inputElement.value.toLowerCase();
                    break;
                }
        }
        if(xyz.length != 0)
        {

               para.innerHTML = xyz;
               var dsad= "" + numberOfChildren++;   
               var y = document.getElementById("newLine").append(dsad, para ); 
            //   document.getElementById("newLine").append(dsad);

            }
        else
        {
            window.alert("You must write something");
        }
       
         
        console.log(dsad)
        /*
       for (let i = 0; i <= numberOfChildren;  i++) 
        {
            if(para.childNodes[i].nodeType != 3){
                if(getChildrensChildren)
                    id += getCount(para.childNodes[i],true);
                id++;
            }
            
    
        }
        
        */       

        
    });






