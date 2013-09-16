$("#ads-wrapper").append('<p style="color: #fff; font-size: 30px">Loading...</p>');
$.ajax({
    type: "GET",
    url: "http://datapal.apphb.com/api/xtnadswebapi/gettitlesonly",
    async: true,
    content: 'application/json'})
    .done(function (feed) {
        if (feed.length == 0) {
            $("#ads-wrapper").html('<p id="err-text">No Ads.</p>');
        } else {
            document.getElementById("ads-wrapper").innerHTML = "";
        }

        for (var i = 0; i < feed.length; i++) {
            DisplayFeedTitle(JSON.parse(feed[i].id), feed[i].title, dateFormat(feed[i].creationDate, "shortDate", true), feed[i].name);
        }})
    .fail(function(xhr) {
        console.log("Error occurred: ", xhr.statusText);
        $("#ads-wrapper").html('<p style="color: #fff; font-size: 30px">No Service.</p>');
    });


function DisplayFeedTitle(id, title, date, name) {
    $("#ads-wrapper")
        .append("<section  class='ads-section'><h3><ul><li class='ad-header-wrapper'><ul><li><a href='javascript:;' onClick='toggleAd(" +
        id +
        ");'><h1><span>" +
        title +
        "</span></h1></a></li><li><p>Posted at: " +
            date +
        " By: " +
        name +
        "</p></li></ul></li><li class='ad-text-wrapper'><article id='" +
        id +
        "'><div class='ad-text-border-wrapper'><div id='" +
        id +
        " adtext'></div></div></article></li></ul></section> ");
};

function toggleAd(elementId) {
    var currentArticle = document.getElementById(elementId + " adtext");

    if (currentArticle.style.display !== 'block' && !currentArticle.classList.contains('loaded')) {
        
        currentArticle.innerHTML = '<p>Loading...</p>';
        var url = "http://datapal.apphb.com/api/xtnadswebapi/" + elementId;
        
        $.ajax({
            type: "GET",
            url: url,
            async: true,
            content: 'application/json'})
            .done(function(feed) {
                if (feed.length == 0) {
                    currentArticle.html('No Text.');
                } else {
                    currentArticle.innerHTML = "";
                }

                currentArticle.innerHTML = feed;
                currentArticle.classList.add('loaded');
            })
            .fail(function(xhr) {
                console.log("Error occurred: ", xhr.statusText);
                currentArticle.innerHTML = '<p>No Service.</p>';
            });
    };

    setTimeout(function() {
        var expandableElement = document.getElementById(elementId);
        expandableElement.style.display = (expandableElement.style.display !== 'block') ? 'block' : 'none';
    }, 100);
   
}