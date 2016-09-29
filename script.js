/**
 * Created by LEE on 2016/09/28.
 */
//Future TODO:

$(document).ready(function () {
    showQuote();

    var quote = $(".quote").text();
    var quoteAuthor = $(".quote-author").text();

    $(".row").on('click', "#new-quote-button", function () {
        showQuote();
    });

    $("#tweet-button").on('click', function () {
        quote = $(".quote").text();
        quoteAuthor = $(".quote-author").text();

        $(this).attr("href", "https://twitter.com/intent/tweet?text=" + quote + quoteAuthor);
    });

    // $("#facebook-button").on('click', function () {
    //     $(this).attr("href", "https://www.facebook.com/dialog/feed?" +
    //         "app_id=140586622674265" +
    //         "&display=popup" +
    //         "&link=https%3A%2F%2Fwww.google.com/#q=hello" +
    //         "&name=" + quoteAuthor +
    //         "description=Hello World" +
    //         "&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fpostshare%2Fc00.html");
    // });
});

function showQuote() {
    //add more fonts here
    var fontFamilyArr = ["Lato", "Montserrat", "Open Sans", "Oswald",
        "PT Sans", "Raleway", "Roboto", "Roboto Condensed", "Slabo 27px",
        "Source Sans Pro", "Crimson Text", "Exo", "Josefin Sans", "Lobster", "Nunito"];

    //change font family for quote and author randomly
    var fontFamilyType = fontFamilyArr[Math.floor(Math.random() * fontFamilyArr.length)];

    var key = Math.floor(Math.random() * 40000);
    var quoteText = "";
    var quoteAuthor = "";

    var quoteTextBox = $(".quote");
    var quoteAuthorBox = $(".quote-author");

    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&" + key + "&format=json&lang=en"
        , function (data) {

            quoteText = data.quoteText;

            quoteTextBox.fadeOut(1200, function () {
                quoteTextBox.text(quoteText).fadeIn(1200);
                quoteTextBox.css("font-family", "\'" + fontFamilyType + "\'");
            });

            quoteAuthor = data.quoteAuthor;
            if (quoteAuthor === "") {
                quoteAuthorBox.fadeOut(1200, function () {
                    quoteAuthorBox.text("- " + quoteAuthor).fadeIn(1200);
                    quoteAuthorBox.css("font-family", "\'" + fontFamilyType + "\'");
                });
            } else {
                quoteAuthorBox.fadeOut(1200, function () {
                    quoteAuthorBox.text("- " + quoteAuthor).fadeIn(1200);
                    quoteAuthorBox.css("font-family", "\'" + fontFamilyType + "\'");
                });
            }
            changeThemeColor();
        });
}

function changeThemeColor() {

    var colorArr = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
        "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
        "##FBC02D", "#FFC107", "#FF9800", "#FF5722"];

    var colorChoice = colorArr[Math.floor(Math.random() * colorArr.length)];

    var background = $("#background");
    var newQuoteButton = $("#new-quote-button");
    var tweetButton = $("#tweet-button");
    var facebookButton = $("#facebook-button");
    var quoteTextBox = $(".quote");
    var quoteAuthorBox = $(".quote-author");

    quoteTextBox.fadeOut(500, function () {
        quoteTextBox.css("color", colorChoice).fadeIn(500);
    });

    quoteAuthorBox.fadeOut(500, function () {
        quoteAuthorBox.css("color", colorChoice).fadeIn(500);
    });

    background.animate({backgroundColor: colorChoice}, 1200);
    newQuoteButton.animate({backgroundColor: colorChoice}, 1200);
    tweetButton.animate({backgroundColor: colorChoice}, 1200);
    facebookButton.animate({backgroundColor: colorChoice}, 1200);
}