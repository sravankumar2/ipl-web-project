var teamsList=localStorage.getItem('team-list') === null ? [] : JSON.parse(localStorage.getItem('team-list'));
var mainElement=document.getElementById("main-element");

teamsList.map((item,index)=>{
    createTeamCard(item,index)
    var dropdownList= document.getElementById("dropdown");
    
        createOption(item,index)
    
    function createOption(x,y){
        var Opt= document.createElement("option");
        Opt.innerText=x.name;
        Opt.name=x.name;        
        dropdownList.appendChild(Opt)
    //     //console.log(dropdownList)    
       
    }
})
//console.log(teamsList.length)
var Button=document.getElementById("btn");

Button.onclick=function(){
   
   var Form= document.getElementById("aaa");
   Form.classList.toggle("toggleClass"); 
//    mainElement.classList.toggle("none");
     
}
var Team= document.getElementById("teamForm");
var newForm= document.getElementById("new-form");
var Player= document.getElementById("playerForm");
var PlayerForm=document.getElementById("player-form")
Team.onclick=function(){       
   
        newForm.style.display="block"; 
        PlayerForm.style.display="none"     
    
}

Player.onclick=function(){  
      
    newForm.style.display="none";
    PlayerForm.style.display="block"
   

}
var submit1= document.getElementById("Submit1-btn");
var submit2= document.getElementById("Submit2-btn");
submit1.onclick=function(e){
       
    
    var name=document.getElementById("name").value;
    var icon=document.getElementById("icon").value;
    //var count=document.getElementById("count").value;
    var batsman=document.getElementById("batsman").value;
    var bowler=document.getElementById("bowler").value;
    var wins=document.getElementById("wins").value;
    var playersList=localStorage.getItem(name) === null ? [] : JSON.parse(localStorage.getItem(name));
    var count= playersList.length;
   // alert(count)
   // console.log(count)
    var mObj={  
        
        name:name,
        icon:icon,
        count:count,
        batsman:batsman,
        bowler:bowler,
        wins:wins,
    }
    
    var teamsList=localStorage.getItem('team-list') === null ? [] : JSON.parse(localStorage.getItem('team-list'));
     teamsList.push(mObj);
    
      localStorage.setItem("team-list", JSON.stringify(teamsList));
             
      createTeamCard(teamsList,count)  
    //alert(name+" Team created" )
}
submit2.onclick=function(e){
    
        var pName=document.getElementById("pName").value;
        var pimage=document.getElementById("pimage").value;
        var Dropdown=document.getElementById("dropdown")
        var TName=Dropdown.value;      
        var cost=document.getElementById("cost").value;
        
        var pchecked1= document.getElementById("playing")
        var pchecked2=document.getElementById("bench")
        if(pchecked1.checked){
            var pStatus=pchecked1.value
        }
        else if(pchecked2.checked){
            var pStatus=pchecked2.value
        }
        var Description1 = document.getElementById("Batsman")
        
        var Description2 = document.getElementById("Bowler")
        var Description3 = document.getElementById("Allrounder")
        if(Description1.checked){
            var Description=Description1.value
        }
        else if(Description2.checked){
            var Description=Description2.value
        }
        else if(Description3.checked){
            var Description=Description3.value
        
         }
        var playersList=localStorage.getItem('player-list') === null ? [] : JSON.parse(localStorage.getItem('player-list'));
           var x=playersList.length+1;
        var pObj={
            id:x,
            pName:pName,
            pimage:pimage,
            tname:TName,
            price:cost,
            pStatus:pStatus,
            description:Description,
        }
  
        playersList.push(pObj);    

         localStorage.setItem("player-list", JSON.stringify(playersList));               
   
        var obj=localStorage.getItem(pObj.tname) === null ? [] : JSON.parse(localStorage.getItem(pObj.tname));
        count=obj.length+1;   
        
        obj.push(pObj);
       
        localStorage.setItem(TName, JSON.stringify(obj));        
     alert("player added to "+TName+" team")
    }
   
//<-------creating team card------>
function createTeamCard(teamsList1,id,count){    
    var obj=localStorage.getItem(teamsList1.name) === null ? [] : JSON.parse(localStorage.getItem(teamsList1.name));
    count=obj.length;
    var TeamCard= document.createElement("a");
    TeamCard.className="team-card";
    TeamCard.id=id+1;    
    TeamCard.href="./player.html?id="+teamsList1.name;
    var TeamName= document.createElement("h2");
    TeamName.innerHTML=teamsList1.name;
    var TeamPhoto= document.createElement("img");
    TeamPhoto.src=teamsList1.icon;
    TeamPhoto.alt=teamsList1.name+"image"
    var PlayerCount= document.createElement("p")
    PlayerCount.innerHTML="<span>Players</span>"+ " : " +count;
    var TopBatsman= document.createElement("h3");
    TopBatsman.innerHTML="<span>Top Batsman</span>"+ " : " +teamsList1.batsman;
    var TopBowler= document.createElement("h3");
    TopBowler.innerHTML="<span>Top Bowler</span>"+ " : " +teamsList1.bowler;
    var Wins= document.createElement("p");
    Wins.innerHTML="<span>Champions</span>"+ " : " +teamsList1.wins

    TeamCard.appendChild(TeamName);
    TeamCard.appendChild(TeamPhoto);
    TeamCard.appendChild(PlayerCount);
    TeamCard.appendChild(TopBatsman);
    TeamCard.appendChild(TopBowler);
    TeamCard.appendChild(Wins);
        
   
   // console.log(TeamCard)
    mainElement.appendChild(TeamCard)
}
//<-----search functionality----->
var searchElement=document.getElementById("search-element");
searchElement.onkeyup=function(e){   

   
    if(e.key === "Enter"){
     
    const inputValue=searchElement.value.toUpperCase();
    
    
    var playerDetails=localStorage.getItem('player-list') === null ? [] : JSON.parse(localStorage.getItem('player-list'));
   // console.log("plahk"+playerDetails)
    
    for(let i=0; i<=playerDetails.length; i++){
       
        var td=playerDetails[i].tname;
        
      
        if(td){
           
         if( td.toUpperCase().includes(inputValue)){
             //alert(td)
           location.assign("./player.html?id="+td);
         
          }
        }
    }
}
}

