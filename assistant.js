const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

window.addEventListener('load', () => {
    speak(" technito is activated now");
    speak("Go in online");
    wishMe();
})

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Moring Boss  how can i help you");
    }

    else if (hr == 12) {
        speak("Good noon Boss  how can i help you");
    }

    else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss  how can i help you");
    }

    else {
        speak("Good Evening Boss  how can i help you");
    }
}

btn.addEventListener('click', ()=>{
    recognition.start();
})
const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}


function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did no understand what you said please try again";

    if(message.includes('hai') || message.includes('hello')){
        const finalText = "Hello Boss have a good day";
        speech.text = finalText;
    }

    else if(message.includes('how are you')){
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')){
        const finalText = "My name is tecnito";
        speech.text = finalText;
    }

    else if(message.includes('can you help me')){
        const finalText = "sure its my job   how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('open google')){
        window.open("https://google.com", "_blank");
        const finalText = "opening google";
        speech.text = finalText;
    }

    else if(message.includes('open amazon')){
        window.open("https://www.amazon.in", "_blank");
        const finalText = "opening amazon";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')){
        window.open("https://instagram.com", "_blank");
        const finalText = "opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')){
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "opening face book";
        speech.text = finalText;
    }
    
    else if(message.includes('open youtube')){
        window.open("https://youtube.com/", "_blank");
        const finalText = "opening you tube";
        speech.text = finalText;
    }

    else if(message.includes('open twitter')){
        window.open("https://twitter.com/", "_blank");
        const finalText = "opening twitter";
        speech.text = finalText;
    }

    else if(message.includes('open byjus')){
        window.open("https://byjus.com/", "_blank");
        const finalText = "opening byjus";
        speech.text = finalText;
    }

    else if(message.includes('what is')  || message.includes('who is') || message.includes('what are')){
        window.open('https://www.google.com/search?q=/'+message.replace(" ", "+"));
        const finalText = "This is what i found on internet regarding"+message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')){
        window.open('https://en.wikipedia.org/wiki/'+message.replace("wikipedia", "+"));
        const finalText = "This is what ifound on internet regarding"+message;
        speech.text = finalText;
    }

    else if(message.includes('tell me time now')){
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('tell me today date')){
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculater')){
        window.open('calculater:///');
        const finalText = "Opening calculater";
        speech.text = finalText;

    }

    else {
        window.open('https://www.google.com/search?q='+message.replace(" ","+"));
        const finalText = "I found some information for " + message + "on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
