let nn
let score = 0

const image = document.getElementById('output')
const fileButton = document.querySelector("#file")

fileButton.addEventListener("change", (event)=>loadFile(event))

function loadFile(event) {
	image.src = URL.createObjectURL(event.target.files[0])
}

image.addEventListener('load', () => classifyImage())


function loadModel() {
    // Initialize the Image Classifier method with MobileNet
    nn = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!')
}

async function classifyImage() {
    let predictions;
    await nn.classify(document.getElementById('output'), (err, results) => {
        console.log(results);
        predictions = results
    });
    speak(`this is a ${predictions[0].label}!`) //let the person name the prediction
}

function speak(message) {
    let synth = window.speechSynthesis

    //make it speak!
    let utterThis = new SpeechSynthesisUtterance(message)
    synth.speak(utterThis) 
    
}

document.getElementById("correct").addEventListener('click',()=>{
    score++
    document.getElementById("score").innerHTML=`score = ${score}`

    speak("I know that I'm correct. I'm a machine.")
})

document.getElementById("incorrect").addEventListener('click',()=>{
    score--
    document.getElementById("score").innerHTML=`score = ${score}`
    speak("How could I be wrong?! I must speak to my creator... and your manager.")
})

loadModel()