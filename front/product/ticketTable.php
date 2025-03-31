<table class="table table-bordered table-sm border-dark mx-2">    
    <thead>
        <tr>
            <th class="border border-dark"colspan="4" height="">              
             <span>Ticket Nr:<span id ="displayNrTicket" class="badge text-bg-dark"></span></span>
            </th>
            <th class="border border-dark" colspan="4" height=""> 
             <span id ="displayDate"class="badge text-bg-success rounded-pill fw-bold fs-5"></span>
            </th>

        </tr>
        <tr><!-- table row--->
        <th width="5%">IdTck</th><!-- table head--->         
        <th width="5%">IdPrd</th><!-- table head--->       
        <th width="10%">Category</th><!-- table head--->       
        <th width="20%">imgSrc</th>          
        <th width="20%">Product</th>          
        <th width="10%">Quantite</th> 
        <th width="10%">Prix</th> 
        <th width="20%">Total</th>                             
        </tr>
    </thead>

    <tbody id="displayTicket">

    </tbody>

    <tfoot>
        <?php
        $totalPanier=0
        ?>
        <tr>  
            <td colspan="6"></td>              
            <td><strong>Total</strong></td>
            <td><strong class="tdtotalPanier"><?=number_format($totalPanier,2)?></strong></td>
        </tr>    
        <tr>                     
            <td colspan="8">
                <div class="d-flex justify-content-center">                                               
                    <button class="vider btn btn-danger rounded-pill mx-1">Vider</button>                    
                    <button class="valider btn btn-success rounded-pill">Ticket</button>  
                </div>                       
            </td>                                 
        </tr>    
    </tfoot> 
</table>
