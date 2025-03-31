<?php

$cartData=$_POST['cartData'];
$idProduct=$cartData[0]['idProduct'];
$price = $cartData[0]['price'];
$quantity = $cartData[0]['quantity'];

//echo "Working";
//echo "<pre>";
//var_dump($cartData);
//echo "</pre>";

echo $idProduct ;

if(!empty($cartData)){

  require_once "\htdocs\include\database.php";

  $sql="INSERT INTO `items_panier` 
                     (`id_product`, 
                      `price`, 
                      `quantity`, 
                      `created_at`)
            VALUES 
                    (                  
                    $idProduct,
                    $price,
                    $quantity,
                    CURRENT_TIMESTAMP);";


  $result = mysqli_query($conn,$sql);

  mysqli_close($conn);
   
}


