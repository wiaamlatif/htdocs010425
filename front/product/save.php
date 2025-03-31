          <tr>
            <td class="border border-dark fw-bold">000072</td>
            <td class="border border-dark fw-bold">165</td>
            <td>
                <div class="d-flex">
                <button class="supItemCart btn btn-danger btn-sm">
                <i class="fa-solid fa-trash-can"></i>
                </button>

                <button class="supItemCart btn btn-success btn-sm">
                <i class="fa-solid fa-pencil"></i>
                </button>
                </div>

            </td>
          </tr>

<?php
    $sql ="SELECT * FROM tickets
    INNER JOIN items_panier 
    ON tickets.id_ticket  = items_panier.id_ticket
    WHERE tickets.id_user = $idEmployee;";
?>

<?php
//  var semaine = array['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
?>