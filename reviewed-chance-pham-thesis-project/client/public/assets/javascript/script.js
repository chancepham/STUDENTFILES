$(document).ready(function () {
    const hamburgerBtn = $('#hamburger')
    const mobileMenu = $('.modal-menu');
    const createPlanBtn = $('.create-plan-btn');
    mobileMenu.hide()
    $('body').on('change', '#shakeSize', function () {
        if ($('#shakeSize').val() === 'Small') {
            $('#shakePrice').text('$1.99')
        }
        if ($('#shakeSize').val() === 'Medium') {
            $('#shakePrice').text('$2.99')
        }
        if ($('#shakeSize').val() === 'Large') {
            $('#shakePrice').text('$3.99')
        }
    });
    $('body').on('click', '.deleteFromCart', function () {
        console.log('deleted')
        let theDiv = $(this).parent().parent()
        theDiv.remove()
        let total = 0
        for (let i = 0; i < $('.eachPriceOrdered').length; i++) {
            let temp = $('.eachPriceOrdered').eq(i).text().slice(1);
            console.log(temp)
            total += Number(temp)
            console.log(total + 'sdsdsdtotal')
        }
        $('#totalPrice').text('$' + total)
    });
    $('body').on('change', '#drinkSize', function () {
        if ($('#drinkSize').val() === 'Small') {
            $('#drinkPrice').text('$0.99')
        }
        if ($('#drinkSize').val() === 'Medium') {
            $('#drinkPrice').text('$1.99')
        }
        if ($('#drinkSize').val() === 'Large') {
            $('#drinkPrice').text('$2.99')
        }
    });
    
    $('body').on('click', '.orderThis', function () {
        let imageSrc = $(this).parent().find('img').attr('src')
        console.log(imageSrc)
        let name = $(this).parent().find('.eachName').text()
        let price = $(this).parent().find('.eachPrice').text()
        let cartItemsDiv = document.getElementById('cartItems');
        let itemObject;
        if (name === 'Shake') {
            let shakeFlavor = $(this).parent().find('#shakeFlavor').val()
            let shakeSize = $(this).parent().find('#shakeSize').val()
            itemObject = `<div class="eachItemOrdered">
                    <img src="${imageSrc}" class="eachMenuItemOrdered py-3"></img>
                    <div class="float-end text-right">
                          <button class="btn py-2 px-3 bg-primary text-white deleteFromCart">Delete</button>
                        <p class="eachNameOrdered text-xx-large py-3" value='${name}' flavor="${shakeFlavor}" size="${shakeSize}">${name}(${shakeSize} ${shakeFlavor})</p>
                        <p class="shakeFlavor text-x-large py-1">${shakeFlavor}</p>
                        <p class="shakeSize text-x-large py-1">${shakeSize}</p>
                        <p class="eachPriceOrdered text-xx-large  py-3">${price}</p>
                    </div>
                </div>
                <hr>`;
        }
        else if (name === 'Soft Drink') {
            let drinkFlavor = $(this).parent().find('#drinkFlavor').val()
            let drinkSize = $(this).parent().find('#drinkSize').val()
            itemObject = `<div class="eachItemOrdered">
                    <img src="${imageSrc}" class="eachMenuItemOrdered py-3"></img>
                    <div class="float-end text-right">
                          <button class="btn py-2 px-3 bg-primary text-white deleteFromCart">Delete</button>
                        <p class="eachNameOrdered text-xx-large py-3" value='${name}' flavor="${drinkFlavor}" size="${drinkSize}">${name} (${drinkSize} ${drinkFlavor})</p>
                        <p class="drinkFlavor text-x-large py-1">${drinkFlavor}</p>
                        <p class="drinkSize text-x-large py-1">${drinkSize}</p>
                        <p class="eachPriceOrdered text-xx-large  py-3">${price}</p>
                    </div>
                </div>
                <hr>`;
        }
        else {
            itemObject = `<div class="eachItemOrdered">
                    <img src="${imageSrc}" class="eachMenuItemOrdered py-3"></img>
                    <div class="float-end text-right">
                    <button class="btn py-2 px-3 bg-primary text-white deleteFromCart">Delete</button>
                        <p class="eachNameOrdered text-xx-large py-3" value='${name}'>${name}</p>
                        <p class="eachPriceOrdered text-xx-large  py-3">${price}</p>
                    </div>
                </div>
                <hr>`;
        }



        $(itemObject).prependTo(cartItemsDiv)
        console.log('item added')
        let total = 0
        for (let i = 0; i < $('.eachPriceOrdered').length; i++) {
            let temp = $('.eachPriceOrdered').eq(i).text().slice(1);
            console.log(temp)
            total += Number(temp)
            console.log(total + 'sdsdsdtotal')
        }
        $('#totalPrice').text('$' + total)
    })
    $('body').on("click", "#hamburger", function () {
        mobileMenu.slideToggle()
    });
    $('body').on("click", '#closeCart', function () {
        $('#orderModal').fadeOut('slow')
    });
    $('body').on("click", '#submitOrder', function () {
        $('#orderModal').fadeOut('slow')
    });
    $('body').on("click", "#openCart", function () {
        $('#orderModal').fadeIn('slow')
    });
    $('body').on("click", "#optionOpen", function () {
        $('#options').slideToggle('slow')
    });
    function altSlide() { //alternate slider
        $('.slide').hide(); // hide the all slides
        $('.slide').eq(0).show(); // show first slide
        $('.slider').each(function () { // do for each
            var $this = $(this); // da real this
            var $group = $this.find('.slide-group'); // find the group
            var $slides = $this.find('.slide'); // find the slide
            var buttonArray = []; // button array for adding buttons
            var currentIndex = 0; // what number
            var timeout; // time change
            function move(newIndex) { // move function
                var animateRight, slideRight;
                advance();
                if ($group.is(':animated') || currentIndex === newIndex) { // is it animated or is it the same slide
                    return; // cancel out
                }
                buttonArray[currentIndex].removeClass('active'); // remove class of active from current button
                buttonArray[newIndex].addClass('active'); // add class to the current active button

                $group.animate({ opacity: 0 }, function () { // animation for showing the slide
                    $slides.eq(currentIndex).css({ display: 'none' });
                    $slides.eq(newIndex).css({ opacity: 1 });
                    $group.css({ opacity: 1 });
                    currentIndex = newIndex;

                });
                $slides.eq(newIndex).show(function () { // show the concerning slide
                    display: 'inline-block';
                });
            }
            function advance() { // change slide
                clearTimeout(timeout); // reset timeout
                timeout = setTimeout(function () { // 15 sec functuon
                    if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1); // change slide
                    }
                    else {
                        move(0); // change slide
                    }
                }, 15000);
            }
            $.each($slides, function (index) {
                var $button = $('<button type ="button" class="slide-btn"> .</button>'); // create button
                if (index === currentIndex) {// if the index is the current
                    $button.addClass('active'); // add class active
                }
                $button.on('click', function () { // on click call move function
                    move(index);

                }).appendTo($this.find('.slide-buttons'));
                buttonArray.push($button); // push the buttons into the array
            });
            advance(); // change slides
            function after() {
                $('img').setTimeout
            }
        })
    }
    $('body').on("click", ".history", function () {
        altSlide()
    });
    altSlide() // self call
});