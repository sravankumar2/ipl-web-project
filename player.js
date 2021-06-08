
var ParentPlayer=document.getElementById("players-card");
var header=document.getElementById("team-name")
var urlName=location.href.split('=')[1];
//console.log(urlName)

var playersList=localStorage.getItem(urlName) === null ? [] : JSON.parse(localStorage.getItem(urlName));
playersList.map((item,index)=>{
    createPlayerCard(item);
    header.innerHTML=item.tname;
});

//console.log(ParentPlayer)
function createPlayerCard(list){
    
    var PlayerCard= document.createElement("a");
    PlayerCard.className="player-card";
   
    PlayerCard.href="./teams.html?id="+list.id;
    var PlayerName= document.createElement("h2");
    PlayerName.innerHTML=list.pName;
    var PlayerPhoto= document.createElement("img");
    PlayerPhoto.src=list.pimage;
    PlayerPhoto.alt=list.pName+"image"
    var TeamName= document.createElement("h3")
    TeamName.innerHTML="<span>Team : </span>"+list.tname;
    var Price= document.createElement("h3");
    Price.innerHTML="<span>Price</span> "+list.price;
    var PlayerStatus= document.createElement("h3");
    PlayerStatus.innerHTML="<span>Status : </span>"+list.pStatus;
    var Description= document.createElement("h3");
    Description.innerHTML="<span>Description : </span>"+list.description

    PlayerCard.appendChild(PlayerName);
    PlayerCard.appendChild(PlayerPhoto);
    PlayerCard.appendChild(TeamName);
    PlayerCard.appendChild(Price);
    PlayerCard.appendChild(PlayerStatus);
    PlayerCard.appendChild(Description);
       
       // console.log(PlayerCard)
        ParentPlayer.appendChild(PlayerCard)
}