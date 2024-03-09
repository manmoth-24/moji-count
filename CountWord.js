function CountWord(){
    var words = [

    ];
    var sentence = document.getElementById('text-input').value;
    for (index in sentence){
        var indexOfSentence = sentence[index]
        var isInIndex = false;
        words.forEach((word)=>{
            if (word.text == indexOfSentence){
                isInIndex = true;
                word.count ++;
            }
        })
        if (!isInIndex){
            words.push({text: indexOfSentence,count: 1});
        }
    }
    words.sort((a,b)=>{
        return b.count - a.count
    })
    var exportText = document.getElementById('exportText');
    var addText = '';
    addText += '<table class="exportTable" border="1">';
    addText += '<tr><th>文字</th><th>個数</th></tr>'
    words.forEach((element)=>{
        if (element.text === "　"){
            addText += `<tr class="trOuterTd">
            <td>${element.text}&#x3C;-全角スペース&#x3E;</td>
            <td>${element.count}</td>
        </tr>`
        }else if(element.text === " "){
            addText += `<tr class="trOuterTd">
            <td>${element.text}&#x3C;-半角スペース&#x3E;</td>
            <td>${element.count}</td>
        </tr>`
        }else if(element.text === '/n'){
            addText += `<tr class="trOuterTd">
            <td>${element.text}&#x3C;-改行&#x3E;</td>
            <td>${element.count}</td>
            </tr>`
        }else{
            addText += `<tr class="trOuterTd">
            <td>${element.text}</td>
            <td>${element.count}</td>
            </tr>`
        }
    })
    addText += '</table>'
    exportText.innerHTML = addText;
}