$(() => {
    
    
    $('body').hide();
    $('body').fadeIn(1000);
    $('#homeMain').hide();
    $('#homeMain').fadeIn(2000);
    $('.baseBox').hide();
    $('.baseBox').fadeIn(2000);
    $('#filter').hide();
    $('#artDesc').hide();
    $('.gallery').hide();
    $('.gallery').slideDown(2000);
    $('#descm')
    .click((e) => {
        e.preventDefault();
        
        $('#artDesc').slideToggle('slow');
        
        $(e.target)
        .text(
            $(e.target).text() === 'Hide' ?
            'Learn More' : 'Hide'
            );
        });
        
        $('#readm')
        .click((e) => {
            e.preventDefault();
            
            $('#filter').slideToggle('slow');
            
            $(e.target)
            .text(
                $(e.target).text() === 'Hide Filter' ?
                'See Filter' : 'Hide Filter'
                );
            });
            
            
            
            $( ".gallery img" ).mouseenter(function() {
                
                $(this).parent().children('.overlay').fadeIn(300);
                $(this).parent().children('.overlay').mouseleave(function() {
                    $( ".gallery img" ).parent().children('.overlay').fadeOut(300);
                    $(this).parent().children('.overlay').fadeOut(300);
                });
                
            });
            $('#searchbtn')
            .click(function() {
                var priceBox = $('#pricebox').val();
                var eachPic = $('.span-1-of-3 p');
                
                for(var i = 0; i < eachPic.length; i++){
                    var loopEachPic = eachPic.eq(i).attr('value')
                    if(loopEachPic > priceBox){
                        $('.span-1-of-3').eq(i).hide();
                       
                        
                    }
                }
                $('.gallery img').hide();
                var checkbox = document.getElementsByName('size');
                for(i = 0; i < checkbox.length; i++) {
                    if(checkbox[i].checked) {
                        for(var j = 0; j < $('.gallery img').length; j++){
                            
                            if($('.gallery img').eq(j).attr('data_value1') === checkbox[i].value){
                                $('.gallery img').eq(j).fadeIn(200);
                                $('#readm').click();
                            }
                        }
                    }
                }
                
            });
            
            $(document).keyup(function (e) {
                switch (e.which) {
                    case 13:
                    if($('#pricebox').val() !== ""){
                        var priceBox = $('#pricebox').val();
                        var eachPic = $('.span-1-of-3 p');
                        
                        for(var i = 0; i < eachPic.length; i++){
                            var loopEachPic = eachPic.eq(i).attr('value')
                            if(loopEachPic > priceBox){
                                $('.span-1-of-3').eq(i).hide();
                                
                            }
                        }
                        $('.gallery img').hide();
                        var checkbox = document.getElementsByName('size');
                        for(i = 0; i < checkbox.length; i++) {
                            if(checkbox[i].checked) {
                                for(var j = 0; j < $('.gallery img').length; j++){
                                    
                                    if($('.gallery img').eq(j).attr('data_value1') === checkbox[i].value){
                                        $('.gallery img').eq(j).fadeIn(200);
                                        $('#readm').click();
                                    }
                                }
                            }
                        }
                        
                        
                    }
                }
            }); 
            
        });
        
        
        