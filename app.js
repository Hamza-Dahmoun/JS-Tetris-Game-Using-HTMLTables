//set id attributes for each cell to make it easy to track
var td = document.getElementsByTagName("td");
for (let i = 0; i < td.length; i++) {
    td[i].setAttribute("id", "cell" + (i + 1));
    //td[i].innerText = i + 1;
}
/*
var arr = [];
for (let i = 0; i < td.length; i++) {
    arr.push({ id: "cell" + parseInt(td[i].innerText), leftBrotherId: (parseInt(td[i].innerText)-1) % 7 == 0 ? "" : "cell" + (parseInt(td[i].innerText)-1), rightBrotherId: parseInt(td[i].innerText) % 7 == 0 ? "" : "cell" + (parseInt(td[i].innerText)+1), brotherBeneathId: "cell" + (parseInt(td[i].innerText) + 7) });
}
console.log(arr);
var stringToBuildTable = "";
for (let i = 0; i < arr.length; i++) {
    stringToBuildTable = stringToBuildTable + "{id:\"" + arr[i].id + "\", leftBrotherId:\"" + arr[i].leftBrotherId + "\", rightBrotherId:\"" + arr[i].rightBrotherId + "\", brotherBeneathId:\"" + arr[i].brotherBeneathId + "\"},"
}
*/
//below table is built using above commented code, it contains each td id along with its brother that can receive its move
    const table =
    {
        cell1: {leftBrotherId:"", rightBrotherId:"cell2", brotherBeneathId:"cell8"},
        cell2: {leftBrotherId:"cell1", rightBrotherId:"cell3", brotherBeneathId:"cell9"},
        cell3: {leftBrotherId:"cell2", rightBrotherId:"cell4", brotherBeneathId:"cell10"},
        cell4: {leftBrotherId:"cell3", rightBrotherId:"cell5", brotherBeneathId:"cell11"},
        cell5: {leftBrotherId:"cell4", rightBrotherId:"cell6", brotherBeneathId:"cell12"},
        cell6: {leftBrotherId:"cell5", rightBrotherId:"cell7", brotherBeneathId:"cell13"},
        cell7: {leftBrotherId:"cell6", rightBrotherId:"", brotherBeneathId:"cell14"},
        cell8: {leftBrotherId:"", rightBrotherId:"cell9", brotherBeneathId:"cell15"},
        cell9: {leftBrotherId:"cell8", rightBrotherId:"cell10", brotherBeneathId:"cell16"},cell10: {leftBrotherId:"cell9", rightBrotherId:"cell11", brotherBeneathId:"cell17"},cell11: {leftBrotherId:"cell10", rightBrotherId:"cell12", brotherBeneathId:"cell18"},cell12: {leftBrotherId:"cell11", rightBrotherId:"cell13", brotherBeneathId:"cell19"},cell13: {leftBrotherId:"cell12", rightBrotherId:"cell14", brotherBeneathId:"cell20"},cell14: {leftBrotherId:"cell13", rightBrotherId:"", brotherBeneathId:"cell21"},cell15: {leftBrotherId:"", rightBrotherId:"cell16", brotherBeneathId:"cell22"},cell16: {leftBrotherId:"cell15", rightBrotherId:"cell17", brotherBeneathId:"cell23"},cell17: {leftBrotherId:"cell16", rightBrotherId:"cell18", brotherBeneathId:"cell24"},cell18: {leftBrotherId:"cell17", rightBrotherId:"cell19", brotherBeneathId:"cell25"},cell19: {leftBrotherId:"cell18", rightBrotherId:"cell20", brotherBeneathId:"cell26"},cell20: {leftBrotherId:"cell19", rightBrotherId:"cell21", brotherBeneathId:"cell27"},cell21: {leftBrotherId:"cell20", rightBrotherId:"", brotherBeneathId:"cell28"},cell22: {leftBrotherId:"", rightBrotherId:"cell23", brotherBeneathId:"cell29"},cell23: {leftBrotherId:"cell22", rightBrotherId:"cell24", brotherBeneathId:"cell30"},cell24: {leftBrotherId:"cell23", rightBrotherId:"cell25", brotherBeneathId:"cell31"},cell25: {leftBrotherId:"cell24", rightBrotherId:"cell26", brotherBeneathId:"cell32"},cell26: {leftBrotherId:"cell25", rightBrotherId:"cell27", brotherBeneathId:"cell33"},cell27: {leftBrotherId:"cell26", rightBrotherId:"cell28", brotherBeneathId:"cell34"},cell28: {leftBrotherId:"cell27", rightBrotherId:"", brotherBeneathId:"cell35"},cell29: {leftBrotherId:"", rightBrotherId:"cell30", brotherBeneathId:"cell36"},cell30: {leftBrotherId:"cell29", rightBrotherId:"cell31", brotherBeneathId:"cell37"},cell31: {leftBrotherId:"cell30", rightBrotherId:"cell32", brotherBeneathId:"cell38"},cell32: {leftBrotherId:"cell31", rightBrotherId:"cell33", brotherBeneathId:"cell39"},cell33: {leftBrotherId:"cell32", rightBrotherId:"cell34", brotherBeneathId:"cell40"},cell34: {leftBrotherId:"cell33", rightBrotherId:"cell35", brotherBeneathId:"cell41"},cell35: {leftBrotherId:"cell34", rightBrotherId:"", brotherBeneathId:"cell42"},cell36: {leftBrotherId:"", rightBrotherId:"cell37", brotherBeneathId:"cell43"},cell37: {leftBrotherId:"cell36", rightBrotherId:"cell38", brotherBeneathId:"cell44"},cell38: {leftBrotherId:"cell37", rightBrotherId:"cell39", brotherBeneathId:"cell45"},cell39: {leftBrotherId:"cell38", rightBrotherId:"cell40", brotherBeneathId:"cell46"},cell40: {leftBrotherId:"cell39", rightBrotherId:"cell41", brotherBeneathId:"cell47"},cell41: {leftBrotherId:"cell40", rightBrotherId:"cell42", brotherBeneathId:"cell48"},cell42: {leftBrotherId:"cell41", rightBrotherId:"", brotherBeneathId:"cell49"},cell43: {leftBrotherId:"", rightBrotherId:"cell44", brotherBeneathId:"cell50"},cell44: {leftBrotherId:"cell43", rightBrotherId:"cell45", brotherBeneathId:"cell51"},cell45: {leftBrotherId:"cell44", rightBrotherId:"cell46", brotherBeneathId:"cell52"},cell46: {leftBrotherId:"cell45", rightBrotherId:"cell47", brotherBeneathId:"cell53"},cell47: {leftBrotherId:"cell46", rightBrotherId:"cell48", brotherBeneathId:"cell54"},cell48: {leftBrotherId:"cell47", rightBrotherId:"cell49", brotherBeneathId:"cell55"},cell49: {leftBrotherId:"cell48", rightBrotherId:"", brotherBeneathId:"cell56"},cell50: {leftBrotherId:"", rightBrotherId:"cell51", brotherBeneathId:"cell57"},cell51: {leftBrotherId:"cell50", rightBrotherId:"cell52", brotherBeneathId:"cell58"},cell52: {leftBrotherId:"cell51", rightBrotherId:"cell53", brotherBeneathId:"cell59"},cell53: {leftBrotherId:"cell52", rightBrotherId:"cell54", brotherBeneathId:"cell60"},cell54: {leftBrotherId:"cell53", rightBrotherId:"cell55", brotherBeneathId:"cell61"},cell55: {leftBrotherId:"cell54", rightBrotherId:"cell56", brotherBeneathId:"cell62"},cell56: {leftBrotherId:"cell55", rightBrotherId:"", brotherBeneathId:"cell63"},cell57: {leftBrotherId:"", rightBrotherId:"cell58", brotherBeneathId:"cell64"},cell58: {leftBrotherId:"cell57", rightBrotherId:"cell59", brotherBeneathId:"cell65"},cell59: {leftBrotherId:"cell58", rightBrotherId:"cell60", brotherBeneathId:"cell66"},cell60: {leftBrotherId:"cell59", rightBrotherId:"cell61", brotherBeneathId:"cell67"},cell61: {leftBrotherId:"cell60", rightBrotherId:"cell62", brotherBeneathId:"cell68"},cell62: {leftBrotherId:"cell61", rightBrotherId:"cell63", brotherBeneathId:"cell69"},cell63: {leftBrotherId:"cell62", rightBrotherId:"", brotherBeneathId:"cell70"},cell64: {leftBrotherId:"", rightBrotherId:"cell65", brotherBeneathId:"cell71"},cell65: {leftBrotherId:"cell64", rightBrotherId:"cell66", brotherBeneathId:"cell72"},cell66: {leftBrotherId:"cell65", rightBrotherId:"cell67", brotherBeneathId:"cell73"},cell67: {leftBrotherId:"cell66", rightBrotherId:"cell68", brotherBeneathId:"cell74"},cell68: {leftBrotherId:"cell67", rightBrotherId:"cell69", brotherBeneathId:"cell75"},cell69: {leftBrotherId:"cell68", rightBrotherId:"cell70", brotherBeneathId:"cell76"},cell70: {leftBrotherId:"cell69", rightBrotherId:"", brotherBeneathId:"cell77"},cell71: {leftBrotherId:"", rightBrotherId:"cell72", brotherBeneathId:"cell78"},cell72: {leftBrotherId:"cell71", rightBrotherId:"cell73", brotherBeneathId:"cell79"},cell73: {leftBrotherId:"cell72", rightBrotherId:"cell74", brotherBeneathId:"cell80"},cell74: {leftBrotherId:"cell73", rightBrotherId:"cell75", brotherBeneathId:"cell81"},cell75: {leftBrotherId:"cell74", rightBrotherId:"cell76", brotherBeneathId:"cell82"},cell76: {leftBrotherId:"cell75", rightBrotherId:"cell77", brotherBeneathId:"cell83"},cell77: {leftBrotherId:"cell76", rightBrotherId:"", brotherBeneathId:"cell84"},cell78: {leftBrotherId:"", rightBrotherId:"cell79", brotherBeneathId:"cell85"},cell79: {leftBrotherId:"cell78", rightBrotherId:"cell80", brotherBeneathId:"cell86"},cell80: {leftBrotherId:"cell79", rightBrotherId:"cell81", brotherBeneathId:"cell87"},cell81: {leftBrotherId:"cell80", rightBrotherId:"cell82", brotherBeneathId:"cell88"},cell82: {leftBrotherId:"cell81", rightBrotherId:"cell83", brotherBeneathId:"cell89"},cell83: {leftBrotherId:"cell82", rightBrotherId:"cell84", brotherBeneathId:"cell90"},cell84: {leftBrotherId:"cell83", rightBrotherId:"", brotherBeneathId:"cell91"},
    }

    //lets add click event just to check if 'table' is built correctly
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("click", tdClick);
    }
    function tdClick(event){
        //this function will colorize the brothers of the td clicked by the user
                //so lets colorize (for 1 second) its concerned brothers who will receive his movements
                document.getElementById(table[event.target.id].leftBrotherId).className="cell-on";
                document.getElementById(table[event.target.id].rightBrotherId).className="cell-on";
                document.getElementById(table[event.target.id].brotherBeneathId).className="cell-on";
                setTimeout(function(){
                document.getElementById(table[event.target.id].leftBrotherId).className="cell-off";
                document.getElementById(table[event.target.id].rightBrotherId).className="cell-off";
                document.getElementById(table[event.target.id].brotherBeneathId).className="cell-off";
                }, 1000);
    }

    //********** Players Objects ***********//
    //a Player is defined by a set of cells
    var players = {
        0: {cell1_Id: "cell4"}//Dot
        ,1: {cell1_Id: "cell4", cell2_Id: "cell5"}//Twp Dots
        ,2: {cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5"}//Three Dots in row
        ,3: {cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5", cell4_Id: "cell6"}//Four Dots in row
        ,4: {cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5", cell4_Id: "cell12"}//Four Dots form 'L'
        ,5: {cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell11", cell4_Id: "cell12"}//Four Dots form square
        ,6: {cell1_Id: "cell3", cell2_Id: "cell10", cell3_Id: "cell11", cell4_Id: "cell12"}//Four Dots form _|_
        ,7: {cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell11", cell4_Id: "cell12"}//Four Dots form -|_
    }
    function choosePlayerRandomly(){
        var player = Math.floor(Math.random()*8); 
        //console.log(player);    
        switchOnPlayer(player);   
    }
    choosePlayerRandomly();
    var currentPlayerObject;
    function switchOnPlayer(playerNumber){
        //we'll user playerNumber parameter to get the player object from 'players' object
        //then we'll use all the IDs stored in the player object to switch on the corresponding cells
        currentPlayerObject = players[playerNumber];
        let player_propertiesCount = Object.keys(currentPlayerObject).length;
        //console.log(currentPlayerObject); 
        //console.log(player_propertiesCount);
        for(let i=1; i<=player_propertiesCount; i++){
            let idPropertyName_in_currentPlayer = "cell"+i+"_Id";
            let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
            document.getElementById(cellID_in_currentPlayer).className = "cell-on";
        }
        //lets start moving this new player down every one second
        //movePlayerDown(currentPlayerObject);
    }

    function movePlayerDown(currentPlayerObject){
        //currentPlayerObject is an object that have up-to four properties
        //this properties stpre the value of cellID
        //by moving down a player we mean moving down all its cells he is composed of
        //which means each property of currentPlayerObject is going to have a new cellID which is the beneathBrotherID 
        //lets start
        
        
        //Now lets switch off all the cells of the current player
        switchoffPlayerCells_andAssignNewCells(currentPlayerObject);        
        
        //Now lets switch on all the new cells of the current player that were considered as 'brotherBeneath' in the previous for loop        
        let player_propertiesCount = Object.keys(currentPlayerObject).length;
        for(let i=1; i<=player_propertiesCount; i++){
            //lets build the appropriate property name
            let idPropertyName_in_currentPlayer = "cell"+i+"_Id";
            //now lets get this cellID
            let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
            //now lets use cellID_in_currentPlayer to switch it on in the UI
            document.getElementById(cellID_in_currentPlayer).className = "cell-on";
        } 
    }
    function switchoffPlayerCells_andAssignNewCells(currentPlayerObject){
        //this function switch off all the cells of the player, and assign new cells to it (cells beneath)
        
        //1- getting the number of cells (td tags) in the current player
        let player_propertiesCount = Object.keys(currentPlayerObject).length;
        
        //2- Now lets proceed
        for(let i=1; i<=player_propertiesCount; i++){
            //lets build the appropriate property name
            let idPropertyName_in_currentPlayer = "cell"+i+"_Id";
            //now lets get this cellID
            let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
            //now lets use cellID_in_currentPlayer to switch it off in the UI
            document.getElementById(cellID_in_currentPlayer).className = "cell-off";
            //now lets use cellID_in_currentPlayer to get its brotherBeneathID from'table' object
            let brotherBeneath_thisCell = table[cellID_in_currentPlayer].brotherBeneathId;
            //now lets take this brotherBeneath_thisCell as a cell of the currentPlayerObject instead of cellID_in_currentPlayer
            currentPlayerObject[idPropertyName_in_currentPlayer] = brotherBeneath_thisCell;
            //up to now, we: switched off a cell, then we considered its beneath brother instead of it.. we'll switch on this beneathBrother in the next for loop
        }
    }
    //**************************************//

    //*************** keyDown events ***************/
    document.addEventListener("keydown", playerBehave);

    function playerBehave(e){
        //Based on the key pressed, this function make the player move down/left/right or just make it rotate
        if(e.keyCode == 40){
            //move down
            movePlayerDown(currentPlayerObject);
        }
    }