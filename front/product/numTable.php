<table class="table table-striped border border-dark mx-4">

    <thead>
        <tr>
            <th colspan="3">
            <?php include 'dropDownVendeur.php';?>
            </th>                                                         
        </tr>
        <tr><!-- table row--->
            <th class="border border-dark" style="font-size:12px;" >Nr Ticket</th>
            <th class="border border-dark">Total</th>
            <th colspan="2">Action</th>            
        </tr>
    </thead>

    <tbody id="displayNum">

      

    </tbody> 

    <tfoot>
        <td class="border border-dark">
         <span class="badge text-bg-dark fw-bold fs-6">Total</span>
        </td>

        <td class="border border-dark">
         <span class="badge text-bg-dark fw-bold fs-6" id="totalTickets"></span>
        </td>        
        
        <td>
            <button class="vider btn btn-success"><i>+</i></button>                    
        </td>
    </tfoot>
</table>

