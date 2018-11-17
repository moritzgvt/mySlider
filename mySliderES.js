/*
*
* External Stylesheet for mySlider Plugin
*
* Author: moritzgvt
*
* Licence: CC-BY-NC
*
*/


	( function( $ ) {

		jQuery.fn.mySlider = function( type, duration, transition, interval ) {


			// Set default parameters
			if( !type ) {
				type = 'classic';
			}

			if( !duration ) {
				duration = 200;
			}
			
			if( !transition ) {
				transition = 'linear';
			}

			if( !interval ) {
				interval = 5000;
			}

			// Check parameters
			if( Math.floor(type) == type && jQuery.isNumeric(type) ) {
				duration = type;
				type = 'classic';
			}

			if( Math.floor(transition) == transition && jQuery.isNumeric(transition) ) {
				interval = transition;
				transition = 'linear';
			} 


			// Set variables
			var sliderContainer = jQuery( this );

			var sliderClass = sliderContainer.attr('class').trim();

			if( sliderClass.indexOf( ' ' ) >= 0 ) {
				console.log( '%c "' + sliderClass + '": Your selected Container can only have one Class!', 'display: inline-block; width: 100%; background: rgba( 255,50,50,0.4); color: #000' );
			}

			var img = sliderContainer.children( 'ul' ).children( 'li' ).children( 'img' );

			var mySliderWidth,
				mySliderItemCount,
				mySliderListWidth,
				mySliderHeight,
				runned;


			// Set styles
			var setResponsive = function( context ) {

				// Get width of SliderFrame (div)
				// The width of the SliderFrame equals to the width of the SliderItems (li)
				mySliderWidth = context.width();

				// Get Amount of Pictures in Slider
				mySliderItemCount = sliderContainer.children( 'ul' ).children( 'li' ).length;

				// Give SliderItemList (ul) absolute width of all SliderItems
				mySliderListWidth = mySliderItemCount * mySliderWidth;

				sliderContainer.children( 'ul' ).css({ 'width': mySliderListWidth + 'px' });


				// Add mySlider CSS
				sliderContainer.css({
					'position': 'relative',
					'height': '100%',
					'width': '100%',
					'overflow': 'hidden',
				});

				sliderContainer.children( 'ul' ).css({
					'position': 'absolute',
					'height': '100%',
					'padding': '0px',
					'margin': '0px',
					'float': 'left',
				});

				sliderContainer.children( 'ul' ).children( 'li' ).css({
					'position': 'relative',
					'listStyle': 'none',
					'float': 'left',
					'width': mySliderWidth + 'px',
					'height': '100%',
					'display': 'inline-block',
				});


				img.css({
					'position': 'relative',
					'objectFit': 'cover',
					'width' : '100%',
					'top': '50%',
					'left': '50%',
					'transform': 'translateX(-50%) translateY(-50%)',
				});

				mySliderHeight = context.height();

				// Add min-height and -width dependent on the img ratio
				if( img.height >= img.width && mySliderHeight > img.height ) {

					img.css({ 'minWidth': mySliderWidth + 'px' });

				} else {

					img.css({ 'minHeight': mySliderHeight + 'px' });

				}
	
			}

			setResponsive( jQuery(this) );

			// Set functions
			var forward = function( context ) {

				// Slide ul to the left for the width of one li.
				context.children( 'ul' ).animate({
					left: '-' + mySliderWidth + 'px'
				}, duration, transition, function() {

					// Get first li an append it to the End. Set ul to 0px.
					var temporaryFirstElement = context.children( 'ul' ).children( 'li' ).first();
					temporaryFirstElement.detach();
					context.children( 'ul' ).css('left', '0px');
					context.children( 'ul' ).append( temporaryFirstElement );

				});

			}

			var backward = function( context ) {


				// Get last li an prepend it to the ul. Set ul to the left for the width of one li.
				context.children( 'ul' ).css('left', '-' + mySliderWidth + 'px');
				var temporaryLastElement = context.children( 'ul' ).children( 'li' ).last();
				context.children( 'ul' ).prepend( temporaryLastElement );
				
				// Animate the ul to 0px.
				context.children( 'ul' ).animate({
					left: '0px'
				}, duration, transition);

			}

			if( type == 'classic' ) {

				// Append Navigation Elements
				sliderContainer.append( '<div class="mySlider_left"></div>' );
				sliderContainer.append( '<div class="mySlider_right"></div>' );				

				sliderContainer.find( '.mySlider_right' ).click( function() {

					forward( jQuery(this).parent() );

				});

				sliderContainer.find( '.mySlider_left' ).click( function() {

					backward( jQuery(this).parent() );

				});

			} else if( type == 'auto' ) {

				setInterval( function() {
					forward( sliderContainer );
				}, interval);

			}

			jQuery( window ).resize( function() {
				setResponsive( jQuery( this ) );
			});

		}; // fn.mySlider

	})( jQuery );