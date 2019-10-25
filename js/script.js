document.addEventListener('DOMContentLoaded', function () {
    $('#optionSelector').on('change', function () {
        const selection = $('#optionSelector option:selected').val();
            $.ajax({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=fJ9SlU4rVsUv2yCqN5v9e61T29VDHSKa`,
        }).done(function (data) {
            $('.results').empty(); 
            $('.results').append('<img src="' + data.results[0].multimedia[4].url + '">');
            $('.results').append('<h1>' + data.results[0].abstract + '</h1>');
        
            })
    });
});

