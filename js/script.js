document.addEventListener('DOMContentLoaded', function () {
    $('#optionSelector').on('change', function () {
        const selection = $('#optionSelector option:selected').val();
        $.ajax({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=fJ9SlU4rVsUv2yCqN5v9e61T29VDHSKa`,
        }).done(function (data) {
            $('.generated-articles').empty();
            const filteredResults = data.results.filter(function (result) {
                return result.multimedia[4] !== undefined;
            });
            if (filteredResults.length === 0) {
                $('.generated-articles').append('<p>Sorry, nothing found! Please try again.</p>');
            } else {
                filteredResults.slice(0, 12).forEach(function (item) {
                    $('.generated-articles').append('<img src="' + item.multimedia[4].url + '">');
                    $('.generated-articles').append('<h1>' + item.abstract + '</h1>');
                });
            }
        });
    });
});