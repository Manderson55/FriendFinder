// ===============================================================================
// DATA
// this array will hold the friends information

var friendsArray = [
  {
    name: "Ahmed",
    photoURL: "./images/ahmed.jpg",
    answers: [1,3,2,1,5,5]
  },
    {
    name: "Mary",
    photoURL: "./images/Mary.jpg",
    answers: [1,1,1,1,1,1]
  },
  {
    name: "Vladimir",
    photoURL: "./images/Vladimir.jpeg",
    answers: [5,5,5,5,5,5]
  }

];

// Exporting the friendsArray to make it available to other files using require.
module.exports = friendsArray;