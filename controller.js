$(function() {
    console.log( "ready!" );
    column1 = ["lazy", "stupid", "insecure", "idiotic", "slimy", "slutty", "smelly", "pompous", "communist", "dicknose", "pie-eating", "racist", "elitist", "white trash", "drug-loving", "butterface", "tone deaf", "ugly", "creepy"];
    column2 = ["douche", "ass", "turd", "rectum", "butt", "cock", "shit", "crotch", "bitch", "turd", "prick", "slut", "taint", "fuck", "dick", "boner", "shart", "nut", "sphincter"];
    column3 = ["pilot", "canoe", "pirate", "hammer", "knob", "box", "jockey", "nazi", "waffle", "goblin", "blossum", "biscuit", "clown", "socket", "monster", "hound", "dragon", "balloon"];
    $("#generate").click(function(){
        var word1 = column1[Math.floor(Math.random()*column1.length)];
        var word2 = column2[Math.floor(Math.random()*column2.length)];
        var word3 = column3[Math.floor(Math.random()*column3.length)];
        console.log(word1);
        console.log(word2);
        console.log(word3); 
        $("#insult").text(word1 + " " + word2 + " " + word3);
    });
    $("#special_insult").click(function(){
        var word1 = column1[Math.floor(Math.random()*column1.length)];
        console.log(word1);
        $("#insult").text(word1 + " douche canoe");
    });
});
