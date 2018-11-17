# mySlider.js
a quick and easy to use slider-plugin for jQuery.
<br><br>
<b>what you need:</b><br>
• jQuery (i tested with 3.3.1)<br>
• a own css-file

<b>how to use:</b><br>
add the mySlider.min.js file to your website-project.<br>
add html code like this:
<br>
<code>
    
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

</code>
<br>
add slider to <code>.myContainer</code> with jQuery:

<code>jQuery('.myContainer').mySlider([type], [duration], [transition], [controls], [interval]);</code>
<br>
<b>Parameter</b><br>
type | <i>String</i><br>
<i>default: classic</i><br>
classic: gives you classic slider with controls<br>
auto: gives you a automatic slider without controls<br>
<br>
duration | <i>Interger</i><br>
<i>default: 200</i><br>
the duration of the slide animation in ms<br>
<br>
transition | <i>String</i><br>
<i>default: linear</i><br>
every transition that is possible for jQuery Animate (http://api.jquery.com/animate/)<br>
<br>
controls | <i>String</i>
<i>default: enableControlsStyle</i><br>
enables or diables the controls style<br>
<br>
interval | <i>Integer</i>
<i>default: 5000</i><br>
defines the interval for the automatic slider<br>
<br>

