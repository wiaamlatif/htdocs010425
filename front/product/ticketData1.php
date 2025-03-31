<?php 

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
        foreach ($prdPanier as $produit){ 
        $idPanier=$produit['id_ligne_ticket'];
        $idProduct=$produit['id_product'];
        $idCategory=$produit['id_category'];                        
        $quantityItem=$produit['quantity'];
        $price=$produit['price'];
        $totalItem=$quantityItem * $price;                        
        $totalPanier+=$totalItem;               
        $imgSrc=$produit['imgSrc'];                 
        ?>              
        <tr class="row<?=$idPanier?>" data-id="<?=$idPanier?>">
        <td class="col1"><?=$idPanier?></td>

        <td class="col2"><?=$idProduct?></td>

        <td class="col3"><?=$produit['name_category']?></td>

        <td class="col4">            
        <img class="img img-fluid" src="/uploads/products/<?=$produit['imgSrc']?>" width="70px" alt="">
        </td>           

        <td class="col5"><?=$produit['name_product']?></td>

        <td class="col6"><!---Quantity------> 
        <div class="d-flex border-top border-bottom border-dark">
        <button class="supItemCart btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button>               
        <button class="decrementPanier btn btn-primary">-</button>
        <span class="quantity"><?=number_format($quantityItem,0)?></span>
        <button class="incrementPanier btn btn-primary">+</button> 
        </div>
        </td>

        <td class="col7"><?=number_format($price,2)?></td>

        <td class="col8"><?=number_format($totalItem,2)?></td>

        </tr>                 
        <?php     
        }                             
        ?>          