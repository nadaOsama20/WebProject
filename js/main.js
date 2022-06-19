$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


// var quantity = $('.product-item option:selected').find(":selected").val();



// $('.product-info .quantity').on('change', function () {

//     var quantity = $(this).val();
//     var price = $('.product-price');
    
// var TotaPrice = quantity * price;
// $('.product-total').text(TotaPrice.arseInt);

// })


$('#quantity').on('change' , function(){

    let value = $(this).val();
    let price = $('#price').val()
    
    $('#total').text(price * value )

    })


    