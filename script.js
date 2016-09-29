/**
 * Created by LEE on 2016/09/28.
 */
//Future TODO:
var colorArr = ["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5",
    "#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39",
    "##FBC02D","#FFC107","#FF9800","#FF5722"];

var colorChoice = colorArr[Math.floor(Math.random()*colorArr.length)];



$(document).ready(function () {
    showQuote();

    $(".row").on('click', "#new-quote-button", function () {
        showQuote();
    });
});

function showQuote() {
    //add more fonts here
    var fontFamilyArr = ["Lato", "Montserrat", "Open Sans", "Oswald",
        "PT Sans", "Raleway", "Roboto", "Roboto Condensed","Slabo 27px",
        "Source Sans Pro","Crimson Text","Exo","Josefin Sans","Lobster","Nunito"];

    //change font family for quote and author randomly
    var fontFamilyType = fontFamilyArr[Math.floor(Math.random()*fontFamilyArr.length)];

    var key = Math.floor(Math.random() * 40000);
    var quoteText = "";
    var quoteAuthor = "";

    var quoteTextBox = $(".quote");
    var quoteAuthorBox = $(".quote-author");

    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&" + key + "&format=json&lang=en"
        , function (data) {

            quoteText = data.quoteText;

            quoteTextBox.fadeOut(1200, function(){
                quoteTextBox.text(quoteText).fadeIn(1200);
                quoteTextBox.css("font-family","\'" + fontFamilyType + "\'");
            });

            quoteAuthor = data.quoteAuthor;
            if (quoteAuthor === "") {
                quoteAuthorBox.fadeOut(1200, function(){
                    quoteAuthorBox.text("- " + quoteAuthor).fadeIn(1200);
                    quoteAuthorBox.css("font-family","\'" + fontFamilyType + "\'");
                });
            } else {
                quoteAuthorBox.fadeOut(1200, function(){
                    quoteAuthorBox.text("- " + quoteAuthor).fadeIn(1200);
                    quoteAuthorBox.css("font-family","\'" + fontFamilyType + "\'");
                });
            }

            changeThemeColor();

        });
}

function changeThemeColor(){

    var background = $("#background");
    var newQuoteButton = $("#new-quote-button");
    var tweetButton = $("#tweet-button");
    var quoteTextBox = $(".quote");
    var quoteAuthorBox = $(".quote-author");

    quoteTextBox.fadeOut(1200,function(){
        quoteTextBox.css("color",colorChoice).fadeIn(1200);
    });

    //quoteTextBox.animate({color:colorChoice},1200);
    quoteAuthorBox.animate({color:colorChoice},1200);

    background.animate({backgroundColor: colorChoice},1200);
    newQuoteButton.animate({backgroundColor:colorChoice},1200);
    tweetButton.animate({backgroundColor:colorChoice},1200);
}