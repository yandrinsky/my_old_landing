// Update Item Ciunt Price Start
function refreshItemOrderPrice(count){
    var box          = $('.js-element-order-count-price'),
        price        = parseFloat(box.data('price')),
        currentPrice = parseFloat(price * count).toFixed(2);

    $('.js-add-cart-item').data('count', count);

    box.text(currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\''));
}
// Update Item Ciunt Price End

// UpdateCart Start
function refreshCartItemOrderPrice(count, element) {
    $.ajax({
        url: element.data('url'),
        type: 'POST',
        dataType: 'json',
        data: {count: count, put: 0},
        success: function(data){
            if (data.count) {
                $('.js-cart-count-box').text(data.count);
            }
            if (data.itemPrice) {
                element.closest('.js-cart-btn-wrapper').find('.js-element-order-cart-price').text(data.itemPrice);
            }
            if (data.cost) {
                $('.js-element-order-cart-price-all').text(data.cost);
            }
        }
    });
}
// UpdateCart End

$(document).ready(function() {
    // Marketplace Filter dropdown Start 
    $('.js-filter-arrow').click(function(){
        var box = $(this).parent().find('.js-filter-arrow-box');
        $(this).toggleClass('filter-arrow-close');
        box.toggle('fast');
    });
    // Reset Filter
    $('.js-marketplace-filter-form-reset').click(function(event) {
        $('#marketplace-filter-form input[type=text]').val('');
        $('#marketplace-filter-form input[type=radio]').attr('checked', false);
        $('#marketplace-filter-form input[type=checkbox]').attr('checked', false);
        $('#marketplace-filter-form select option').removeAttr('selected');
    });
    // Marketplace Filter dropdown End
     
    // Tooltip start
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // Tooltip end

    // main animation block start
    $('.js-main-animation').animate({'opacity': 1},  1000, function(){
        $('.js-main-animation-images').animate({'opacity': 1},  1000, function(){
            $('.js-main-animation-lines').animate({'opacity': 1},  1000, function(){
                $('.js-main-animation-content').animate({'opacity': 1},  1000);
            })
        })
    })
    // main animation block end

    // Add Cart Element Start
    $('.js-add-cart-item').click(function(event) {
        var $this = $(this);

        if (!$this.hasClass('js-disable-add-cart')) {
            $this.addClass('js-disable-add-cart');
            var redirect = $this.data('redirect');
            $.ajax({
                url: $this.data('url'),
                type: 'POST',
                dataType: 'json',
                data: {count: $this.data('count'), put: 1},
                success: function(data){
                    if (data.count) {
                        $('.js-cart-count-box').text(data.count);
                    }
                    if (redirect) {
                        window.location.href = redirect;
                    }
                    $this.removeClass('blink').addClass('blink');
                    setTimeout(function() {
                        $($this).removeClass('blink');
                    }, 2400)
                }
            });
            $this.removeClass('js-disable-add-cart');
        }
    });
    // Add Cart Element End

    // News page Start
    // News page Calendar Start
    $('.js-news-calendar-btn').click(function(event) {
        $(this).hide().parent().find('.js-news-calendar-btn').not($(this)).show('fast');
        $('.js-news-calendar-text').toggle('fast');
        $('.js-news-calendar-list').toggle('slide');
    });
    // News page Calendar End
    // News page End

    // File input name start
    $('#uploaded-file').change(function(e){
        var fileName = e.target.files[0].name;
        document.getElementById('file-name').innerHTML = 'File name: '+fileName;
    });
    // File input name end

    // Product page start
    // Prodict Order Count Start
    $('.js-element-order-minus').click(function(event) {
        var input = $(this).closest('.js-element-order-counter-wrapper').find('.js-element-order-text');
        var count = parseInt(input.val());
        if (count != 1) {
            input.val(count-1).change();
        }
    });
    $('.js-element-order-plus').click(function(event) {
        var input = $(this).closest('.js-element-order-counter-wrapper').find('.js-element-order-text');
        var count = parseInt(input.val());
        if (count < parseInt(input.attr('max'))) {
            input
                .val(count+1)
                .change();
        }
    });
    $('.js-element-order-text').on("change paste keyup input", function() {
        let $this = $(this),
            val = parseInt($this.val(), 10),
            max = parseInt($this.attr("max"), 10),
            min = parseInt($this.attr("min"), 10);

        if (isNaN(val)) {
            val = 1;
        } else if (val > max) {
            val = max;
        } else if (val < min) {
            val = min;
        }

        $this.val(val);

        if ($this.hasClass('js-element-order-text-cart')) {
            refreshCartItemOrderPrice(val, element);
        }
        else{
            refreshItemOrderPrice(val);
        }
    });
    // Prodict Order Count End

    // Galery product page start
    if ($('#imageGallery').length) {
        $('#imageGallery').lightSlider({
            gallery:true,
            item:1,
            loop:true,
            thumbItem:4,
            slideMargin:0,
            enableDrag: true,
            // currentPagerPosition:'left',
            controls: false,
            onSliderLoad: function() {
                $('#imageGallery').removeClass('cS-hidden');
            }
        });
    }
    // Galery product page end

    // Calculator product page start
    $('.js-close-calculator').click(function(event) {
        if (!$(this).hasClass('closed')) {
            $('.js-calculator-inner').slideUp('slow');
            $(this).addClass('closed');
            $(this).find('span').text($(this).data('opened'));
            $('.js-close-wrapper').addClass('pt-0');
            $('.js-open-calculator-ico').removeClass('d-none').show();
            $('.js-close-calculator-ico').addClass('d-none').hide();
        }
        else {
            $('.js-calculator-inner').slideDown('slow');
            $(this).removeClass('closed');
            $(this).find('span').text($(this).data('closed'));
            $('.js-close-wrapper').removeClass('pt-0');
            $('.js-close-calculator-ico').removeClass('d-none').show();
            $('.js-open-calculator-ico').addClass('d-none').hide();
        }
    });

    $('.js-calculator-element').click(function(event) {
        $('.js-close-calculator').show('slow');
        $('.js-calculator-inner').slideDown('slow');
        $(this).addClass('active');
    });

    $('.js-calculator-form').on("change", 'input', function(event) {
        event.preventDefault();
        var form = $(this).closest('form');
        var url  = form.data('url');

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            data: form.serialize(),
            success: function(data){
                $.each(data, function(index, el) {
                    console.log(index);
                    $('.js-calculator-element-'+index).text(el);
                });
            }
        });
    });
    // Calculator product page end
    // Product page end

    // Main page start
    // Main page slider start
    if ($('#main-slider').length) {
        $('#main-slider').lightSlider({
            item:1,
            auto:true,
            pauseOnHover: true,
            pause: 3500,
            speed: 600,
            slideMargin:0,
            loop:true,
            onSliderLoad: function() {
                $('#main-slider').removeClass('cS-hidden');
            }
        });
    }
    // Main page slider start
    // Main page end

    // Catalog page start
    // Catalog page price block start
    if ($('#range-price').length) {
        $('#range-price').ionRangeSlider({
            type: "double",
            grid: true,
            min: $(this).data('min'),
            max: $(this).data('max'),
            prefix: "$",
            onChange: function(data) {
                $('.range-price-from').text(data.from);
                $('.range-price-to').text(data.to);
            },
        });
    }
    // Catalog page price block end
    // Catalog page end
});
