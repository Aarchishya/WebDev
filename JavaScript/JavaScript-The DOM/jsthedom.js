<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulating DOM</title>
</head>
<body>
    <div id="main" class="container">
        <ul id="nav">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>More Help</li>
        </ul>
    </div>
    <div class="container">
        Another Container
    </div>
    <script>
        let main = document.getElementById('main');
        console.log(main);
        let nav = document.getElementById('nav');
        console.log(nav);
        let container=document.getElementsByClassName('container');
        console.log(container);
        // let sel = document.querySelector('.container');
        // console.log("Selector Return",sel);
        // let sel = document.querySelector('#nav>li');
        // console.log("Selector Return",sel);
        let sels = document.querySelectorAll('#nav>li');
        console.log("Selector Return",sels);

    </script>
</body>
</html>
