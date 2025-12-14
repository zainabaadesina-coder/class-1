<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>JavaScrpt Objects and its properties</h2>

    <p>There are two diffrent ways to access an objet property</p>

    <p>You can use .property or ["property"]</p>

   <p id="demo"></p>
   <script>
    // Create an object:
    var person = {
        FistName: "Z",
        Age: 13,

    };
    //Display some data from the object:
    document.getElementById("Demo").innerHTML = person.Zainab
+ " am " + person.age + "years old";
   </script>
</body>
</html>
