// your code here!
// your code here!

function averageWordLength(words){
	var lengthArray=[];
	var total=null;
	var avgLength=null;
	for (var word in words){
		lengthArray.push(words[word].length)
		total=total +lengthArray[word];
	}
	avgLength= total/lengthArray.length;
	// alert(avgLength	)
	$("#avgWordLength").text(avgLength.toString())
}


function averageScenLength(sentences){
	var lengthArray=[];
	var total=null;
	var avgLength=null;
	for (var word in sentences){
		lengthArray.push(sentences[word].length)
		total=total +lengthArray[word];
	}
	avgLength= total/lengthArray.length;
	// alert(avgLength	)
	$("#avgScenLength").text(avgLength.toString())
}





function handleForm(){
    $("form").submit(function(event){
    	event.preventDefault();
        var userText= $(this).find('textarea[name="user-text"]').val();
        var formattedString = getTokens(userText);
        var formattedScentence= sentenceArray(userText);
        totWord(formattedString);
        uniqueWord(formattedString);
        averageWordLength(formattedString);
        averageScenLength(formattedScentence);
    })
}



function totWord(userText){
	var totalWordCount= userText.length;
	$("#wordCountText").text(totalWordCount.toString());
}


function uniqueWord(word){
	var uniqueWordCount;
	var wordObject={};
	for (var i=0; i< word.length; i++){
		if (word[i] in wordObject){
			wordObject[word[i]]++;
		}
		else{
			wordObject[word[i]]=1;
		}
	}
	uniqueWordCount= Object.keys(wordObject).length;
	$("#uniqueWordCount").text(uniqueWordCount.toString())
}





function sentenceArray(rawString) {
  // returns an list of sentences. Sentences are seperated by a [.!?]
  var newString;
  var trimString= rawString.trim();
  var newTrimString=[]
  newString = trimString.toLowerCase().split(/[!.?]+/);
  newString.pop();
  for (var word in newString){
  	newTrimString[word]=newString[word].trim();
  }
  return newTrimString;
}

function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).sort();

}

$(function(){
	handleForm();
	$(".text-report").removeClass("hidden");
})


