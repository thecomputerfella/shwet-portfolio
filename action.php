<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shwet - Portfolio</title>
    <link href="./styles/header.css" rel="stylesheet" />
    <link href="./styles/book.css" rel="stylesheet" />

</head>

<body>

    <?php include 'header.php' ?>
    <div class="container">
        

        <?php
        $title = ['settlemint', 'pollo', 'encap', 'gen-y'];
        $projImage = ['./imgs/settlemint-img.jpg', './imgs/pollo-img.jpg', './imags/encap-img.jpg'];
        $desc = ['a bill splitting app', 'a polls & opinions app', 'a short article reader app', 'a tech team website'];

        for ($i = 0; $i < 5; $i++) {
            echo '
                
        <div class="card">
                    <div class="top">
                        <img src = ' . $projImage[$i] . ' alt="">
                        <div class="name">' . $title[$i] . '</div>
                    </div>
                    <div class="details">
                        <p>'. $desc[$i] . '/Day</p>
                    </div>
                    <div>
                        <form method="GET" action="book_action.php">
                            <input type="text" value=' . $title[$i] . ' name="carName" style="display:none" >
                            <input type="text" value=' . $desc[$i] . ' name="price" style="display:none" >
                            <input type="text" value=' . $projImage[$i] . ' name="image" style="display:none" >
                        </form>
                    </div>
                </div>';
                }
                ?>
            </div>
        </div>
    </div>

</body>

</html>