# Random Inspirational Quote Generator
[View Demo Here](https://jaythomasv29.github.io/inspirational-message-generator/)
## index.html
* My html document is quite simple but is composed on a html5 sematic tags with various tags having classes and id's for styling

## style.css
* Majority of the layout is created using CSS Flexbox properties to get the flex items to be vertically and horizontally centered
* I wanted the container holding my quote to be centered all the time so I declared my height to be `100vh` of the screen's viewport

## app.js
* I experimented with adding an Event Listener based on a user click to random update the message using `.innerHTML()`
* various methods are within functions to keep code reusable
* `Math.random()` was used to get a random element from an array
