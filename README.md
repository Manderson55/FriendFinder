# FriendFinder
Friend Finder - Node and Express Servers


Overview

This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

It uses Express to handle routing.


Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Your server.js file should require the following npm packages: express, body-parser and path.
It has the following routes:
- A GET Route to /survey which should display the survey page.
- A default USE route that leads to home.html which displays the home page. 

The apiRoutes.js file contain two routes:

- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 



The data will be stored as an array of objects. Each of these objects will follow the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

It will determine the user's most compatible friend by converting each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, it will compare the difference between current user's scores against those from other users, question by question, and will add the differences to get a value to be matched with the stored information.
The closest match will be the user with the least amount of difference.

Once we find the current user's most compatible friend, we will display the result as a modal pop-up.

