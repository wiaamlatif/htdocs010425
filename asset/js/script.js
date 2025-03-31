function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('displayTime').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function displayTicket(idTicket){
  
  var numTicketEdited = document.getElementById('numTicketEdited'+idTicket).value

  document.getElementById("displayNrTicket").innerHTML = numTicketEdited ;

  var xhr = new XMLHttpRequest();

  xhr.open('GET','ticketData.php',true)

  //displayTicket
  xhr.onload = function() {

      if(xhr.status==200){

      var  data = JSON.parse(this.response);

      data.forEach(element => {
        
        console.log(element)

        const rowTable=document.createElement('tr'); 
        document.getElementById('displayTicket').appendChild(rowTable);

          //id_ticket
          var  dataTable=document.createElement('td');
          dataTable.innerText=element.id_ticket;        
          rowTable.appendChild(dataTable)

          //id_product
          var dataTable=document.createElement('td');
          dataTable.innerText=element.id_product;        
          rowTable.appendChild(dataTable)

          //id_category
          var dataTable=document.createElement('td');
          dataTable.innerText=element.id_category;        
          rowTable.appendChild(dataTable)

          //imgSrc
          var dataTableImage=document.createElement('img');
          dataTableImage.src="/uploads/products/"+element.imgSrc;        
          dataTableImage.style.width="50px";
          rowTable.appendChild(dataTableImage)          

          //name_product
          var dataTable=document.createElement('td');
          dataTable.innerText=element.name_product;        
          rowTable.appendChild(dataTable)          

          //quantity
          var dataTable=document.createElement('td');
          dataTable.innerText=element.quantity;        
          rowTable.appendChild(dataTable)                    

          //price
          var dataTable=document.createElement('td');
          dataTable.innerText=element.price;        
          rowTable.appendChild(dataTable)          

          //totalItem
          var dataTable=document.createElement('td');
          dataTable.innerText=element.totalItem;        
          rowTable.appendChild(dataTable)                    

      });
                   
          


                        
      }                

   }
  
  xhr.send()

}



$(document).ready(function(){


    function getTime(){

      const d = new Date();
      d.getHours();
  
      $('.displayTime').text(d.getHours()+":"+d.getMinutes())

      window.location.href = "index.php";

    }
   
  //>>C:\htdocs\front\product\dropDownBtns.php  
    $(".dropDrownCategory").click(function(){

      const selectedVal = $(this).text();

      
      var $idCategory = $(this).siblings('.inputBtn');
      var idCategory=0
          idCategory = parseInt($($idCategory).val())

      $.post('productsData.php',{idCategory},

        function(data)
        { 

          $('#displayProducts').html(data);

        });
                            //alert(idCategory);
                          // $('.codeCategory').hide()
                          //  alert(selectedVal);
    });
  
    //>>C:\htdocs\front\product\dropDownBtns.php
    // $('.codeEmployee').hide()  
    $(".dropDownVendeur").click(function(){

      const selectedVal = $(this).text();

      var $idEmployee = $(this).siblings('.inputBtn');
      var idEmployee = $($idEmployee).val()
      
     //>>C:\htdocs\front\product\dropDownVendeur.php
      $('.btnVendeur').text(selectedVal)
     
    
     $.post('numData.php',{idEmployee:idEmployee},

      function(data)
      { 
        $('#displayNum').html(data);       
      });

      $.post('numSum.php',{idEmployee:idEmployee},

      function(data)
      { 
        $('#totalTickets').html(data);       
      });

    });//dropDownVendeur


     
    // $('selector').css('cursor', 'pointer'); 
    $('.imgProduct').css('cursor', 'pointer'); 

 //>> C:\htdocs\front\product\index.php    
    $('.imgProduct').click(function(){

    var cartData = [];
  
     var $idProduct = $(this).siblings('.idProduct');
     var idProduct=$($idProduct).text()
    
    //  alert(idProduct)
    //=========================
     var $price = $(this).siblings('.price');
     var price=$($price).text()      
     
     var idUser=parseInt($('.codeEmployee').val())

    currentQuantity = 1;        
    
    
    cartData.push({        
        idProduct: idProduct,                 
        quantity : currentQuantity, 
        price    : price
     });

     console.log(cartData);
     
     $.post('updatePanier.php',{cartData},

        function(data)
        { 

          $('#myTicket').html(data);

        });

    //=========================
        window.location.href = "index.php";

     });


    
    //>> C:\htdocs\front\product\index.php
    $('.btnEmployee').click(function(){
  
      var $idEmployee = $(this).siblings('.idEmployee');
      var idEmployee=$($idEmployee).val()
  
     $.post('tableProducts.php',{idEmployee:idEmployee},
      function(data)
      {  
        $('#productsTable').html(data);
      });
  
     });

    //>> C:\htdocs\front\category\index.php
    $('.btnCategory').click(function(){
  
    var $idCategory = $(this).siblings('.idCategory');
    var idCategory=$($idCategory).val()

   $.post('cardsProducts.php',{idCategory:idCategory},
    function(data)
    {  
      $('#productsCards').html(data);
    });

   });
  
    //>> C:\htdocs\front\category\categorie.php
    $('.increment').click(function(){
      
        var cartData = [];

        var $idProduct = $(this).siblings('.idProduct');
        var idProduct=$($idProduct).val()

        var $price = $(this).siblings('.price');
        var price=$($price).val()        

        var $quantity = $(this).siblings('.quantity');       
        currentQuantity = parseInt($quantity.text())+1;        
        $quantity.text(currentQuantity);
        
        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });
    })

   
    //>> C:\htdocs\front\category\categorie.php
    $('.decrement').click(function(){

        var cartData = [];

        var $idProduct = $(this).siblings('.idProduct');
        var idProduct=$($idProduct).val()

        var $price = $(this).siblings('.price');
        var price=$($price).val()        

       
        var $quantity = $(this).siblings('.quantity');       
        currentQuantity = parseInt($quantity.text());        
        if(currentQuantity>0){
            currentQuantity = currentQuantity-1;           
            $quantity.text(currentQuantity);
        }
        
        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });

    })

    

    //=================================
    function somPanier() {
        //........................
        var somCart=0;
        var totalHtml = document.body.childNodes[1].childNodes[1].children[0].children[0].childNodes[3].children
        
        $(totalHtml).each(function(){
            var totalItem=$(this).children('.col8').text();
            somCart+=parseInt(totalItem);
        })
        
        //........................       
        return somCart;
      };    
    //=================================
    
    //>> C:\htdocs\front\category\panier.php
    $('.incrementPanier').click(function() {

        var cartData = [];

        var $quantity = $(this).siblings('span');
        var currentQuantity = parseInt($quantity.text())+1;
            $quantity.text(currentQuantity);

        var $idProduct = $(this).parent().siblings('.col2').text();
        var  idProduct = parseInt($idProduct)

        var $price = $(this).parent().siblings('.col7').text();           
        var price = parseInt($price);

        var totalItem = currentQuantity*price;
   
        $(this).parent().siblings(".col8").text(totalItem); 
    
        $('.tdtotalPanier').text(somPanier().toFixed(2));


        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });

    });//increment
   
    //>> C:\htdocs\front\category\panier.php
    $('.decrementPanier').click(function() {
        var cartData = [];

        var $quantity = $(this).siblings('span');
        var currentQuantity = parseInt($quantity.text());
        if(currentQuantity>0){
            currentQuantity = currentQuantity-1;
            $quantity.text(currentQuantity);
        }

        var $idProduct = $(this).parent().siblings('.col2').text();
        var  idProduct = parseInt($idProduct)

        var $price = $(this).parent().siblings('.col7').text();           
        var price = parseInt($price);

        var totalItem = currentQuantity*price;
   
        $(this).parent().siblings(".col8").text(totalItem); 
    
        $('.tdtotalPanier').text(somPanier().toFixed(2));


        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });        
        
    });//decrement

//>> C:\htdocs\front\category\panier.php 
$('.vider').click(function() {

  
  window.location.href = "truncatePanier.php";
 // window.location.replace("http://www.w3schools.com");

 
});


//>> C:\htdocs\front\category\panier.php ==============================
$('.valider').click(function() {

    //le contenu du panier est deplace vers les tables tickets, lignes_tickets

    var cartData = [];

    var rowsPanier = document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].children
    $(rowsPanier).each(function() {

    var idPanier   = $(this).find('.col1').text();

    var idProduct  = $(this).find('.col2').text();

    var quantity    = $(this).find('.col6').find('span').text();

    var price       = $(this).find('.col7').text();

    
        cartData.push({ 
                        idPanier : idPanier,
                        idProduct: idProduct,                 
                        quantity : quantity, 
                        price    : price
                    });
    });

    console.log(cartData); 

    $.post('savePanier.php',{cartData},
        function(data)
        {  
        $('#result').html(data);
        });

//=======================< C:\htdocs\front\category\panier.php >=============
});//valider

});//ready


