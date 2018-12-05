# mySlider.js
a quick and easy to use slider-plugin for jQuery<br>

## getting started

### what you need:
* jQuery (i tested with 3.3.1)
* a own css-file (for the root-div and your custom control-styles)
* if you want to use the styled prestyled controls add the mySliderES.css file to your project

### how to use:
add the mySliderES.min.js file to your website-project<br>
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
*default: classic*<br>
```classic```: gives you classic slider with controls<br>
```auto```: gives you a automatic slider without controls

### duration | *Interger*
*default: 200*<br>
the duration of the slide animation in ms

### transition | *String*
*default: linear*<br>
every transition that is possible for [jQuery Animate](http://api.jquery.com/animate/)

### controls | *String*
*default: enableControlsStyle*<br>
```enableControlsStyle || disableControlsStyle```<br>
enables or diables the controls style

### interval | *Integer*
*default: 5000*<br>
defines the interval for the automatic slider


