# Testing performance of re-load vs update data

When modifying state of an array of objects, is there a difference between getting all data and setting state or just updating state with one adjustment.

So far, render is called the same number of times regardless approach.

This example uses data from Firebase. You will need a firebase collection to run. (since Firebase treats importing a json file vs. adding items differently, you will need to upload or push items to firebase). Something like this:

```
//step one, initialize firebase
<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
   <script>
   // taken from your Firebase config settings
      var config = {
         apiKey: "reallyLongNUMBER",
         authDomain: "YOUR-PROJECT.firebaseapp.com",
         databaseURL: "https://YOUR-PROJECT.firebaseio.com",
         projectId: "YOUR-PROJECT",
         storageBucket: "YOUR-PROJECT.appspot.com",
         messagingSenderId: "SOME-MORE-NUMBERS"
      };
      firebase.initializeApp(config);
   </script>
```
```
// step 2
// only use this when wanting to upload to FB
 const attractionArray = []; // array of objects to upload
 let allAttractions = firebase.database().ref('myAttractions/');
   attractionArray.forEach((item) => {
    allAttractions.push(item);
 });
```

Refer to App.js for 3 different examples.


