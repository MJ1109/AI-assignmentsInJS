console.log("hello");

const knn = new kNear(3)

//learn the cat
knn.learn([10, 1, 2], "cat")
knn.learn([12, 2, 3], "cat")
knn.learn([11, 1.7, 2.5], "cat")

//learn the dog
knn.learn([22, 5, 8], "dog")
knn.learn([26, 7, 9], "dog")
knn.learn([24, 9, 9.7], "dog")

console.log("learning completed!")

//hij heeft nu geleerd, dus predicten kan starten
let unknownAnimal = [12,8, 10]
console.log(`I think this is a ${knn.classify(unknownAnimal)}`)