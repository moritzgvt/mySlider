# mySlider.js
a quick and easy to use slider-plugin for jQuery

## getting started

### what you need:
* jQuery (i tested with 3.3.1)
* a own css-file (in which you need to define your div that will hold the above html-code)

### how to use:
*   add the ``` mySliderES.min.js ``` file to your website-project
    ```
    <script type="text/javascript" src="[yourPath]mySliderES.min.js"></script>
    ```

if you want to use the styles and icons i used for testing:

*   add [FontAwesome Free](https://fontawesome.com/) css<br>
    ```
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"> ```
*   add mySliderES.min.css<br>
    ```<link rel="stylesheet" src="[yourpath]/mySlider.min.css">```
*   add html code like this:
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

*   init slider like this:<br>
    ```
    // you can also use your own custom class 
    jQuery('.myContainer').mySlider([type], [duration], [transition], [controls], [interval]);
    ```

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


