jQuery(document).ready(function($)
{
    initMenu();
	initFavorite();
	initFixProductBorder();
	initIsotopeFiltering();
	initPriceSlider();
	initCheckboxes();
    
    function initIsotopeFiltering()
    {
    	var sortTypes = $('.type_sorting_btn');
    	var sortNums = $('.num_sorting_btn');
    	var sortTypesSelected = $('.sorting_type .item_sorting_btn is-checked span');
    	var filterButton = $('.filter_button');

    	if($('.product-grid').length)
    	{
            filterButton.on('click', function()
	        {
	        	$('.product-grid').isotope({
		            filter: function()
		            {
		            	var priceRange = $('#amount').val();
			        	var priceMin = parseFloat(priceRange.split('-')[0].replace('VNĐ', ''));
			        	var priceMax = parseFloat(priceRange.split('-')[1].replace('VNĐ', ''));

			        	var itemPrice = $(this).find('.product_price').clone().children().remove().end().text().replace( 'VNĐ', '');
						var itemPrice2 =itemPrice.replace('.', '');

			        	return ((itemPrice > priceMin) && (itemPrice < priceMax)) ||  ((itemPrice2 > priceMin) && (itemPrice2 < priceMax));
		            },
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		        });
	        });
        }
    }

    function initPriceSlider()
    {
		$( "#slider-range" ).slider(
		{
			range: true,
			min: 0,
			max: 2000,
			values: [ 0, 580 ],
			slide: function( event, ui )
			{
				$( "#amount" ).val(ui.values[ 0 ] + " VNĐ" + " - " + ui.values[ 1 ] + ".000" + " VNĐ");
			}
		});
			
		$( "#amount" ).val($( "#slider-range" ).slider( "values", 0 )+ " VNĐ" + " - " + $( "#slider-range" ).slider( "values", 1 ) + ".000" + " VNĐ");
    }
});
