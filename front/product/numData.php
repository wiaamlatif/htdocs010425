<?php
     
   if(isset($_POST['idEmployee'])){
   $idEmployee = $_POST['idEmployee'];
   } 
     
    require_once "\htdocs\include\database.php";

    //>> Get produits       
    $sql ="SELECT * FROM tickets
           WHERE tickets.id_user = $idEmployee;";
          
            
    $result = mysqli_query($conn, $sql);
                    
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
     //>> Close Database
    //mysqli_close($conn);     
       $somTickets=0;
       foreach ($tickets as $row) {  
       $somTickets+=$row['total_ticket'];
?>  
         <tr>
           <td class="border border-dark fw-bold"><?=$row['nr_ticket']?></td>
           <td class="border border-dark fw-bold"><?=$row['total_ticket']?></td>
           <td>
              <div class="d-flex">

                <button class="supItemCart btn btn-danger btn-sm">
                <i class="fa-solid fa-trash-can"></i>
                </button>
                                
                <input type="hidden" id="numTicketEdited<?=$row['id_ticket']?>" value="<?=$row['nr_ticket']?>">
                <button id="editTicket<?=$row['id_ticket']?>" class="btn btn-success btn-sm"
                 onclick="displayTicket(<?=$row['id_ticket']?>)">
                <i class="fa-solid fa-pencil"></i>
                </button>

              </div>

            </td>
         </tr>
<?php     
  }                             
?> 

<input id="somTickets" type="text" value="<?=$somTickets?>">       