import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

//
// DATA Pregnant,Glucose,Bp,Skin,Insulin,bmi,Pedigree,Age,Label
//
const csvFile = "./data/diabetes.csv" //data ingeladen
const trainingLabel = "Label" //label van deze dataset heet label, deze kijkt of er diabetes is (1) of niet (0)
const ignoredColumns = ['Skin']  //wil ik negeren

//
// laad csv data als json
//
function loadData() {
    Papa.parse(csvFile, { //inladen van de file
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => trainModel(results.data) // gebruik deze data om te trainen
    })
}


//
// MACHINE LEARNING - Decision Tree
//
function trainModel(data) {
    
    // todo : splits data in traindata en testdata
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    console.log(data);
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 1000, 800, decisionTree.toJSON())

    // todo : maak een prediction met een sample uit de testdata
    // DATA Pregnant,Glucose,Bp,Skin,Insulin,bmi,Pedigree,Age,Label
     let diabetes = {
        Pregnant: "1",
        Glucose:"89",
        Bp:"65",
        Skin: "1",
        Insulin: "0",
        bmi: "30.5",
        Pedigree: "0.525",
        Age: "29"
        //Label: "0"
    }



    // todo : bereken de accuracy met behulp van alle test data
    testDiabetes(testData, decisionTree)


}
function testDiabetes(testData, decisionTree){
    const patientWithoutLabel = Object.assign({}, testData)
    delete patientWithoutLabel.Label

    let correctPredictions=0;
    let totalPredictions = testData.length;

    for (let i = 0; i < testData.length; i++) {
        let prediction = decisionTree.predict(patientWithoutLabel[i])
        console.log(`The prediction is: ${prediction}`)
        
        if (prediction == testData[i].Label){
            correctPredictions++
            console.log('This prediction was correct!')
        }
        else {
            console.log('The prediction was incorrect :(')
        }
    }
    let accuracy = correctPredictions/totalPredictions *100;
    accuracy = Math.round(accuracy * 100)/100 //afronden op 2 getallen achter de komma
    console.log (`${accuracy}`)
    
    document.getElementById("accuracy").innerHTML = `Accuracy is ${accuracy}%`    
}

loadData()