# INSTANEWS APP 
by Sarah Ellis Fox 

The Instanews App is the second project that I completed for the Red Academy Web Development program. It is a mobile-first responsive single-page website that allows users to select a news category from a drop-down menu to receive the top twelve news stories of the day, provided by the New York Times API.

## PROJECT OVERVIEW 

### Technology Used 
For this project I utilized Gulp to compile SASS and to minify my Javascript and stylesheets. 

### Gulp & Key Gulp Dependencies 
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) : A CSS post processor that combs through compiled CSS files and adds vendor prefixes like -webkit and -moz after checking the code against [caniuse.com](https://caniuse.com/).

* [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) : Runs CSS through focused optimisations to make the file as small as possible. 

* [gulp-terser](https://www.npmjs.com/package/gulp-terser) : Compresses ES6+ code.

### Sass / CSS
* Used SCSS, a superset of CSS3's syntax. The files are broken up for readability and include: 
    - `_reset.scss` - resets the styling of all HTML elements to a consistent baseline.
    - `_mixins.scss` - defines reusable chunks of code - used on this site for media queries. 
    - `_selectric.scss` - a jquery plugin that styles the site's select drop-down menu. 
    - `_variables` - reusable variables that include colours, fonts and media queries. 
* Google Fonts - AS PER JIM'S KIND ALLOWANCE I have used Google Fonts for this project! 

### Javascript / jQuery 
* Used to achieve the following: 
    - Wrapped jQuery in DOMContentLoaded function to ensure the content had loaded. 
    - Calling the jQuery plugin Selectric to style the drop-down menu. 
    - Triggering an event that begins when something is selected from the drop-down menu. 
    - Calling on the power of AJAX to GET the data from the NYT Top Stories API. 
    - Filtering results and excluding anything that doesn't contain an image or abstract. 
    - Selecting the first twelve articles from the filter and appending the site content. 
    - Using the Add/Remove Class method to resize the navigation/logo to accommodate the article content. 
    - Hiding/Showing the loading icon at the appropriate times. 
    - Displaying an error message if no articles are found. 

### Stretch Goals 
* Used Selectric, a jQuery plugin to change the style of the drop-down menu. 
* Used CSS to add animated transitions to each article on hover - growing the container and removing the abstract. 

## NOTES 
* During this project I learned the importance of testing my error message - I found that the reason that it was never triggering because I'd put it inside the .done section! 
* After encountering an article from the NYT API that contained an image but no abstract I added one extra filter to my code, so each item would have to have both an image and an abstract. 
*  I'm slowly but surely starting to get the logic of JavaScript/jQuery, and troubleshooting the API/loading gif/error messages was extremely helpful for me! 