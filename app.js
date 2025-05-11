// let revealBtn = document.querySelector('.personalComputers');
// let btn = document.querySelector('.pcommputers');



// function revealPersonalComputersContent(buttonClicked){
//     let z =  buttonClicked.id;
//     debugger;
//     let x  =revealBtn.style.display;
//      if(revealBtn.style.display ==="none" || revealBtn.style.display ===""){
//         revealBtn.style.display ="flex"
//        document.querySelector('.main1').style.display= "none";
//      }
//      else {
//         revealBtn.style.display = "none";
//      }

//     }
//     btn.addEventListener('click', function () {
//         revealPersonalComputersContent(this); // this is the clicked element
//     });
 //  btn.addEventListener('click',revealPersonalComputersContent,this);



// let smartPhones = document.querySelector('.smartPhones');
// let smartbtn = document.querySelector('.smart');


   let personal_computers = document.querySelector("#pComputers");
   let smart_phones = document.querySelector("#sPhones");
   let hardware_accessories = document.querySelector("#hAccessories");
   let application_software = document.querySelector("#aSoftware");
   let system_software = document.querySelector("#sSoftware");
   let main_page = document.querySelector("#mainPage");
   let elements = [".personalComputers",".smartPhones",".hardWare",".application",".system",".main1"]
   function hideAllExcept (element){
     for(let x of elements){
       if(x !== element)
         document.querySelector(x).style.display= "none";
      }
   }

   function revealContent(buttonClicked){
      switch (buttonClicked){
        case mainPage:
          let main = document.querySelector('.main1');
          if (main.style.display ==="none" || main.style.display ===""){
            main.style.display ="block";
            hideAllExcept(".main1");
          }
          break;

      case pComputers:
        let personalComputers = document.querySelector('.personalComputers');
        if (personalComputers.style.display ==="none" || personalComputers.style.display ===""){
           personalComputers.style.display ="flex";
          hideAllExcept(".personalComputers");
        }
        break;

        case sPhones:
          let smartPhones = document.querySelector('.smartPhones');
          if (smartPhones.style.display ==="none" || smartPhones.style.display ===""){
            smartPhones.style.display ="flex";
            hideAllExcept(".smartPhones");
          }
          break;
          case hAccessories:
            let hardwareAccessories = document.querySelector('.hardWare');
            if (hardwareAccessories.style.display ==="none" || hardwareAccessories.style.display ===""){
              hardwareAccessories.style.display ="flex";
              hideAllExcept(".hardWare");
            }
            break;
            
            case aSoftware:
            let applicationSoftware = document.querySelector('.application');
            if (applicationSoftware.style.display ==="none" || applicationSoftware.style.display ===""){
              applicationSoftware.style.display ="flex";
              hideAllExcept(".application");
            }
            break;  
            case sSoftware:
            let systemSoftware = document.querySelector('.system');
            if (systemSoftware.style.display ==="none" || systemSoftware.style.display ===""){
              systemSoftware.style.display ="flex";
              hideAllExcept(".system");
            }
            break;
      }
    
}


main_page.addEventListener('click',function(){
  revealContent(this)
});

personal_computers.addEventListener('click',function(){
   revealContent(this)
 });

 smart_phones.addEventListener('click',function(){
  revealContent(this)
});

hardware_accessories.addEventListener('click',function(){
  revealContent(this)
});

application_software.addEventListener('click',function(){
  revealContent(this)
});

system_software.addEventListener('click',function(){
  revealContent(this)
});
