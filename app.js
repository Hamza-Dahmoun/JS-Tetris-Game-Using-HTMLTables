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
    cell1: { leftBrotherId: "", rightBrotherId: "cell2", brotherBeneathId: "cell8" },
    cell2: { leftBrotherId: "cell1", rightBrotherId: "cell3", brotherBeneathId: "cell9" },
    cell3: { leftBrotherId: "cell2", rightBrotherId: "cell4", brotherBeneathId: "cell10" },
    cell4: { leftBrotherId: "cell3", rightBrotherId: "cell5", brotherBeneathId: "cell11" },
    cell5: { leftBrotherId: "cell4", rightBrotherId: "cell6", brotherBeneathId: "cell12" },
    cell6: { leftBrotherId: "cell5", rightBrotherId: "cell7", brotherBeneathId: "cell13" },
    cell7: { leftBrotherId: "cell6", rightBrotherId: "", brotherBeneathId: "cell14" },
    cell8: { leftBrotherId: "", rightBrotherId: "cell9", brotherBeneathId: "cell15" },
    cell9: { leftBrotherId: "cell8", rightBrotherId: "cell10", brotherBeneathId: "cell16" }, cell10: { leftBrotherId: "cell9", rightBrotherId: "cell11", brotherBeneathId: "cell17" }, cell11: { leftBrotherId: "cell10", rightBrotherId: "cell12", brotherBeneathId: "cell18" }, cell12: { leftBrotherId: "cell11", rightBrotherId: "cell13", brotherBeneathId: "cell19" }, cell13: { leftBrotherId: "cell12", rightBrotherId: "cell14", brotherBeneathId: "cell20" }, cell14: { leftBrotherId: "cell13", rightBrotherId: "", brotherBeneathId: "cell21" }, cell15: { leftBrotherId: "", rightBrotherId: "cell16", brotherBeneathId: "cell22" }, cell16: { leftBrotherId: "cell15", rightBrotherId: "cell17", brotherBeneathId: "cell23" }, cell17: { leftBrotherId: "cell16", rightBrotherId: "cell18", brotherBeneathId: "cell24" }, cell18: { leftBrotherId: "cell17", rightBrotherId: "cell19", brotherBeneathId: "cell25" }, cell19: { leftBrotherId: "cell18", rightBrotherId: "cell20", brotherBeneathId: "cell26" }, cell20: { leftBrotherId: "cell19", rightBrotherId: "cell21", brotherBeneathId: "cell27" }, cell21: { leftBrotherId: "cell20", rightBrotherId: "", brotherBeneathId: "cell28" }, cell22: { leftBrotherId: "", rightBrotherId: "cell23", brotherBeneathId: "cell29" }, cell23: { leftBrotherId: "cell22", rightBrotherId: "cell24", brotherBeneathId: "cell30" }, cell24: { leftBrotherId: "cell23", rightBrotherId: "cell25", brotherBeneathId: "cell31" }, cell25: { leftBrotherId: "cell24", rightBrotherId: "cell26", brotherBeneathId: "cell32" }, cell26: { leftBrotherId: "cell25", rightBrotherId: "cell27", brotherBeneathId: "cell33" }, cell27: { leftBrotherId: "cell26", rightBrotherId: "cell28", brotherBeneathId: "cell34" }, cell28: { leftBrotherId: "cell27", rightBrotherId: "", brotherBeneathId: "cell35" }, cell29: { leftBrotherId: "", rightBrotherId: "cell30", brotherBeneathId: "cell36" }, cell30: { leftBrotherId: "cell29", rightBrotherId: "cell31", brotherBeneathId: "cell37" }, cell31: { leftBrotherId: "cell30", rightBrotherId: "cell32", brotherBeneathId: "cell38" }, cell32: { leftBrotherId: "cell31", rightBrotherId: "cell33", brotherBeneathId: "cell39" }, cell33: { leftBrotherId: "cell32", rightBrotherId: "cell34", brotherBeneathId: "cell40" }, cell34: { leftBrotherId: "cell33", rightBrotherId: "cell35", brotherBeneathId: "cell41" }, cell35: { leftBrotherId: "cell34", rightBrotherId: "", brotherBeneathId: "cell42" }, cell36: { leftBrotherId: "", rightBrotherId: "cell37", brotherBeneathId: "cell43" }, cell37: { leftBrotherId: "cell36", rightBrotherId: "cell38", brotherBeneathId: "cell44" }, cell38: { leftBrotherId: "cell37", rightBrotherId: "cell39", brotherBeneathId: "cell45" }, cell39: { leftBrotherId: "cell38", rightBrotherId: "cell40", brotherBeneathId: "cell46" }, cell40: { leftBrotherId: "cell39", rightBrotherId: "cell41", brotherBeneathId: "cell47" }, cell41: { leftBrotherId: "cell40", rightBrotherId: "cell42", brotherBeneathId: "cell48" }, cell42: { leftBrotherId: "cell41", rightBrotherId: "", brotherBeneathId: "cell49" }, cell43: { leftBrotherId: "", rightBrotherId: "cell44", brotherBeneathId: "cell50" }, cell44: { leftBrotherId: "cell43", rightBrotherId: "cell45", brotherBeneathId: "cell51" }, cell45: { leftBrotherId: "cell44", rightBrotherId: "cell46", brotherBeneathId: "cell52" }, cell46: { leftBrotherId: "cell45", rightBrotherId: "cell47", brotherBeneathId: "cell53" }, cell47: { leftBrotherId: "cell46", rightBrotherId: "cell48", brotherBeneathId: "cell54" }, cell48: { leftBrotherId: "cell47", rightBrotherId: "cell49", brotherBeneathId: "cell55" }, cell49: { leftBrotherId: "cell48", rightBrotherId: "", brotherBeneathId: "cell56" }, cell50: { leftBrotherId: "", rightBrotherId: "cell51", brotherBeneathId: "cell57" }, cell51: { leftBrotherId: "cell50", rightBrotherId: "cell52", brotherBeneathId: "cell58" }, cell52: { leftBrotherId: "cell51", rightBrotherId: "cell53", brotherBeneathId: "cell59" }, cell53: { leftBrotherId: "cell52", rightBrotherId: "cell54", brotherBeneathId: "cell60" }, cell54: { leftBrotherId: "cell53", rightBrotherId: "cell55", brotherBeneathId: "cell61" }, cell55: { leftBrotherId: "cell54", rightBrotherId: "cell56", brotherBeneathId: "cell62" }, cell56: { leftBrotherId: "cell55", rightBrotherId: "", brotherBeneathId: "cell63" }, cell57: { leftBrotherId: "", rightBrotherId: "cell58", brotherBeneathId: "cell64" }, cell58: { leftBrotherId: "cell57", rightBrotherId: "cell59", brotherBeneathId: "cell65" }, cell59: { leftBrotherId: "cell58", rightBrotherId: "cell60", brotherBeneathId: "cell66" }, cell60: { leftBrotherId: "cell59", rightBrotherId: "cell61", brotherBeneathId: "cell67" }, cell61: { leftBrotherId: "cell60", rightBrotherId: "cell62", brotherBeneathId: "cell68" }, cell62: { leftBrotherId: "cell61", rightBrotherId: "cell63", brotherBeneathId: "cell69" }, cell63: { leftBrotherId: "cell62", rightBrotherId: "", brotherBeneathId: "cell70" }, cell64: { leftBrotherId: "", rightBrotherId: "cell65", brotherBeneathId: "cell71" }, cell65: { leftBrotherId: "cell64", rightBrotherId: "cell66", brotherBeneathId: "cell72" }, cell66: { leftBrotherId: "cell65", rightBrotherId: "cell67", brotherBeneathId: "cell73" }, cell67: { leftBrotherId: "cell66", rightBrotherId: "cell68", brotherBeneathId: "cell74" }, cell68: { leftBrotherId: "cell67", rightBrotherId: "cell69", brotherBeneathId: "cell75" }, cell69: { leftBrotherId: "cell68", rightBrotherId: "cell70", brotherBeneathId: "cell76" }, cell70: { leftBrotherId: "cell69", rightBrotherId: "", brotherBeneathId: "cell77" }, cell71: { leftBrotherId: "", rightBrotherId: "cell72", brotherBeneathId: "cell78" }, cell72: { leftBrotherId: "cell71", rightBrotherId: "cell73", brotherBeneathId: "cell79" }, cell73: { leftBrotherId: "cell72", rightBrotherId: "cell74", brotherBeneathId: "cell80" }, cell74: { leftBrotherId: "cell73", rightBrotherId: "cell75", brotherBeneathId: "cell81" }, cell75: { leftBrotherId: "cell74", rightBrotherId: "cell76", brotherBeneathId: "cell82" }, cell76: { leftBrotherId: "cell75", rightBrotherId: "cell77", brotherBeneathId: "cell83" }, cell77: { leftBrotherId: "cell76", rightBrotherId: "", brotherBeneathId: "cell84" }, cell78: { leftBrotherId: "", rightBrotherId: "cell79", brotherBeneathId: "cell85" }, cell79: { leftBrotherId: "cell78", rightBrotherId: "cell80", brotherBeneathId: "cell86" }, cell80: { leftBrotherId: "cell79", rightBrotherId: "cell81", brotherBeneathId: "cell87" }, cell81: { leftBrotherId: "cell80", rightBrotherId: "cell82", brotherBeneathId: "cell88" }, cell82: { leftBrotherId: "cell81", rightBrotherId: "cell83", brotherBeneathId: "cell89" }, cell83: { leftBrotherId: "cell82", rightBrotherId: "cell84", brotherBeneathId: "cell90" }, cell84: { leftBrotherId: "cell83", rightBrotherId: "", brotherBeneathId: "cell91" },
}


//********** Players Objects ***********//
var currentPlayerObject;
//a Player is defined by a set of cells
var players = {
    0: { cell1_Id: "cell4", type: "oneDot" }//Dot
    , 1: { cell1_Id: "cell4", cell2_Id: "cell5", type: "twoDots" }//Two Dots
    , 2: { cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5", type: "threeDots" }//Three Dots in row
    , 3: { cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5", cell4_Id: "cell6", type: "fourDotsStick" }//Four Dots in row
    , 4: { cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell5", cell4_Id: "cell12", type: "fourDotsLetter_L" }//Four Dots form 'L'
    , 5: { cell1_Id: "cell4", cell2_Id: "cell5", cell3_Id: "cell11", cell4_Id: "cell12", type: "fourDotsSquare" }//Four Dots form square
    , 6: { cell1_Id: "cell4", cell2_Id: "cell10", cell3_Id: "cell11", cell4_Id: "cell12", type: "fourDots_threePlusOne" }//Four Dots form _|_
    , 7: { cell1_Id: "cell3", cell2_Id: "cell4", cell3_Id: "cell11", cell4_Id: "cell12", type: "fourDotsLetter_Z" }//Four Dots form -|_
}
var nextPlayerObject;
var nextPlayerNumber;
//nextPlayers is an object used only to display the next player in the area of next players
var nextPlayers = {
    0: { cell1_Id: "cell90" }//Dot
    , 1: { cell1_Id: "cell90", cell2_Id: "cell91" }//Twp Dots
    , 2: { cell1_Id: "cell90", cell2_Id: "cell91", cell3_Id: "cell92" }//Three Dots in row
    , 3: { cell1_Id: "cell89", cell2_Id: "cell90", cell3_Id: "cell91", cell4_Id: "cell92" }//Four Dots in row
    , 4: { cell1_Id: "cell90", cell2_Id: "cell91", cell3_Id: "cell92", cell4_Id: "cell96" }//Four Dots form 'L'
    , 5: { cell1_Id: "cell86", cell2_Id: "cell87", cell3_Id: "cell90", cell4_Id: "cell91" }//Four Dots form square
    , 6: { cell1_Id: "cell87", cell2_Id: "cell90", cell3_Id: "cell91", cell4_Id: "cell92" }//Four Dots form _|_
    , 7: { cell1_Id: "cell86", cell2_Id: "cell87", cell3_Id: "cell91", cell4_Id: "cell92" }//Four Dots form -|_
}

function choosePlayerRandomly() {
    //this function choose a player randomly and call another function to switch it on
    //first lets check if there are any rows fully switched one
    if (existFullRows()) {
        //console.log("there is at least one row fully switched one.")
        //so there is one or more rows fully switched one, lets erase them and increment score

        //first, lets switch off rows that are fully switched on, adn moved down cells above those rows and that are switched on
        eraseFullRows_moveDownNotFullRows();
        //third, increment score based on the number of rows that were erased
        //incrementScore();
    }
    var player = Math.floor(Math.random() * 8);
    //console.log(player);    
    switchOnPlayer(player);
}


/*
//Inside the following function will switch on a player and randomly choose a new player
//we'll pass in a random number to represent a random player
displayNextPlayer_asCurrentPlayer(Math.floor(Math.random() * 8));
//we'll move down the player every second, the player is passed in as a parameter
//'currentPlayerObject' was assigned a random player in the function switchOnPlayer() 
var timeInterval=1000;
var myInterval= window.setInterval(function(){movePlayerDown(currentPlayerObject);},timeInterval);
//setTimeout(function(){clearInterval(myInterval);},5*timeInterval);*/


function switchOnPlayer(playerNumber) {
    //first lets check if there are any rows fully switched one
    if (existFullRows()) {
        //console.log("there is at least one row fully switched one.")
        //so there is one or more rows fully switched one, lets erase them and increment score

        //first, lets switch off rows that are fully switched on, adn moved down cells above those rows and that are switched on
        eraseFullRows_moveDownNotFullRows();
        //third, increment score based on the number of rows that were erased
        //incrementScore();
    }


    //before moving down the player lets first check whether it is gameOver or not
    //if it is gameOver we'll delete the keydown event listener of the arrows and display a game over msg
    if (gameOver()) {
        //alert("game over!");
        deleteKeyDownEvents();
        displayGameOverMsg();
        return;
    }


    //we'll use playerNumber parameter to get the player object from 'players' object
    //then we'll use all the IDs stored in the player object to switch on the corresponding cells

    //assigning one of the bojects stored in 'players' object to the object 'currentPlayerObject' 
    currentPlayerObject = { ...players[playerNumber] };//making a copy from players[playerNumber] to currentPlayerObject 

    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //console.log(currentPlayerObject); 
    //console.log(player_propertiesCount);
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        switchOnCells(cellID_in_currentPlayer);
    }
}

//******************** START MOVING DOWN A PLAYER ******************//
function movePlayerDown(currentPlayerObject) {
    //currentPlayerObject is an object that have up-to four properties
    //this properties store the value of cellID
    //by moving down a player we mean moving down all its cells he is composed of
    //which means each property of currentPlayerObject is going to have a new cellID which is the beneathBrotherID 
    //lets start

    if (isMovingDownPossible()) {
        //Now lets switch off all the cells of the current player
        switchoffPlayerCells_andAssignNewCells(currentPlayerObject);

        //Now lets switch on all the new cells of the current player that were considered as 'brotherBeneath' in the previous for loop        
        switchonPlayerCells(currentPlayerObject);
        console.log("player moved down.");
    }
    else {
        console.log("player cannot move down. I created a new one!");
        //lets stop the layer from moving down automatically every second
        displayNextPlayer_asCurrentPlayer(nextPlayerNumber);
    }
}
function switchoffPlayerCells_andAssignNewCells(currentPlayerObject) {
    //this function switch off all the cells of the player, and assign new cells to it (cells beneath)

    //1- getting the number of cells (td tags) in the current player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;

    //2- Now lets proceed
    for (let i = 1; i < player_propertiesCount; i++) {
        //lets build the appropriate property name
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        //now lets get this cellID
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now lets use cellID_in_currentPlayer to switch it off in the UI
        switchOffCells(cellID_in_currentPlayer);
        //now lets use cellID_in_currentPlayer to get its brotherBeneathID from'table' object
        let brotherBeneath_thisCell = table[cellID_in_currentPlayer].brotherBeneathId;
        //now lets take this brotherBeneath_thisCell as a cell of the currentPlayerObject instead of cellID_in_currentPlayer
        currentPlayerObject[idPropertyName_in_currentPlayer] = brotherBeneath_thisCell;
        //up to now, we: switched off a cell, then we considered its beneath brother instead of it.. we'll switch on this beneathBrother in the next for loop
    }
}
function switchonPlayerCells(currentPlayerObject) {
    //this function switches on all cells of the player

    //1- getting the number of cells (td tags) in the current player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;

    //2- Now lets proceed
    for (let i = 1; i < player_propertiesCount; i++) {
        //lets build the appropriate property name
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        //now lets get this cellID
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now lets use cellID_in_currentPlayer to switch it on in the UI
        switchOnCells(cellID_in_currentPlayer);
    }
}
function isMovingDownPossible() {
    //this function returns a bool that determines wheter player can move down or not
    if (!isTableBottomLimit() && !existSwitchedOnCellsBelow()) return true;
    else return false;
}
function isTableBottomLimit() {
    //this function checks whether player (or one of its cells) is in the bottom row of the table
    //it does that by checking if the parent element of one of the cells composing
    //the current player is the last row (tr tag) in the table

    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player, then use that 'id' to select the cell and get its parent
    //then we'll check if that parent is the last tr tag in our table, if so we'll return true.
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        let trElementsInTable = document.getElementsByTagName("table")[0].querySelectorAll("TR");
        /*console.log("last row is: "); console.log(trElementsInTable[trElementsInTable.length-1]);
        console.log("parent elt is: "); console.log(document.getElementById(cellID_in_currentPlayer).parentElement);*/
        if (document.getElementById(cellID_in_currentPlayer).parentElement == trElementsInTable[trElementsInTable.length - 1]) {
            return true;
        }
    }
    return b;
}
function existSwitchedOnCellsBelow() {
    //this functions checks whether there are switched on cells under the player
    //(cells that belongs to the player aren't considered in the verification)

    //How?
    //foreach cell in the player, we'll use its 'id' to get the brotherBeneathID from the object 'table'
    //if the td tag that have that brotherBeneathID is switched on than return true



    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player,
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //we've got the id of the current cell in the current player, it is 'cellID_in_currentPlayer'
        //lets use to get the object that corresponds to this cell that is stored in the object 'table'
        let brotherBeneathId = table[cellID_in_currentPlayer].brotherBeneathId;
        //now lets check the cell beneath this cell if it is switched on using 'brotherBeneathId'
        //but we shouldn't consider the cell beneath if it already belongs to the current player
        if (JSON.stringify(currentPlayerObject).includes(brotherBeneathId)) {
            //Do nothing, becuz the beneath cell already belongs to the current player
        }
        else {
            if (document.getElementById(brotherBeneathId).className.includes("cell-on")) {
                b = true;
            }
        }

    }
    //console.log(b);
    return b;
}
//******************** END MOVING DOWN A PLAYER *********************//
//
//
//
//
//
//******************** START MOVING RIGHT A PLAYER ******************//
function movePlayerRight(currentPlayerObject) {
    //currentPlayerObject is an object that have up-to four properties
    //this properties store the value of cellID
    //by moving right a player we mean moving right all its cells he is composed of
    //which means each property of currentPlayerObject is going to have a new cellID which is the rightBrotherID 
    //lets start

    if (isMovingRightPossible()) {
        //Now lets switch off all the cells of the current player
        switchoffPlayerCells_andAssignNewCells_toTheRight(currentPlayerObject);

        //Now lets switch on all the new cells of the current player that were considered as 'rightBrother' in the previous for loop        
        switchonPlayerCells(currentPlayerObject);
        console.log("player moved right.");
    }
    else {
        console.log("player cannot move right!");
    }
}
function switchoffPlayerCells_andAssignNewCells_toTheRight(currentPlayerObject) {
    //this function switch off all the cells of the player, and assign new cells to it (cells to the right)

    //1- getting the number of cells (td tags) in the current player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;

    //2- Now lets proceed
    for (let i = 1; i < player_propertiesCount; i++) {
        //lets build the appropriate property name
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        //now lets get this cellID
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now lets use cellID_in_currentPlayer to switch it off in the UI
        switchOffCells(cellID_in_currentPlayer);
        //now lets use cellID_in_currentPlayer to get its rightBrotherID from'table' object
        let rightBrother_ofThisCell = table[cellID_in_currentPlayer].rightBrotherId;
        //now lets take this rightBrother_ofThisCell as a cell of the currentPlayerObject instead of cellID_in_currentPlayer
        currentPlayerObject[idPropertyName_in_currentPlayer] = rightBrother_ofThisCell;
        //up to now, we: switched off a cell, then we considered its right brother instead of it.. we'll switch on this rightBrother in the next for loop
    }
}
function isMovingRightPossible() {
    //this function returns a bool that determines wheter player can move right or not
    if (!isTableRightSideLimit() && !existSwitchedOnCellsToRight()) return true;
    else return false;
}
function isTableRightSideLimit() {
    //this function checks whether player (or one of its cells) is in the right boundary row of the table
    //it does that by checking if the number inside one the cells id (eg: cell7) has modulo(7)=0
    //example of cells in the right boundary of the table: cell7, cell14, cell21... etc

    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player, then use that 'id' to extraxt a number from it
    //then we'll use that number to calculate the modulo and check it 0 or not
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now we'll extract the number that is inside the id
        let numberInsideIDString = numberInCellId(cellID_in_currentPlayer);// cellID_in_currentPlayer.slice(4);
        //if cellID_in_currentPlayer is 'cell7' then numberInsideIDString will be '7' 
        if (numberInsideIDString % 7 == 0) {
            //so this cell has an id like 'cell7' or 'cell14' or 'cell21'.... it belongs to the right boundary of the table
            return true;
        }
    }
    return b;
}
function existSwitchedOnCellsToRight() {
    //this functions checks whether there are switched on cells in the right side of the player
    //(cells that belongs to the player aren't considered in the verification)

    //How?
    //foreach cell in the player, we'll use its 'id' to get the rightBrotherID from the object 'table'
    //if the td tag that have that rightBrotherID is switched on then return true



    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player,
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //we've got the id of the current cell in the current player, it is 'cellID_in_currentPlayer'
        //lets use to get the object that corresponds to this cell that is stored in the object 'table'
        let rightBrotherId = table[cellID_in_currentPlayer].rightBrotherId;
        //now lets check the cell in the right side of this cell if it is switched on using 'rightBrotherId'
        //but we shouldn't consider the cell to the right if it already belongs to the current player
        if (JSON.stringify(currentPlayerObject).includes(rightBrotherId)) {
            //Do nothing, becuz the right cell already belongs to the current player
        }
        else {
            if (document.getElementById(rightBrotherId).className.includes("cell-on")) {
                b = true;
            }
        }

    }
    //console.log(b);
    return b;
}
//******************** END MOVING RIGHT A PLAYER ******************//
//
//
//
//
//
//******************** START MOVING LEFT A PLAYER ******************//
function movePlayerLeft(currentPlayerObject) {
    //currentPlayerObject is an object that have up-to four properties
    //this properties store the value of cellID
    //by moving left a player we mean moving left all its cells he is composed of
    //which means each property of currentPlayerObject is going to have a new cellID which is the leftBrotherID 
    //lets start

    if (isMovingLeftPossible()) {
        //Now lets switch off all the cells of the current player
        switchoffPlayerCells_andAssignNewCells_toTheLeft(currentPlayerObject);

        //Now lets switch on all the new cells of the current player that were considered as 'leftBrother' in the previous for loop        
        switchonPlayerCells(currentPlayerObject);
        console.log("player moved left.");
    }
    else {
        console.log("player cannot move left!");
    }
}
function switchoffPlayerCells_andAssignNewCells_toTheLeft(currentPlayerObject) {
    //this function switch off all the cells of the player, and assign new cells to it (cells to the left)

    //1- getting the number of cells (td tags) in the current player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;

    //2- Now lets proceed
    for (let i = 1; i < player_propertiesCount; i++) {
        //lets build the appropriate property name
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        //now lets get this cellID
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now lets use cellID_in_currentPlayer to switch it off in the UI
        switchOffCells(cellID_in_currentPlayer);
        //now lets use cellID_in_currentPlayer to get its leftBrotherID from'table' object
        let leftBrother_ofThisCell = table[cellID_in_currentPlayer].leftBrotherId;
        //now lets take this leftBrother_ofThisCell as a cell of the currentPlayerObject instead of cellID_in_currentPlayer
        currentPlayerObject[idPropertyName_in_currentPlayer] = leftBrother_ofThisCell;
        //up to now, we: switched off a cell, then we considered its left brother instead of it.. we'll switch on this leftBrother in the next for loop
    }
}
function isMovingLeftPossible() {
    //this function returns a bool that determines wheter player can move left or not
    if (!isTableLeftSideLimit() && !existSwitchedOnCellsToLeft()) return true;
    else return false;
}
function isTableLeftSideLimit() {
    //this function checks whether player (or one of its cells) is in the left boundary row of the table
    //it does that by checking if the number inside one the cells id (eg: cell8) has modulo(7)=1
    //example of cells in the left boundary of the table: cell1, cell8, cell15, cell22... etc

    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player, then use that 'id' to extraxt a number from it
    //then we'll use that number to calculate the modulo and check it 1 or not
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //now we'll extract the number that is inside the id
        let numberInsideIDString = numberInCellId(cellID_in_currentPlayer);//cellID_in_currentPlayer.slice(4);
        //if cellID_in_currentPlayer is 'cell7' then numberInsideIDString will be '7' 
        if (numberInsideIDString % 7 == 1) {
            //so this cell has an id like 'cell8' or 'cell15' or 'cell22'.... it belongs to the left boundary of the table
            return true;
        }
    }
    return b;
}
function existSwitchedOnCellsToLeft() {
    //this functions checks whether there are switched on cells in the left side of the player
    //(cells that belongs to the player aren't considered in the verification)

    //How?
    //foreach cell in the player, we'll use its 'id' to get the leftBrotherID from the object 'table'
    //if the td tag that have that leftBrotherID is switched on then return true



    //we'll count the number of cells forming the player
    let player_propertiesCount = Object.keys(currentPlayerObject).length;
    //we'll build the 'id' of each cell forming the player,
    let b = false;
    for (let i = 1; i < player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        let cellID_in_currentPlayer = currentPlayerObject[idPropertyName_in_currentPlayer];
        //we've got the id of the current cell in the current player, it is 'cellID_in_currentPlayer'
        //lets use to get the object that corresponds to this cell that is stored in the object 'table'
        let leftBrotherId = table[cellID_in_currentPlayer].leftBrotherId;
        //now lets check the cell in the right side of this cell if it is switched on using 'leftBrotherId'
        //but we shouldn't consider the cell to the right if it already belongs to the current player
        if (JSON.stringify(currentPlayerObject).includes(leftBrotherId)) {
            //Do nothing, becuz the left cell already belongs to the current player
        }
        else {
            if (document.getElementById(leftBrotherId).className.includes("cell-on")) {
                b = true;
            }
        }

    }
    //console.log(b);
    return b;
}
//******************** END MOVING LEFT A PLAYER ******************//
//
//
//
//
//******************** START ERASING FULL ROWS AND INCREMENT SCORE ******************//
function existFullRows() {
    //this function returns true if there are rows fully switched on ... return false otherwise
    //How to?
    //for each <tr> in <table> check if its <td> tags have all class 'cell-on'
    let trTags = document.getElementById("stadium").getElementsByTagName("tr");
    //console.log(trTags.length);    
    for (let i = 0; i < trTags.length; i++) {
        //now check if all <td> children of this <tr> all have a class 'cell-on'
        let tdTags = trTags[i].getElementsByTagName("td");
        let b = true;
        let tdTagsClassNames = "";
        for (let j = 0; j < tdTags.length; j++) {
            tdTagsClassNames = tdTagsClassNames + tdTags[j].className;
        }
        if (tdTagsClassNames.includes("cell-off")) {
            //so one of <td> of current <tr> (trTags[i]) is not switched on .. lets assign false to b            
            b = false;
        }
        else {
            if (tdTags.length > 0) {//it means we have td tags of a row that are all 'cell-on'
                //(if tdTags.length==0 it means we are checking the first row that contains only <th> tags)
                return true;
            }
        }
    }
    //the code didn't return anything after checking all rows it means all rows are not fully switched on, lets return false 
    return false;
}
function eraseFullRows_moveDownNotFullRows() {
    //this function erase full rows
    //How to?
    //for each switched on <tr> tag switch off its cells, and recheck from the first <tr> tag
    let trTags = document.getElementById("stadium").getElementsByTagName("tr");
    for (let i = 0; i < trTags.length; i++) {
        //now check if all <td> children of this <tr> all have a class 'cell-on'
        let tdTags = trTags[i].getElementsByTagName("td");
        let b = true;
        let tdTagsClassNames = "";
        for (let j = 0; j < tdTags.length; j++) {
            tdTagsClassNames = tdTagsClassNames + tdTags[j].className;
        }
        if (tdTagsClassNames.includes("cell-off")) {
            //so one of <td> of current <tr> (trTags[i]) is not switched on .. lets assign false to b            
            b = false;
        }
        else {
            if (tdTags.length > 0) {//it means we have td tags of a row that are all 'cell-on'
                //(if tdTags.length==0 it means we are checking the first row that contains only <th> tags)
                for (let j = 0; j < tdTags.length; j++) {
                    tdTags[j].className = "cell-off";
                }
                //Now lets increment score once
                incrementScore();
                //Now lets move down all switched on <td> tags of previous <tr> tags
                for (let g = i; g >= 0; g--) {//we have to swtart moving down <td> tags from bottom to top
                    let previousTDTags = trTags[g].getElementsByTagName("td");
                    for (let h = 0; h < previousTDTags.length; h++) {
                        if (previousTDTags[h].className.includes("cell-on")) {
                            previousTDTags[h].className = "cell-off";
                            switchOnCells(table[previousTDTags[h].id].brotherBeneathId);
                        }
                    }
                }
            }
        }
    }
}
function incrementScore() {
    let oldScore = parseInt(document.getElementById("current-score").innerText);
    console.log(oldScore);
    let newScore = oldScore + 10;
    console.log(newScore);
    let newScoreText = newScore.toString();
    let scoreTextLength = newScoreText.length;
    if(scoreTextLength < 5){
        //so lets add some 'zeroes' to the left of the score
        let zeros = "";
        for(let i=1; i<=5-scoreTextLength; i++){
            zeros = zeros + "0";
        }
        newScoreText = zeros + newScoreText;
    }
    document.getElementById("current-score").innerText = newScoreText;
}
//******************** END ERASING FULL ROWS AND INCREMENT SCORE ******************//
//
//
//
//
//******************** START GAME OVER CHECKING ******************//
//it is game over only if one cell of the top row is already switched on when we tries to choose and switch a new player
function gameOver() {
    //this function returns true if the game is over
    //How to?
    //it checks if there are any switched on cells in the top row
    let tdTags_inTopRow = document.getElementById("stadium").getElementsByTagName("tr")[1].getElementsByTagName("td");
    //index 0 represents the row that contains <th> tags
    //index 1 represents the top row that contains <td> tags
    for (let i = 0; i < tdTags_inTopRow.length; i++) {
        if (tdTags_inTopRow[i].className.includes("cell-on"))
            return true;
    }
    return false;
}
function deleteKeyDownEvents() {
    document.removeEventListener("keydown", playerBehave);
}
function displayGameOverMsg() {
    document.getElementById("gameOverMsg").style.display = "block";
}

//******************** END GAME OVER CHECKING ******************//
//
//
//
//
//******************** START NEXT PLAYER DISPLAY ******************//
//a Player is defined by a set of cells


function chooseNextPlayer() {
    //this function choose a player randomly and call another function to switch it on in next players area
    nextPlayerNumber = Math.floor(Math.random() * 8);
    //lets now display the chosen nextPlayer in the second table
    displayNextPlayer(nextPlayerNumber);
}
function displayNextPlayer(nextPlayerNumber) {
    //this function display nextPlayer object in the second table

    //we'll use nextPlayerNumber parameter to get the player object from 'nextPlayers' object
    //then we'll use all the IDs stored in the player object to switch on the corresponding cells

    //before displaying the nextPlayer in the second table lets switch off all the cells of the table
    switchoffNextPlayerArea();

    //assigning one of the bojects stored in 'nextPlayers' object to the object 'nextPlayerObject' 
    nextPlayerObject = { ...nextPlayers[nextPlayerNumber] };//making a copy from nextPlayers[nextPlayerNumber] to nextPlayerObject 

    let player_propertiesCount = Object.keys(nextPlayerObject).length;
    //console.log(nextPlayerObject);
    //console.log(player_propertiesCount);
    for (let i = 1; i <= player_propertiesCount; i++) {
        let idPropertyName_in_currentPlayer = "cell" + i + "_Id";
        //console.log(idPropertyName_in_currentPlayer);
        let cellID_in_currentPlayer = nextPlayerObject[idPropertyName_in_currentPlayer];
        //console.log(cellID_in_currentPlayer);
        switchOnCells(cellID_in_currentPlayer);
    }
}
function switchoffNextPlayerArea() {
    let tdTags_inSecondTable = document.getElementById("nextPlayersArea").getElementsByTagName("td");
    for (let i = 0; i < tdTags_inSecondTable.length; i++) {
        tdTags_inSecondTable[i].className = "cell-off";
    }
}
function displayNextPlayer_asCurrentPlayer(nextPlayerNumber) {
    //this function calls another function to display currentPlayerObject using nextPlayerNumber as parameter,
    //and calls another function to choose another nextPlayer

    //(this function is called in two places:
    //a- when the game is loaded first, and the parameter used is a random number
    //b- when a currentPlayer can no more move down, so we have to use the nextPlayer already chosen to become a currentPlayer)

    //1- lets display nextPlayer as currentPlayer in the stadium table    
    switchOnPlayer(nextPlayerNumber);
    //2- lets choose a new nextPlayer and display it in the second table
    chooseNextPlayer();
}

//******************** END NEXT PLAYER DISPLAY ******************//
//
//
//
//
//******************** BEGIN: START AND PAUSE BUTTONS ******************//
document.getElementById("startBtn").addEventListener("click", startNewGame);
document.getElementById("pauseBtn").addEventListener("click", pauseGame);
var myInterval;
var timeInterval = 1000;
var isGamePaused = false;
function startNewGame() {
    //lets add the key down event listener for keyboard arrows
    document.addEventListener("keydown", playerBehave);

    initializeAllGameElts();
    //Inside the following function will switch on a player and randomly choose a new player
    //we'll pass in a random number to represent a random player
    displayNextPlayer_asCurrentPlayer(Math.floor(Math.random() * 8));
    //we'll move down the player every second, the player is passed in as a parameter
    //'currentPlayerObject' was assigned a random player in the function switchOnPlayer()     
    myInterval = window.setInterval(function () { movePlayerDown(currentPlayerObject); }, timeInterval);
    //now lets activate the pause button
    activatePauseBtn();
}
function pauseGame() {
    window.clearInterval(myInterval);
    isGamePaused = true;
    //lets deactivate pause button
    deactivatePauseBtn();
    //now lets add the function 'startGame()' to the click event of start game button
    document.getElementById("startBtn").removeEventListener("click", startNewGame);
    document.getElementById("startBtn").addEventListener("click", startGame);
    //now lets remove key down event listener from arrows so that user can't play anymore
    document.removeEventListener("keydown", playerBehave);
}
function startGame() {
    //lets add the key down event listener for keyboard arrows
    document.addEventListener("keydown", playerBehave);

    //lets restart the game
    //myInterval = window.setInterval(function () { movePlayerDown(currentPlayerObject); }, timeInterval);
    //lets readd the click event to the start button for starting a new game
    document.getElementById("startBtn").addEventListener("click", startNewGame);
    //lets activate pause button
    activatePauseBtn();
}
function initializeAllGameElts() {
    let cells = document.getElementById("stadium").querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].className = "cell-off";
    };
    timeInterval = 1000;
    isGamePaused = false;
}
function activatePauseBtn() {
    document.getElementById("pauseBtn").removeAttribute("disabled");
    //now lets make the cursor on the pause button as pointer
    document.getElementById("pauseBtn").style.cursor = "pointer";
}
function deactivatePauseBtn() {
    document.getElementById("pauseBtn").setAttribute("disabled", "");
    document.getElementById("pauseBtn").style.cursor = "not-allowed";
}
//******************** END: START AND PAUSE BUTTONS ******************//
//
//
//
//
//******************** BEGIN: ROTATE SHAPE AREA ******************//
function rotateShape() {
    console.log("going to rotate the shape: " + currentPlayerObject.type);
    switch (currentPlayerObject.type) {
        case "oneDot":
            rotateDot();
            break;
        case "twoDots":
            rotate_twoDots();
            break;
        case "threeDots":
            rotate_threeDots();
            break;
        case "fourDotsStick":
            rotate_fourDotsStick();
            break;
        case "fourDotsLetter_L":
            rotate_fourDotsLetter_L();
            break;
        case "fourDotsSquare":
            rotateSquare();
            break;
        case "fourDots_threePlusOne":
            rotateFourDots_threePlusOne();
            break;
        case "fourDotsLetter_Z":
            rotateFourDotsLetter_Z();
            break;
        default:
            break;
    }
}
function rotateDot() {
    //it is a player composed of one td tag, so there is no real rotating ... do nothing
    return;
}
function rotateSquare() {
    //it is a player that looks like a square, so there is no real rotating ... do nothing
    return;
}
//*** BEGIN: ROTATE STICK SHAPE ***//
function rotate_twoDots() {
    //vertical twoDots shape will be rotated to be horizental only if right brothers <td> tags are not switched on
    //horizental twoDots shape will be rotated to be vertical only if top brothers <td> tags are not switched on 
    //if (isStickShape_Vertical() && !isTwoDots_rightBrothers_switchedOn() && !isTableRightSideLimit()) {
    if (isStickShape_Vertical() && !isTwoDots_tableRightSideLimit()) {
        if (!isTwoDots_rightBrothers_switchedOn()) {
            makeTwoDotsHorizental();
        }
    }
    else if (isStickShape_Horizental() && !isTwoDots_topBrothers_switchedOn()) {
        makeTwoDotsVertical();
    }
    else {
        //do nothing ... it is not possible to rotate this two dots shape
        return;
    }
}
function isTwoDots_rightBrothers_switchedOn() {
    //this function checks if one of the right brothers of a vertical twoDots shape is switched on
    let rightBro1 = document.getElementById(table[currentPlayerObject.cell1_Id].rightBrotherId);
    let rightBro2 = document.getElementById(table[currentPlayerObject.cell2_Id].rightBrotherId);
    if (rightBro1.className.includes("cell-on") || rightBro2.className.includes("cell-on")) {
        //so whatever the stick is it has at least a brother switched on
        return true;
    }
    else return false;
}
function isTwoDots_tableRightSideLimit() {
    //this function returns true if the right side limit of the table is next to the shape
    //this function is used when trying to rotate a twoDotsStick FROM VERTICAL TO HORIZENTAL so that the stick doesn't step out of the table

    //How?
    //twoDotsStick is vertical
    //if nothing seperates this twoDotsStick from the rightSideLimit of the table, then, return true
    //else return false
    //But How??
    //if (integerOf(cellID) modulo 7 == 0) then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell1_Id);//parseInt(currentPlayerObject.cell1_Id.slice(4));
    if (integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isTwoDots_topBrothers_switchedOn() {
    //this function checks if one of the top borthers of an horizental twoDots shape is switched on
    let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;//parseInt(currentPlayerObject.cell1_Id.slice(4)) - 7;//parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) - 7;
    let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;;//parseInt(currentPlayerObject.cell2_Id.slice(4)) - 7;;//parseInt(currentPlayerObject.cell2_Id.splice(0, 4)) - 7;
    //what if the stick shape is located in the first tr tag?? lets check it
    if (parseInt(digit_in_topBro2ID) <= 0 || parseInt(digit_in_topBro1ID) <= 0) {
        //so the stick shape is fully located in the first tr tag, lets return false bcuz
        //there are no top brothers to rotate on, it is like there are switch on top brothers
        return true;
    }
    let topBro1ID = "cell" + digit_in_topBro1ID;
    let topBro2ID = "cell" + digit_in_topBro2ID;
    let topBro1 = document.getElementById(topBro1ID);
    let topBro2 = document.getElementById(topBro2ID);
    if (topBro1.className.includes("cell-on") || topBro2.className.includes("cell-on")) {
        return true;
    }
    return false;
}
function makeTwoDotsHorizental() {
    //this function takes a twoDots stick that is vertical and makes it horizental
    //How?
    //it replaces the upper dot by the right brother of the lower dot
    //if (parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) > parseInt(currentPlayerObject.cell2_Id.splice(0, 4)))
    //if (parseInt(currentPlayerObject.cell1_Id.slice(4)) > parseInt(currentPlayerObject.cell2_Id.slice(4)))
    if (numberInCellId(currentPlayerObject.cell1_Id) > numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the upper dot of the shape is currentPlayerObject.cell2_Id
        //lets 1- switch it off, 2- assign it the right brother of currentPlayerObject.cell1_Id and then 3- switch it on
        switchOffCells(currentPlayerObject.cell2_Id);
        currentPlayerObject.cell2_Id = table[currentPlayerObject.cell1_Id].rightBrotherId;
        switchOnCells(currentPlayerObject.cell2_Id);
    }
    else {
        //so the upper dot of the shape is currentPlayerObject.cell1_Id
        //lets 1- switch it off, 2- assign it the right brother of currentPlayerObject.cell2_Id and then 3- switch it on
        switchOffCells(currentPlayerObject.cell1_Id);
        currentPlayerObject.cell1_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
        switchOnCells(currentPlayerObject.cell1_Id);
    }
}
function makeTwoDotsVertical() {
    //this function takes a twoDots stick that is horizental and makes it vertical
    //How?
    //it replaces the right dot of the shape by the top brother of the left dot of the shape
    //if (parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) < parseInt(currentPlayerObject.cell2_Id.splice(0, 4)))
    //if (parseInt(currentPlayerObject.cell1_Id.slice(4)) < parseInt(currentPlayerObject.cell2_Id.slice(4))) 
    if (numberInCellId(currentPlayerObject.cell1_Id) < numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the right dot of the shape is currentPlayerObject.cell2_Id
        //lets 1- switch it off, 2- assign it the upper brother of the currentPlayerObject.cell1_Id
        switchOffCells(currentPlayerObject.cell2_Id);
        let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;//parseInt(currentPlayerObject.cell1_Id.slice(4)) - 7;//parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) - 7;
        let topBro1ID = "cell" + digit_in_topBro1ID;
        currentPlayerObject.cell2_Id = topBro1ID;
        switchOnCells(currentPlayerObject.cell2_Id);
    }
}
//***/
function rotate_threeDots() {
    //vertical threeDots shape will be rotated to be horizental only if right brothers <td> tags are not switched on
    //horizental threeDots shape will be rotated to be vertical only if top brothers <td> tags are not switched on 
    if (isStickShape_Vertical() && !isThreeDots_tableRightSideLimit()) {
        if (!isThreeDots_rightBrothers_switchedOn()) {
            makeThreeDotsHorizental();
        }
    }
    else if (isStickShape_Horizental() && !isThreeDots_tableTopLimit()) {
        if (!isThreeDots_topBrothers_switchedOn()) {
            makeThreeDotsVertical();
        }
    }
    else {
        //do nothing ... it is not possible to rotate this ThreeDots shape
        return;
    }
}
function isThreeDots_rightBrothers_switchedOn() {
    //this function checks if one of the six right brothers of a vertical ThreeDots shape is switched on
    let rightBro1 = document.getElementById(table[currentPlayerObject.cell1_Id].rightBrotherId);
    let rightBro2 = document.getElementById(table[currentPlayerObject.cell2_Id].rightBrotherId);
    let rightBro3 = document.getElementById(table[currentPlayerObject.cell3_Id].rightBrotherId);
    let rightBro4 = document.getElementById(table[rightBro1.id].rightBrotherId);
    let rightBro5 = document.getElementById(table[rightBro2.id].rightBrotherId);
    let rightBro6 = document.getElementById(table[rightBro3.id].rightBrotherId);
    if (rightBro1.className.includes("cell-on")
        || rightBro2.className.includes("cell-on")
        || rightBro3.className.includes("cell-on")
        || rightBro4.className.includes("cell-on")
        || rightBro5.className.includes("cell-on")
        || rightBro6.className.includes("cell-on")) {
        //so whatever the stick is it has at least a brother switched on
        return true;
    }
    else return false;
}
function isThreeDots_tableRightSideLimit() {
    //this function returns true if the right side limit of the table is only one cells far, or less
    //this function is used when trying to rotate a threeDotsStick FROM VERTICAL TO HORIZENTAL so that the stick doesn't step out of the table

    //How?
    //threeDotsStick is vertical
    //if what seperate this threeDotsStick from the rightSideLimit of the table is only one or zero cell off, then, return true
    //else return false
    //But How??
    //if (integerOf(cellID)+1) modulo 7 == 0 OR integerOf(cellID) modulo 7 == 0 then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell1_Id);//parseInt(currentPlayerObject.cell1_Id.slice(4));
    if ((integer_inID + 1) % 7 == 0 || integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isThreeDots_topBrothers_switchedOn() {
    //this function checks if one of the top borthers of an horizental ThreeDots shape is switched on
    let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;//parseInt(currentPlayerObject.cell1_Id.slice(4)) - 7;//parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) - 7;
    let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;//parseInt(currentPlayerObject.cell2_Id.slice(4)) - 7;//parseInt(currentPlayerObject.cell2_Id.splice(0, 4)) - 7;
    let digit_in_topBro3ID = numberInCellId(currentPlayerObject.cell3_Id) - 7;//parseInt(currentPlayerObject.cell3_Id.slice(4)) - 7;
    //what if the stick shape is located in the first tr tag?? lets check it
    if (parseInt(digit_in_topBro1ID) <= 0
        || parseInt(digit_in_topBro2ID) <= 0
        || parseInt(digit_in_topBro3ID) <= 0) {
        //so the stick shape is fully located in the first tr tag, lets return false bcuz
        //there are no top brothers to rotate on, it is like there are switch on top brothers
        return true;
    }
    let topBro1ID = "cell" + digit_in_topBro1ID;
    let topBro2ID = "cell" + digit_in_topBro2ID;
    let topBro3ID = "cell" + digit_in_topBro3ID;
    let topBro1 = document.getElementById(topBro1ID);
    let topBro2 = document.getElementById(topBro2ID);
    let topBro3 = document.getElementById(topBro3ID);
    if (topBro1.className.includes("cell-on")
        || topBro2.className.includes("cell-on")
        || topBro3.className.includes("cell-on")) {
        return true;
    }
    return false;
}
function isThreeDots_tableTopLimit() {
    //this function returns true only if the top limit of the table is only one row far
    //this functino is used when trying to rotate a threeDotsStick FROM HORIZENTAL TO VERTICAL

    //How?
    //if what seperates the top limit of the table from the top dot of threeDotsStick is only one row thren return true

    //But How??
    //the integer in the id of the top dot of the threeDotsStick should be less or equal to fifteen (two tr tags)

    //cell1 and cell3, one of them is supposed to be the top dot of the shape
    let integer_inTopCellID1 = numberInCellId(currentPlayerObject.cell1_Id);//parseInt(currentPlayerObject.cell1_Id.slice(4));
    let integer_inTopCellID3 = numberInCellId(currentPlayerObject.cell3_Id);//parseInt(currentPlayerObject.cell3_Id.slice(4));
    if (integer_inTopCellID1 < 15 || integer_inTopCellID3 < 15) {
        return true;
    }
    else return false;
}
function makeThreeDotsHorizental() {
    //this function takes a ThreeDots stick that is vertical and makes it horizental
    //How?
    //it replaces the middle dot by the right brother of the lower dot, and replaces the upper dot by the rightBrother of the NEW middle dot
    //if (parseInt(currentPlayerObject.cell1_Id.splice(0, 4)) > parseInt(currentPlayerObject.cell2_Id.splice(0, 4)))
    //if (parseInt(currentPlayerObject.cell1_Id.slice(4)) > parseInt(currentPlayerObject.cell2_Id.slice(4)))
    if (numberInCellId(currentPlayerObject.cell1_Id) > numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the dots of this threeDots stick from top to down are in the following order:
        //currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id

        //lets 1- switch it off: currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id,
        //2- assign the right brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell2_Id
        //3- assign the right brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id 
        //4- switch on currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id

        //1-
        switchOffCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
        //2-
        currentPlayerObject.cell2_Id = table[currentPlayerObject.cell1_Id].rightBrotherId;
        //3-
        currentPlayerObject.cell3_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
        //4-
        switchOnCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
    }
    else {
        //so the dots of this threeDots stick from top to down are in the following order:
        //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id

        //lets 1- switch it off: currentPlayerObject.cell1_Id & currentPlayerObject.cell2_Id,
        //2- assign the right brother of currentPlayerObject.cell3_Id to currentPlayerObject.cell2_Id
        //3- assign the right brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell1_Id 
        //4- switch on currentPlayerObject.cell1_Id & currentPlayerObject.cell2_Id


        //1-
        switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id);
        //2-
        currentPlayerObject.cell2_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
        //3-
        currentPlayerObject.cell1_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
        //4-
        switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id);
    }
}
function makeThreeDotsVertical() {
    //this function takes a ThreeDots stick that is horizental and makes it vertical
    //How?
    //it replaces the middle dot of the shape by the top brother of the first dot of the shape,
    //and replaces the right dot of the shape by the top brother of the new middle dot of the shape
    //if (parseInt(currentPlayerObject.cell1_Id.slice(4)) > parseInt(currentPlayerObject.cell2_Id.slice(4)))
    if (numberInCellId(currentPlayerObject.cell1_Id) > numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the dots of this threeDots stick from left to right are in the following order:
        //currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id

        //lets 1- switch off: currentPlayerObject.cell2_Id & currentPlayerObject.cell1_Id,
        //2- assign the top brother of currentPlayerObject.cell3_Id to currentPlayerObject.cell2_Id
        //3- assign the top brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell1_Id 
        //4- switch on currentPlayerObject.cell2_Id & currentPlayerObject.cell1_Id

        //1-
        switchOffCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id);
        //2-
        let digit_in_topBro3ID = numberInCellId(currentPlayerObject.cell3_Id) - 7;//parseInt(currentPlayerObject.cell3_Id.slice(4)) - 7;
        let topBro3ID = "cell" + digit_in_topBro3ID;
        currentPlayerObject.cell2_Id = topBro3ID;
        //3-
        let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;//parseInt(currentPlayerObject.cell2_Id.slice(4)) - 7;
        let topBro2ID = "cell" + digit_in_topBro2ID;
        currentPlayerObject.cell1_Id = topBro2ID;
        //4-
        switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id);
    }
    else {
        //so the dots of this threeDots stick from left to right are in the following order:
        //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id

        //lets 1- switch off: currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id,
        //2- assign the top brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell2_Id
        //3- assign the top brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id 
        //4- switch on currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id

        //1-
        switchOffCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
        //2-
        let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;//parseInt(currentPlayerObject.cell1_Id.slice(4)) - 7;
        let topBro1ID = "cell" + digit_in_topBro1ID;
        currentPlayerObject.cell2_Id = topBro1ID;
        //3-
        let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;//parseInt(currentPlayerObject.cell2_Id.slice(4)) - 7;
        let topBro2ID = "cell" + digit_in_topBro2ID;
        currentPlayerObject.cell3_Id = topBro2ID;
        //4-
        switchOnCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
    }
}
//***/
function rotate_fourDotsStick() {
    //vertical fourDotsStick shape will be rotated to be horizental only if right brothers <td> tags are not switched on
    //horizental fourDotsStick shape will be rotated to be vertical only if top brothers <td> tags are not switched on 
    if (isStickShape_Vertical() && !isFourDotsStick_tableRightSideLimit()) {
        if (!isFourDotsStick_rightBrothers_switchedOn()) {
            makeFourDotsStickHorizental();
        }
    }
    else if (isStickShape_Horizental() && !isFourDotsStick_tableTopLimit()) {
        if (!isFourDotsStick_topBrothers_switchedOn()) {
            makeFourDotsStickVertical();
        }
    }
    else {
        //do nothing ... it is not possible to rotate this FourDotsStick shape
        return;
    }
}
function isFourDotsStick_rightBrothers_switchedOn() {
    //this function checks if one of the twelve right brothers of a vertical FourDotsStick shape is switched on
    let rightBro1 = document.getElementById(table[currentPlayerObject.cell1_Id].rightBrotherId);
    let rightBro2 = document.getElementById(table[currentPlayerObject.cell2_Id].rightBrotherId);
    let rightBro3 = document.getElementById(table[currentPlayerObject.cell3_Id].rightBrotherId);
    let rightBro4 = document.getElementById(table[currentPlayerObject.cell4_Id].rightBrotherId);

    let rightBro5 = document.getElementById(table[rightBro1.id].rightBrotherId);
    let rightBro6 = document.getElementById(table[rightBro2.id].rightBrotherId);
    let rightBro7 = document.getElementById(table[rightBro3.id].rightBrotherId);
    let rightBro8 = document.getElementById(table[rightBro4.id].rightBrotherId);

    let rightBro9 = document.getElementById(table[rightBro5.id].rightBrotherId);
    let rightBro10 = document.getElementById(table[rightBro6.id].rightBrotherId);
    let rightBro11 = document.getElementById(table[rightBro7.id].rightBrotherId);
    let rightBro12 = document.getElementById(table[rightBro8.id].rightBrotherId);

    if (rightBro1.className.includes("cell-on")
        || rightBro2.className.includes("cell-on")
        || rightBro3.className.includes("cell-on")
        || rightBro4.className.includes("cell-on")
        || rightBro5.className.includes("cell-on")
        || rightBro6.className.includes("cell-on")
        || rightBro7.className.includes("cell-on")
        || rightBro8.className.includes("cell-on")
        || rightBro9.className.includes("cell-on")
        || rightBro10.className.includes("cell-on")
        || rightBro11.className.includes("cell-on")
        || rightBro12.className.includes("cell-on")) {
        //so whatever the stick is it has at least a brother switched on
        return true;
    }
    else return false;
}
function isFourDotsStick_tableRightSideLimit() {
    //this function returns true if the right side limit of the table is only two cells far, or less
    //this function is used when trying to rotate a fourDotsStick FROM VERTICAL TO HORIZENTAL so that the stick doesn't step out of the table

    //How?
    //fourDotsStick is vertical
    //if what seperate this fourDotsStick from the rightSideLimit of the table is only two cells off or less, then, return true
    //else return false
    //But How??
    //if (integerOf(cellID)+2) modulo 7 == 0 OR integerOf(cellID)+1) modulo 7 == 0 OR integerOf(cellID) modulo 7 == 0) then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell1_Id);
    if ((integer_inID + 2) % 7 == 0 || (integer_inID + 1) % 7 == 0 || integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isFourDotsStick_topBrothers_switchedOn() {
    //this function checks if one of the top borthers of an horizental fourDotsStick shape is switched on
    let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;
    let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;
    let digit_in_topBro3ID = numberInCellId(currentPlayerObject.cell3_Id) - 7;
    let digit_in_topBro4ID = numberInCellId(currentPlayerObject.cell4_Id) - 7;
    //what if the stick shape is located in the first tr tag?? lets check it
    if (parseInt(digit_in_topBro1ID) <= 0
        || parseInt(digit_in_topBro2ID) <= 0
        || parseInt(digit_in_topBro3ID) <= 0
        || parseInt(digit_in_topBro4ID) <= 0) {
        //so the stick shape is fully located in the first tr tag, lets return false bcuz
        //there are no top brothers to rotate on, it is like there are switched on top brothers
        return true;
    }
    let topBro1ID = "cell" + digit_in_topBro1ID;
    let topBro2ID = "cell" + digit_in_topBro2ID;
    let topBro3ID = "cell" + digit_in_topBro3ID;
    let topBro4ID = "cell" + digit_in_topBro4ID;
    let topBro1 = document.getElementById(topBro1ID);
    let topBro2 = document.getElementById(topBro2ID);
    let topBro3 = document.getElementById(topBro3ID);
    let topBro4 = document.getElementById(topBro4ID);
    if (topBro1.className.includes("cell-on")
        || topBro2.className.includes("cell-on")
        || topBro3.className.includes("cell-on")
        || topBro4.className.includes("cell-on")) {
        return true;
    }
    return false;
}
function isFourDotsStick_tableTopLimit() {
    //this function returns true only if the top limit of the table is only one row far
    //this functino is used when trying to rotate a fourDotsStick FROM HORIZENTAL TO VERTICAL

    //How?
    //if what seperates the top limit of the table from the top dot of fourDotsStick is only one row thren return true

    //But How??
    //the integer in the id of the top dot of the fourDotsStick should be less or equal to twenty one (three tr tags)

    //cell1 and cell3, one of them is supposed to be the top dot of the shape
    let integer_inTopCellID1 = numberInCellId(currentPlayerObject.cell1_Id);
    let integer_inTopCellID4 = numberInCellId(currentPlayerObject.cell4_Id);
    if (integer_inTopCellID1 < 22 || integer_inTopCellID4 < 22) {
        return true;
    }
    else return false;
}
function makeFourDotsStickHorizental() {
    //this function takes a fourDots stick that is vertical and makes it horizental
    //How?
    //it replaces the second dot (from down to top) by the right brother of the lower dot,
    //and replaces the third dot (from down to top) by the rightBrother of the NEW second dot
    //and replaces the fourth dot (from down to top) by the rightBrother of the NEW third dot    
    if (numberInCellId(currentPlayerObject.cell1_Id) > numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the dots of this fourDots stick from top to down are in the following order:
        //currentPlayerObject.cell3_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id

        //lets 1- switch off: currentPlayerObject.cell4_Id & currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id,
        //2- assign the right brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell2_Id
        //3- assign the right brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id
        //4- assign the right brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
        //5- switch on currentPlayerObject.cell4_Id & currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id

        //1-
        switchOffCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
        //2-
        currentPlayerObject.cell2_Id = table[currentPlayerObject.cell1_Id].rightBrotherId;
        //3-
        currentPlayerObject.cell3_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
        //4-
        currentPlayerObject.cell4_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
        //5-
        switchOnCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    }
    else {
        //so the dots of this fourDots stick from top to down are in the following order:
        //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id

        //lets 1- switch off: currentPlayerObject.cell1_Id & currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id,
        //2- assign the right brother of currentPlayerObject.cell4_Id to currentPlayerObject.cell3_Id
        //3- assign the right brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell2_Id
        //4- assign the right brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell1_Id 
        //5- switch on currentPlayerObject.cell1_Id & currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id


        //1-
        switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
        //2-
        currentPlayerObject.cell4_Id = table[currentPlayerObject.cell4_Id].rightBrotherId;
        //3-
        currentPlayerObject.cell2_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
        //4-
        currentPlayerObject.cell1_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
        //5-
        switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id);
    }
}
function makeFourDotsStickVertical() {
    //this function takes a FourDots stick that is horizental and makes it vertical
    //How?
    //it replaces the second dot (from down to top) by the right brother of the lower dot,
    //and replaces the third dot (from down to top) by the rightBrother of the NEW second dot
    //and replaces the fourth dot (from down to top) by the rightBrother of the NEW third dot  

    //it replaces the second dot of the shape by the top brother of the first dot of the shape,
    //and replaces the third dot of the shape by the top brother of the new second dot of the shape,
    //and replaces the fourth dot of the shape by the top brother of the new third dot of the shape,
    if (numberInCellId(currentPlayerObject.cell1_Id) > numberInCellId(currentPlayerObject.cell2_Id)) {
        //so the dots of this fourDots stick from left to right are in the following order:
        //currentPlayerObject.cell4_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id

        //lets 1- switch off: currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id & currentPlayerObject.cell1_Id,
        //2- assign the top brother of currentPlayerObject.cell4_Id to currentPlayerObject.cell3_Id
        //3- assign the top brother of currentPlayerObject.cell3_Id to currentPlayerObject.cell2_Id
        //4- assign the top brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell1_Id 
        //5- switch on currentPlayerObject.cell3_Id & currentPlayerObject.cell2_Id & currentPlayerObject.cell1_Id

        //1-
        switchOffCells(currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell1_Id);
        //2-
        let digit_in_topBro4ID = numberInCellId(currentPlayerObject.cell4_Id) - 7;
        let topBro4ID = "cell" + digit_in_topBro4ID;
        currentPlayerObject.cell3_Id = topBro4ID;
        //3-
        let digit_in_topBro3ID = numberInCellId(currentPlayerObject.cell3_Id) - 7;
        let topBro3ID = "cell" + digit_in_topBro3ID;
        currentPlayerObject.cell2_Id = topBro3ID;
        //4-
        let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;
        let topBro2ID = "cell" + digit_in_topBro2ID;
        currentPlayerObject.cell1_Id = topBro2ID;
        //5-    
        switchOnCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell1_Id);
    }
    else {
        //so the dots of this fourDots stick from left to right are in the following order:
        //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id

        //lets 1- switch off: currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id & currentPlayerObject.cell4_Id,
        //2- assign the top brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell2_Id
        //3- assign the top brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id
        //3- assign the top brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
        //4- switch on currentPlayerObject.cell2_Id & currentPlayerObject.cell3_Id & currentPlayerObject.cell4_Id

        //1-
        switchOffCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
        //2-
        let digit_in_topBro1ID = numberInCellId(currentPlayerObject.cell1_Id) - 7;
        let topBro1ID = "cell" + digit_in_topBro1ID;
        currentPlayerObject.cell2_Id = topBro1ID;
        //3-
        let digit_in_topBro2ID = numberInCellId(currentPlayerObject.cell2_Id) - 7;
        let topBro2ID = "cell" + digit_in_topBro2ID;
        currentPlayerObject.cell3_Id = topBro2ID;
        //4-
        let digit_in_topBro3ID = numberInCellId(currentPlayerObject.cell3_Id) - 7;
        let topBro3ID = "cell" + digit_in_topBro3ID;
        currentPlayerObject.cell4_Id = topBro3ID;
        //5-    
        switchOnCells(currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    }
}
//***/
function isStickShape_Vertical() {
    //this function checks if the stick shape (twoDots, threeDots or fourDotsStick player) is vertical
    //it is vertical when one cell is the brotherBeneath of the other one
    if (table[currentPlayerObject.cell1_Id].brotherBeneathId == currentPlayerObject.cell2_Id
        ||
        table[currentPlayerObject.cell2_Id].brotherBeneathId == currentPlayerObject.cell1_Id) {
        return true;
    }
    else return false;
}
function isStickShape_Horizental() {
    //this function checks if the stick shape (twoDots, threeDots or fourDotsStick player) is horizental
    //it is horizental when one cell is the leftBrother of the other one
    if (table[currentPlayerObject.cell1_Id].leftBrotherId == currentPlayerObject.cell2_Id
        ||
        table[currentPlayerObject.cell2_Id].leftBrotherId == currentPlayerObject.cell1_Id) {
        return true;
    }
    else return false;
}
//*** END: ROTATE STICK SHAPE ***//
//
//
//*** BEGIN: ROTATE Z SHAPE ***//
function rotateFourDotsLetter_Z() {
    //vertical FourDotsLetter_Z shape will be rotated to be horizental only if some brothers <td> tags are not switched on
    //horizental FourDotsLetter_Z shape will be rotated to be vertical only if some brothers <td> tags are not switched on
    console.log("isFourDotsLetter_Z_tableRightSideLimit() " + isFourDotsLetter_Z_tableRightSideLimit());
    if (isFourDotsLetter_Z_Vertical() && !isFourDotsLetter_Z_tableRightSideLimit()) {
        if (!isFourDotsLetter_Z_Brothers_switchedOn("vertical to horizental")) {
            makeFourDotsLetter_Z_Horizental();
        }
    }
    else if (isFourDotsLetter_Z_Horizental() && !isFourDotsLetter_Z_tableTopLimit()) {
        if (!isFourDotsLetter_Z_Brothers_switchedOn("horizental to vertical")) {
            makeFourDotsLetter_Z_Vertical();
        }
    }
    else {
        //do nothing ... it is not possible to rotate this FourDotsLetter_Z shape
        return;
    }
}
function isFourDotsLetter_Z_Horizental() {
    //this function checks if the FourDotsLetter_Z is Horizental
    //it is Horizental when 'cell2_Id' is the rightBrother of 'cell1_Id' in the player object
    if (table[currentPlayerObject.cell1_Id].rightBrotherId == currentPlayerObject.cell2_Id) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_Z_Vertical() {
    //this function checks if the FourDotsLetter_Z is Vertical
    //it is Vertical when 'cell1_Id' is the brotherBeneath of 'cell2_Id' in the player object
    if (table[currentPlayerObject.cell2_Id].brotherBeneathId == currentPlayerObject.cell1_Id) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_Z_tableRightSideLimit() {
    //this function returns true if the right side limit of the table next to the shape
    //this function is used when trying to rotate a FourDotsLetter_Z FROM VERTICAL TO HORIZENTAL so that the player doesn't step out of the table

    //How?
    //FourDotsLetter_Z is vertical
    //if what seperate this FourDotsLetter_Z from the rightSideLimit of the table is nothing, then, return true
    //else return false
    //But How??
    //if (integerOf(cellID)+2) modulo 7 == 0 OR integerOf(cellID)+1) modulo 7 == 0 OR integerOf(cellID) modulo 7 == 0) then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell4_Id);
    console.log(integer_inID);
    if (integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isFourDotsLetter_Z_tableTopLimit() {
    //this function returns true only if the top limit of the table is just above the shape
    //this functino is used when trying to rotate a FourDotsLetter_Z FROM HORIZENTAL TO VERTICAL

    //How?
    //if what seperates the top limit of the table from the top dot of FourDotsLetter_Z is nothing then return true

    //But How??
    //the integer in the id of the top two dots of the FourDotsLetter_Z (cell1_Id and cell2_Id) should be less or equal to 7 (first tr tag)

    //cell1 and cell2, both of them are supposed to be the top dot of the shape
    let integer_inTopCellID1 = numberInCellId(currentPlayerObject.cell1_Id);
    let integer_inTopCellID2 = numberInCellId(currentPlayerObject.cell2_Id);
    if (integer_inTopCellID1 < 8 || integer_inTopCellID2 < 8) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_Z_Brothers_switchedOn(str) {
    //based on the rotation direction, we'll check two cells if they are switched on or not
    switch (str) {
        case "vertical to horizental":
            //so the player FourDotsLetter_Z is vertical and is going to be rotated to horizental

            //the two cells that we're going to check are:
            //1- rightBrother of cell3
            //2- rightBrother of cell4
            let cell3RightBrother = document.getElementById(table[currentPlayerObject.cell3_Id].rightBrotherId);
            let cell4RightBrother = document.getElementById(table[currentPlayerObject.cell4_Id].rightBrotherId);
            if (cell3RightBrother.className.includes("cell-on") || cell4RightBrother.className.includes("cell-on")) {
                return true;
            }
            else {
                return false;
            }
            break;

        case "horizental to vertical":
            //so the player FourDotsLetter_Z is horizental and is going to be rotated to vertical

            //the two cells that we're going to check are:
            //1- topBrother of cell4
            //2- topBrother of topBrother of cell4

            let integer_inCell4ID = numberInCellId(currentPlayerObject.cell4_Id);
            let topBrother_ofCell4 = integer_inCell4ID - 7;
            let topBrother_of_topBrother_ofCell4 = topBrother_ofCell4 - 7;
            if (topBrother_ofCell4 < 0 || topBrother_of_topBrother_ofCell4 < 0) {
                //so here we are already out of the table from the top side .. it will be considered as there are switched on cells
                return true;
            }
            else {
                let topCell1 = document.getElementById("cell" + topBrother_ofCell4);
                let topCell2 = document.getElementById("cell" + topBrother_of_topBrother_ofCell4);
                if (topCell1.className.includes("cell-on") || topCell1.className.includes("cell-on")) {
                    return true;
                }
                else {
                    return false;
                }
            }
            break;
    }
}
function makeFourDotsLetter_Z_Horizental() {
    //this function takes a FourDotsLetter_Z that is vertical and makes it horizental

    //the dots of this FourDotsLetter_Z from down to top and from left to right are in the following order:
    //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id

    //How?
    //cell1_Id is replaced by its topBrother
    //cell2_Id is replaced by its rightBrother
    //cell3_Id is replaced by its brotherBeneath
    //cell4_Id is replaced by the rightBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign the top brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell1_Id
    //3- assign the right brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the beneath brother of the currentPlayerObject.cell3_Id to currentPlayerObject.cell3_Id 
    //5- assign the right brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-    
    let integer_inCell1Id = numberInCellId(currentPlayerObject.cell1_Id);
    let integer_inCell1Id_topBrotherID = integer_inCell1Id - 7;
    currentPlayerObject.cell1_Id = "cell" + integer_inCell1Id_topBrotherID;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
    //4-
    currentPlayerObject.cell3_Id = table[currentPlayerObject.cell3_Id].brotherBeneathId;
    //5-
    currentPlayerObject.cell4_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
    //6- 
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
function makeFourDotsLetter_Z_Vertical() {
    //this function takes a FourDotsLetter_Z that is horizental and makes it vertical

    //the dots of this FourDotsLetter_Z from left to right and from top to down are in the following order:
    //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id

    //How?
    //cell1_Id is replaced by its beneathBrother
    //cell2_Id is replaced by its leftBrother
    //cell3_Id is replaced by its topBrother
    //cell4_Id is replaced by the topBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign the beneath brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell1_Id
    //3- assign the left brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the top brother of the currentPlayerObject.cell3_Id to currentPlayerObject.cell3_Id 
    //5- assign the top brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-   
    currentPlayerObject.cell1_Id = table[currentPlayerObject.cell1_Id].brotherBeneathId;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].leftBrotherId;
    //4-
    let integer_inCell3Id = numberInCellId(currentPlayerObject.cell3_Id);
    let integer_inCell3Id_topBrotherID = integer_inCell3Id - 7;
    currentPlayerObject.cell3_Id = "cell" + integer_inCell3Id_topBrotherID;
    //5-    
    integer_inCell3Id = numberInCellId(currentPlayerObject.cell3_Id);
    integer_inCell3Id_topBrotherID = integer_inCell3Id - 7;
    currentPlayerObject.cell4_Id = "cell" + integer_inCell3Id_topBrotherID;
    //6-
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
//*** END: ROTATE Z SHAPE ***//
//
//
//*** BEGIN: ROTATE 'THREE PLUS ONE' SHAPE ***//
function rotateFourDots_threePlusOne() {
    //vertical FourDots_threePlusOne shape will be rotated to be horizental only if some brothers <td> tags are not switched on
    //horizental FourDots_threePlusOne shape will be rotated to be vertical only if some brothers <td> tags are not switched on
    if (isFourDots_threePlusOne_Vertical() && !isFourDots_threePlusOne_tableRightSideLimit()) {
        console.log("going to rotate FourDots_threePlusOne from vertical to horizental");
        if (!isFourDots_threePlusOne_Brothers_switchedOn("vertical to horizental")) {
            makeFourDots_threePlusOne_Horizental();
        }
    }
    else if (isFourDots_threePlusOne_Horizental() && !isFourDots_threePlusOne_tableTopLimit()) {
        console.log("going to rotate FourDots_threePlusOne from horizental to vertical");
        if (!isFourDots_threePlusOne_Brothers_switchedOn("horizental to vertical")) {
            makeFourDots_threePlusOne_Vertical();
        }
    }
    else {
        console.log("cant rotate FourDots_threePlusOne");
        //do nothing ... it is not possible to rotate this FourDots_threePlusOne shape
        return;
    }
}
function isFourDots_threePlusOne_Horizental() {
    //this function checks if the FourDots_threePlusOne is Horizental
    //it is Horizental when 'cell3_Id' is the rightBrother of 'cell2_Id' in the player object
    if (table[currentPlayerObject.cell2_Id].rightBrotherId == currentPlayerObject.cell3_Id) {
        return true;
    }
    else return false;
}
function isFourDots_threePlusOne_Vertical() {
    //this function checks if the FourDots_threePlusOne is Vertical
    //it is Vertical when 'cell3_Id' is the brotherBeneath of 'cell4_Id' in the player object
    if (table[currentPlayerObject.cell4_Id].brotherBeneathId == currentPlayerObject.cell3_Id) {
        return true;
    }
    else return false;
}
function isFourDots_threePlusOne_tableRightSideLimit() {
    //this function returns true if the right side limit of the table next to the shape
    //this function is used when trying to rotate a FourDots_threePlusOne FROM VERTICAL TO HORIZENTAL so that the player doesn't step out of the table

    //How?
    //FourDots_threePlusOne is vertical
    //if what seperate this FourDots_threePlusOne from the rightSideLimit of the table is nothing, then, return true
    //else return false
    //But How??
    //in the player: cell1 is apart, cell4 cell3 cell2 are one above another
    //so if cell4 cell3 and cell2 are divisible by 7 then they are next to the rightSideLimit of the table
    //if (integerOf(cellID2)) modulo 7 == 0) then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell4_Id);
    if (integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isFourDots_threePlusOne_tableTopLimit() {
    //this function returns true only if the top limit of the table is just above the shape
    //this functino is used when trying to rotate a FourDots_threePlusOne FROM HORIZENTAL TO VERTICAL

    //How?
    //if what seperates the top limit of the table from the top dot of FourDots_threePlusOne (cell1_Id) is nothing then return true

    //But How??
    //the integer in the id of the top dot of the FourDots_threePlusOne (cell1_Id) should be less or equal to 7 (first tr tag)

    //cell1 is supposed to be the top dot of the shape
    let integer_inTopCellID1 = numberInCellId(currentPlayerObject.cell1_Id);
    if (integer_inTopCellID1 < 8) {
        return true;
    }
    else return false;
}
function isFourDots_threePlusOne_Brothers_switchedOn(str) {
    //based on the rotation direction, we'll check three cells if they are switched on or not
    switch (str) {
        case "vertical to horizental":
            //so the player FourDots_threePlusOne is vertical and is going to be rotated to horizental

            //the three cells that we're going to check are:
            //1- rightBrother of cell4
            //2- rightBrother of cell3
            //3- leftBrother of cell2
            let cell2LeftBrother = document.getElementById(table[currentPlayerObject.cell2_Id].leftBrotherId);
            let cell3RightBrother = document.getElementById(table[currentPlayerObject.cell3_Id].rightBrotherId);
            let cell4RightBrother = document.getElementById(table[currentPlayerObject.cell4_Id].rightBrotherId);
            if (cell2LeftBrother.className.includes("cell-on")
                || cell3RightBrother.className.includes("cell-on")
                || cell4RightBrother.className.includes("cell-on")) {
                return true;
            }
            else {
                return false;
            }
            break;

        case "horizental to vertical":
            //so the player FourDots_threePlusOne is horizental and is going to be rotated to vertical

            //the three cells that we're going to check are:
            //1- rightBrother of cell1
            //2- leftBrother of cell1
            //3- topBrother of leftBrother of cell1
            let cell1LeftBrother = document.getElementById(table[currentPlayerObject.cell1_Id].leftBrotherId);
            let cell1RightBrother = document.getElementById(table[currentPlayerObject.cell1_Id].rightBrotherId);
            let integer_in_cell1RightBrother = numberInCellId(table[currentPlayerObject.cell1_Id].rightBrotherId);
            let integer_in_topBrother_of_cell1RightBrother = integer_in_cell1RightBrother - 7;
            if (integer_in_topBrother_of_cell1RightBrother < 0) {
                //so here we are already out of the table from the top side .. it will be considered as there are switched on cells
                return true;
            }
            else {
                let cell1RightBrother_topBrother = document.getElementById("cell" + integer_in_topBrother_of_cell1RightBrother);
                if (cell1LeftBrother.className.includes("cell-on")
                    || cell1RightBrother.className.includes("cell-on")
                    || cell1RightBrother_topBrother.className.includes("cell-on")) {
                    return true;
                }
                else {
                    return false;
                }
            }            
            break;
    }
}
function makeFourDots_threePlusOne_Horizental() {
    //this function takes a FourDots_threePlusOne that is vertical and makes it horizental

    //the dots of this FourDots_threePlusOne from down to top and from left to right are in the following order:
    //currentPlayerObject.cell1_Id, currentPlayerObject.cell4_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell2_Id

    //How?
    //cell1_Id is replaced by its rightBrother
    //cell2_Id is replaced by its leftBrother
    //cell3_Id is replaced by its brotherBeneath
    //cell4_Id is replaced by the rightBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign the right brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell1_Id
    //3- assign the left brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the beneath brother of the currentPlayerObject.cell3_Id to currentPlayerObject.cell3_Id 
    //5- assign the right brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-
    currentPlayerObject.cell1_Id = table[currentPlayerObject.cell1_Id].rightBrotherId;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].leftBrotherId;
    //4-
    currentPlayerObject.cell3_Id = table[currentPlayerObject.cell3_Id].brotherBeneathId;
    //5- 
    currentPlayerObject.cell4_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
    //6-
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
function makeFourDots_threePlusOne_Vertical() {
    //this function takes a FourDots_threePlusOne that is horizental and makes it vertical

    //the dots of this FourDots_threePlusOne from top to down and from left to right are in the following order:
    //currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id

    //How?
    //cell1_Id is replaced by its beneathBrother
    //cell2_Id is replaced by its leftBrother
    //cell3_Id is replaced by its topBrother
    //cell4_Id is replaced by the topBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign the left brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell1_Id
    //3- assign the right brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the top brother of the currentPlayerObject.cell3_Id to currentPlayerObject.cell3_Id 
    //5- assign the top brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-   
    currentPlayerObject.cell1_Id = table[currentPlayerObject.cell1_Id].leftBrotherId;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
    //4-
    let integer_inCell3Id = numberInCellId(currentPlayerObject.cell3_Id);
    let integer_inCell3Id_topBrotherID = integer_inCell3Id - 7;
    currentPlayerObject.cell3_Id = "cell" + integer_inCell3Id_topBrotherID;
    //5-    
    integer_inCell3Id = numberInCellId(currentPlayerObject.cell3_Id);
    integer_inCell3Id_topBrotherID = integer_inCell3Id - 7;
    currentPlayerObject.cell4_Id = "cell" + integer_inCell3Id_topBrotherID;
    //6-
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
//*** END: ROTATE 'THREE PLUS ONE' SHAPE ***//
//
//
//*** BEGIN: ROTATE L SHAPE ***//
function rotate_fourDotsLetter_L(){
    //vertical FourDotsLetter_L shape will be rotated to be horizental only if some brothers <td> tags are not switched on
    //horizental FourDotsLetter_L shape will be rotated to be vertical only if some brothers <td> tags are not switched on
    if (isFourDotsLetter_L_Vertical() && !isFourDotsLetter_L_tableRightSideLimit()) {
        console.log("going to rotate FourDotsLetter_L from vertical to horizental");
        if (!isFourDotsLetter_L_Brothers_switchedOn("vertical to horizental")) {
            makeFourDotsLetter_L_Horizental();
        }
    }
    else if (isFourDotsLetter_L_Horizental() && !isFourDotsLetter_L_tableTopLimit()) {
        console.log("going to rotate FourDotsLetter_L from horizental to vertical");
        if (!isFourDotsLetter_L_Brothers_switchedOn("horizental to vertical")) {
            makeFourDotsLetter_L_Vertical();
        }
    }
    else {
        console.log("cant rotate FourDotsLetter_L");
        //do nothing ... it is not possible to rotate this FourDotsLetter_L shape
        return;
    }
}
function isFourDotsLetter_L_Horizental() {
    //this function checks if the FourDotsLetter_L is Horizental
    //it is Horizental when 'cell2_Id' is the rightBrother of 'cell1_Id' in the player object
    if (table[currentPlayerObject.cell1_Id].rightBrotherId == currentPlayerObject.cell2_Id) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_L_Vertical() {
    //this function checks if the FourDotsLetter_L is Vertical
    //it is Vertical when 'cell4_Id' is the rightBrother of 'cell3_Id' in the player object
    if (table[currentPlayerObject.cell3_Id].rightBrotherId == currentPlayerObject.cell4_Id) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_L_tableRightSideLimit() {
    //this function returns true if the right side limit of the table is next to the shape
    //this function is used when trying to rotate a FourDotsLetter_L FROM VERTICAL TO HORIZENTAL so that the player doesn't step out of the table

    //How?
    //FourDotsLetter_L is vertical
    //if what seperate this FourDotsLetter_L from the rightSideLimit of the table is nothing, then, return true
    //else return false
    //But How??
    //in the player: cell4 is on the right of cell3, celll3 is above cell2, cell2 is above cell1 ... so cell4 is the extreme right of this player
    //so if cell4 is divisible by 7 then it is one column far from the rightSideLimit of the table
    //if (integerOf(cellID4)) modulo 7 == 0) then return true
    let integer_inID = numberInCellId(currentPlayerObject.cell4_Id);
    if (integer_inID % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isFourDotsLetter_L_tableTopLimit() {
    //this function returns true only if the top limit of the table is just above the shape
    //this functino is used when trying to rotate a FourDotsLetter_L FROM HORIZENTAL TO VERTICAL

    //How?
    //if what seperates the top limit of the table from the top dots of FourDotsLetter_L (cell1_Id, cell2_Id and cell3_Id) is nothing then return true

    //But How??
    //the integer in the id of the top dots of the FourDotsLetter_L (cell1_Id, cell2_Id and cell3_Id) should be less or equal to 7 (first tr tag)

    //lets only consider cell1 from the top dots of the shape
    let integer_inTopCellID1 = numberInCellId(currentPlayerObject.cell1_Id);
    if (integer_inTopCellID1 < 8) {
        return true;
    }
    else return false;
}
function isFourDotsLetter_L_Brothers_switchedOn(str) {
    //based on the rotation direction, we'll check four cells if they are switched on or not
    switch (str) {
        case "vertical to horizental":
            //so the player FourDotsLetter_L is vertical and is going to be rotated to horizental

            //the four cells that we're going to check are:
            //1- rightBrother of cell4
            //2- rightBrother of cell2
            //3- rightBrother of rightBrother of cell2
            //4- rightBrother of rightBrother of cell1
            let cell4RightBrother = document.getElementById(table[currentPlayerObject.cell4_Id].rightBrotherId);
            let cell2RightBrother = document.getElementById(table[currentPlayerObject.cell2_Id].rightBrotherId);
            let rightBrotherOf_cell2RightBrother = document.getElementById(table[cell2RightBrother.id].rightBrotherId);
            let cell1RightBrother = document.getElementById(table[currentPlayerObject.cell1_Id].rightBrotherId);
            let rightBrotherOf_cell1RightBrother = document.getElementById(table[cell1RightBrother.id].rightBrotherId);
            if (cell4RightBrother.className.includes("cell-on")
                || cell2RightBrother.className.includes("cell-on")
                || rightBrotherOf_cell2RightBrother.className.includes("cell-on")
                || rightBrotherOf_cell1RightBrother.className.includes("cell-on")) {
                return true;
            }
            else {
                return false;
            }
            break;

        case "horizental to vertical":
            //so the player FourDotsLetter_L is horizental and is going to be rotated to vertical

            //the four cells that we're going to check are:
            //1- topBrother of cell1
            //2- topBrother of cell2
            //3- topBrother of cell3
            //4- Brother beneath of cell1
            let integer_inCell1ID = numberInCellId(currentPlayerObject.cell1_Id);
            let topBrother_ofCell1 = integer_inCell1ID - 7;
            let integer_inCell2ID = numberInCellId(currentPlayerObject.cell2_Id);
            let topBrother_ofCell2 = integer_inCell2ID - 7;
            let integer_inCell3ID = numberInCellId(currentPlayerObject.cell3_Id);
            let topBrother_ofCell3 = integer_inCell3ID - 7;
            if (topBrother_ofCell1 < 0 || topBrother_ofCell2 < 0 || topBrother_ofCell3 < 0) {
                //so here we are already out of the table from the top side .. it will be considered as there are switched on cells
                return true;
            }
            else {
                let topCell1 = document.getElementById("cell" + topBrother_ofCell1);
                let topCell2 = document.getElementById("cell" + topBrother_ofCell2);
                let topCell3 = document.getElementById("cell" + topBrother_ofCell3);
                let cell1BrotherBeneath = document.getElementById(table[currentPlayerObject.cell1_Id].brotherBeneathId);
                if (topCell1.className.includes("cell-on")
                || topCell2.className.includes("cell-on")
                || topCell3.className.includes("cell-on")
                || cell1BrotherBeneath.className.includes("cell-on")) {
                    return true;
                }
                else {
                    return false;
                }
            }            
            break;
    }
}
function makeFourDotsLetter_L_Horizental() {
    //this function takes a FourDotsLetter_L that is vertical and makes it horizental

    //the dots of this FourDotsLetter_L are in the following order:
    //cell4 is on the right of cell3, celll3 is above cell2, cell2 is above cell1

    //How?
    //cell1_Id is replaced by current cell2_Id
    //cell2_Id is replaced by its rightBrother
    //cell3_Id is replaced by the rightBrother of the new cell2_Id
    //cell4_Id is replaced by the beneathBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign currentPlayerObject.cell2_Id to currentPlayerObject.cell1_Id
    //3- assign the right brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the right brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id 
    //5- assign the beneath brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-
    currentPlayerObject.cell1_Id = currentPlayerObject.cell2_Id;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
    //4-
    currentPlayerObject.cell3_Id = table[currentPlayerObject.cell2_Id].rightBrotherId;
    //5- 
    currentPlayerObject.cell4_Id = table[currentPlayerObject.cell3_Id].brotherBeneathId;
    //6-
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
function makeFourDotsLetter_L_Vertical() {
    //this function takes a FourDotsLetter_L that is horizental and makes it vertical

    //the dots of this FourDotsLetter_L are in the following order:
    //cell4 is beneath cell3, celll3 is the right brother of cell2, cell2 is the right brother of cell1

    //How?
    //cell1_Id is replaced by its beneathBrother
    //cell2_Id is replaced by its leftBrother
    //cell3_Id is replaced by the topBrother of the new cell2_Id
    //cell4_Id is replaced by the rightBrother of the new cell3_Id



    //lets 1- switch off: cell1_Id & cell2_Id & cell3_Id & cell4_Id,
    //2- assign the beneath brother of currentPlayerObject.cell1_Id to currentPlayerObject.cell1_Id
    //3- assign the left brother of the currentPlayerObject.cell2_Id to currentPlayerObject.cell2_Id
    //4- assign the top brother of the new currentPlayerObject.cell2_Id to currentPlayerObject.cell3_Id 
    //5- assign the right brother of the new currentPlayerObject.cell3_Id to currentPlayerObject.cell4_Id 
    //6- switch on: cell1_Id & cell2_Id & cell3_Id & cell4_Id,

    //1-
    switchOffCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
    //2-   
    currentPlayerObject.cell1_Id = table[currentPlayerObject.cell1_Id].brotherBeneathId;
    //3-
    currentPlayerObject.cell2_Id = table[currentPlayerObject.cell2_Id].leftBrotherId;
    //4-
    let integer_inCell2Id = numberInCellId(currentPlayerObject.cell2_Id);
    let integer_inCell2Id_topBrotherID = integer_inCell2Id - 7;
    currentPlayerObject.cell3_Id = "cell" + integer_inCell2Id_topBrotherID;
    //5-    
    currentPlayerObject.cell4_Id = table[currentPlayerObject.cell3_Id].rightBrotherId;
    //6-
    switchOnCells(currentPlayerObject.cell1_Id, currentPlayerObject.cell2_Id, currentPlayerObject.cell3_Id, currentPlayerObject.cell4_Id);
}
//*** BEGIN: ROTATE L SHAPE ***//
//******************** END: ROTATE SHAPE AREA ******************//
//
//
//
//
//*************** keyDown events ***************/


function playerBehave(e) {
    //Based on the key pressed, this function make the player move down/left/right or just make it rotate
    if (e.keyCode == 40) {
        //move down
        movePlayerDown(currentPlayerObject);
    }
    else if (e.keyCode == 39) {
        //move right
        movePlayerRight(currentPlayerObject);
    }
    else if (e.keyCode == 37) {
        //move left
        movePlayerLeft(currentPlayerObject);
    }
    else if (e.keyCode == 38) {
        //rotate the current shape
        rotateShape();
    }
}
function numberInCellId(cellIDString) {
    return parseInt(cellIDString.slice(4));
}
function switchOffCells(...cellsIds){
    //I used Rest Parameter as an argument to be able to handle one cell and more than one cell in the same function 
    //and to avoid writing two functions: one fr handling one cell, and one for handling many cells

    //this function receives an array containing Ids of cells (as string) to switch off
    for(let i=0; i<cellsIds.length; i++){
        document.getElementById(cellsIds[i]).className = "cell-off";
    }
}
function switchOnCells(...cellsIds){
    //I used Rest Parameter as an argument to be able to handle one cell and more than one cell in the same function 
    //and to avoid writing two functions: one fr handling one cell, and one for handling many cells

    //this function receives an array containing Ids of cells (as string) to switch on
    for(let i=0; i<cellsIds.length; i++){
        document.getElementById(cellsIds[i]).className = "cell-on";
    }
}
