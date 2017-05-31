var friends = ['Bill','Bob','Jim','Jimmy','Charles'];
for (var i = 0; i< friends.length; i++){
    console.log("\n" + friends[i] + ": ");
    console.log("");
    for (var j = 99; j > 0; j--){
        var song = "";
        if(j === 1){
            song+= " " + String(j) + " line of code in the file, "+ String(j) + " line of code;  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.";            
        }else{
            song+= " " + String(j) + " lines of code in the file "+String(j)+" lines of code;  " + friends[i] + " strikes one out, clears it all out," + String(j-1) + " more lines of code in the file.";
        }
        console.log(song);
    }
}