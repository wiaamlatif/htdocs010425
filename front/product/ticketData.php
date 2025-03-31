<?php 
//person = {name:"John", age:31, city:"New York"};

        if(isset($_POST[''])){

        $idCategory = $_POST[''];

        } 

        require_once "\htdocs\include\database.php";
    
        //>> feed new items of the new ticket=cart
        $sql = "SELECT * FROM tickets
                INNER JOIN lignes_ticket ON tickets.id_ticket  = lignes_ticket.id_ticket
                INNER JOIN products      ON products.id_product = lignes_ticket.id_product
                INNER JOIN categories    ON categories.id_category = products.id_category";    
                 
         $result = mysqli_query($conn, $sql);
                        
         $prdPanier = mysqli_fetch_all($result, MYSQLI_ASSOC);          

        $totalPanier=0;
        $arrayTicket=[];       
        foreach ($prdPanier as $produit){  
        $idTicket=$produit['id_ticket'];
        $idProduct=$produit['id_product'];
        $nameProduct=$produit['name_product'];
        $idCategory=$produit['id_category'];                        
        $quantity=$produit['quantity'];
        $price=$produit['price'];
        $totalItem=$quantity * $price;                        
        $totalPanier+=$totalItem;               
        $imgSrc=$produit['imgSrc'];
        
        $elementTicket = [
                          "id_ticket"  => $idTicket,
                          "id_product" => $idProduct,
                         "id_category" => $idCategory,
                        "name_product" => $nameProduct,
                          "quantity"   => $quantity,
                          "price"      => $price,
                          "totalItem"  => $totalItem,
                          "imgSrc"     => $imgSrc
                         ]; 

        array_push($arrayTicket,$elementTicket);  

        } 
        
        print_r(json_encode($arrayTicket));
              
        ?>          