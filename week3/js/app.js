console.log("hello");

const knn = new kNear(3)

//learn the cat
knn.learn([10, 1, 2], "cat")
knn.learn([12, 2, 3], "cat")
knn.learn([11, 1.7, 2.5], "cat")

//learn the dog
