$.ajax({
    type: "GET",
    url: "http://datapal.apphb.com/api/xtnadswebapi/getimagesinfo",
    async: true,
    content: 'application/json'
})
    .done(function (feed) {
        if (feed.length == 0) {
            $("#photos-dynamic-page-wrapper").html('<p id="err-text">No Photos.</p>');
        } else {
            document.getElementById("photos-dynamic-list").innerHTML = "";
        }

        for (var i = 0; i < feed.length; i++) {
            var isFirst = false;
            if (i == 0 || i % 3 == 0) {
                isFirst = true;
            }
            DisplayPhotoThumbnail(JSON.parse(feed[i].id), JSON.parse(feed[i].width), JSON.parse(feed[i].height), feed[i].thumbnailLink, feed[i].fullSizeLink, isFirst);
        }
    })
    .fail(function (xhr) {
        console.log("Error occurred: ", xhr.statusText);
        $("#ads-wrapper").html('<p style="color: #fff; font-size: 30px">No Service.</p>');
    });

function DisplayPhotoThumbnail(id, width, height, thumbnailLink, fullSizeLink, isFirst) {

    $("#photos-dynamic-list").append("<li" +
        (isFirst == true ? " class='first-photo'" : "") +
        "><a target='_blank' href='" +
        "http://datapal.apphb.com/" +
        fullSizeLink +
        "/" +
        id +
        "'><img src='" +
        "http://datapal.apphb.com/" + 
         thumbnailLink +
        "/" +
        id +
        "' width='" +
        width +
        "px'" +
        " height='" +
        height +
        "px'" +
        " alt=''/></a></li>"
    );
}

