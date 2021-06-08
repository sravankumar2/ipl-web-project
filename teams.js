
var PlayerInfo=document.getElementById("playerView");
var urlsName=location.href.split('=')[1];

//console.log(urlsName)

var playersDetails=JSON.parse(localStorage.getItem("player-list"));
playersDetails.map((item)=>{
   // console.log(item.id)
    if(item.id==urlsName)
   
    createPlayerDtailsCard(item);
});

//console.log(playersDetails)
function createPlayerDtailsCard(list){
    var PlayerCard= document.createElement("div");
    PlayerCard.className="playerName";  
    var PlayerName= document.createElement("h2");
    PlayerName.innerHTML=list.pName;
    var PlayerPhoto= document.createElement("img");
    PlayerPhoto.src=list.pimage;
    PlayerPhoto.alt=list.pName+"image";
    var TeamName= document.createElement("h3")
    TeamName.innerHTML="<span>Team : </span>"+list.tname;
    var Price= document.createElement("p");
    Price.innerHTML="<span>Auction Price </span>"+list.price;
    var PlayerStatus= document.createElement("h3");
    PlayerStatus.innerHTML="<span>Status : </span>"+list.pStatus;
    var Description= document.createElement("p");
    Description.innerHTML="<span>Description : </span>"+list.description
    PlayerCard.appendChild(PlayerName);
    PlayerCard.appendChild(PlayerPhoto);
    PlayerCard.appendChild(TeamName);
    PlayerCard.appendChild(Price);
    PlayerCard.appendChild(PlayerStatus);
    PlayerCard.appendChild(Description);
       
       // console.log(PlayerCard)
        PlayerInfo.appendChild(PlayerCard)
}