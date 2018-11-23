# mySlider.js
a quick and easy to use slider-plugin for jQuery
check the mySliderES branch for this slider with an external stylesheet

## getting started

### what you need:
• jQuery (i tested with 3.3.1)
• a own css-file (in which you need to define your div that will hold the above html-code)

### caution:
in some cases this plugin will add <a href="https://fontawesome.com/" target="_blank">FontAwesome Free</a> to your project

### how to use:
add the mySlider.min.js file to your website-project<br>
add html code like this:
```
    <div class="myContainer">
    
      <ul>
      
        <li>
          <img src="img1.jpg" alt="First Picture"> 
        </li>
        
        <li>
          <img src="img2.jpg" alt="Second Picture">
        </li>
        
        <li>
          <img src="img3.jpg" alt="Third Picture">
        </li>
        
      </ul>
    
    </div>
```

add slider to ```.myContainer``` with jQuery:

```jQuery('.myContainer').mySlider([type], [duration], [transition], [controls], [interval]);```

## Parameter
### type | *String*
*default: classic*
```classic```: gives you classic slider with controls
```auto```: gives you a automatic slider without controls

### duration | *Interger*
*default: 200*
the duration of the slide animation in ms

### transition | *String*
*default: linear*
every transition that is possible for [jQuery Animate](http://api.jquery.com/animate/)

### controls | *String*
*default: enableControlsStyle*
```enableControlsStyle || disableControlsStyle```
enables or diables the controls style

### interval | *Integer*
*default: 5000*
defines the interval for the automatic slider


