var text = "Full Stack Developer .";
var div = document.getElementById("dynamic-txt");


function textTypingEffect(element, text, i = 0 ){
    if (i === 0){
        element.textContent += "";
    }

    element.textContent += text[i];

    if (i === text.length -1){
        return;
    }

    setTimeout(()=> textTypingEffect(element, text, i+1), 50);

}

textTypingEffect(div, text);

