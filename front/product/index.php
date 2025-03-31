<?php $title ="Table des produits"; ?>


<?php ob_start();?>
<!------------------------content----------------------------------->
   <?php include '\htdocs\include\nav.php';?>

   <div class="container text-center py-2">
      <div class="row">

         <div class="col-3">            
              <?php include 'numTable.php';?>
         </div><!--- col  ----->               

         <div class="col-5" onload="alert('Salut')">          
              <?php include 'ticketTable.php';?>          
         </div><!--- col  ----->         
         
         <div class="col-4">
            <?php include 'productsTable.php';?>
         </div><!--- col  ----->         

      </div><!--- row  ----->
   </div><!---container ----->              


<!-----------------------content------------------------------------>
<?php $content = ob_get_clean(); ?>


<?php require_once 'C:\htdocs\layout.php'?>





