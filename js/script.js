document.addEventListener('DOMContentLoaded', function () {
    $('#optionSelector').on('change', function () {
        $('#loading-icon').show();
    
        const selection = $('#optionSelector option:selected').val();

        $.ajax({
            method: 'GET',
            url: `http://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=fJ9SlU4rVsUv2yCqN5v9e61T29VDHSKa`,
        }).done(function (data) {
            $('.generated-articles-container').empty();
            const filteredResults = data.results.filter(function (result) {
                return result.multimedia[4] !== undefined;
            });
            if (filteredResults.length === 0) {
                $('.generated-articles-container').append('<p>Sorry, nothing found! Please try again.</p>');
            } else {
                filteredResults.slice(0, 12).forEach(function (item) {
                    $('.generated-articles-container').append('<article class="generated-articles" style="background-image: url(' + item.multimedia[4].url + ');">' + '<p class="article-caption">' + item.abstract + '</p></article>');
                });
            }
        }).fail(function () {
            $('.generated-articles-container').append('<p>Sorry, nothing found! Please try again.</p>');
        }).always(function() {
            $('#loading-icon').hide();
        });
    });
});


