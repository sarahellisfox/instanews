$( document ).ready(function() {
    const optionSelector = document.getElementById('optionSelector');

    // Calls the Selectric plugin to change the style of the dropdown selector 
    $(function () {
        $(optionSelector).selectric();
    });

    // Triggers event on when user selects any of the options on dropdown selector 
    $(optionSelector).on('change', function () {

        // Identifies what has been selected from the dropdown selector 
        const selection = $(optionSelector).val();

        //Reveals loading icon, which is hidden by default  
        $('#loading-icon').show();

        // Uses ajax to GET data from the NYT API 
        $.ajax({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=fJ9SlU4rVsUv2yCqN5v9e61T29VDHSKa`,
        }).done(function (data) {

            //Empties the article container so repeat selects don't spawn more than 12 articles 
            $('.generated-articles-container').empty();

            //Filters results for whether or not articles contain an image and an abstract (I had a problem with the missing abstract case come up in testing, so I put it in!)
            const filteredResults = data.results.filter(function (result) {
                return (result.multimedia[4] !== undefined && result.abstract !== "");    
            });

            //If the API is working but returns no suitable articles, this error message is displayed  
            if (filteredResults.length === 0) {
                $('.generated-articles-container').append('<p>Sorry, nothing found! Please try again.</p>');
            } else {

                //Takes twelve articles from the filtered results 
                filteredResults.slice(0, 12).forEach(function (item) {

                //Appends the article container with a link, image and article caption  
                $('.generated-articles-container').append('<a href="' + item.url + '">' + '<article class="generated-articles" style="background-image: url(' + item.multimedia[4].url + ');">' + '<p class="article-caption">' + item.abstract + '</p></article></a>');

                });

                console.log('results');
                // Changes header, nav and logo from large to small when results are returned 
                $("img").removeClass("large-logo").addClass("small-logo");
                $("main").removeClass("main-container-large").addClass("main-container-small");
                $("header").removeClass("header-container-large").addClass("header-container-small");
                $("nav").removeClass("navigation-container-large").addClass("navigation-container-small");
            }

        //If the above request fails entirely this error message is displayed. Empty is used to keep the error messages from spawning each time it is returned
        }).fail(function () {
            $('.generated-articles-container').empty();
            $('.generated-articles-container').append('<p>Sorry, nothing found! Please try again.</p>');

        // Hides the loading icon after content is loaded
        }).always(function () {
            $('#loading-icon').hide();
        });
    });
});
