function toggleChat(elementId) {
    var currentArticle = document.getElementById(elementId);
    currentArticle.style.display = (currentArticle.style.display !== 'block') ? 'block' : 'none';
}

$(function () {
    var connection = $.connection("/chat");
    connection.start({ jsonp: true }, function () {
        $("#input-message-area").keypress(function (element) {
            if (element.which === 13) {
                element.preventDefault();

                var currentUser = $("#input-nickname-area").val();
                if (currentUser === "") {
                    currentUser = "Anonymous";
                }

                var area = document.getElementById('input-message-area');
                var msg = area.value;
                area.value = '';

                var obj =
                {
                    messageType: 1,
                    text: msg, from: currentUser,
                };
                var str = JSON.stringify(obj);

                if (msg !== '') {
                    connection.send(str);
                }
            }
        });
    });

    connection.error(function (err) {
        $("#input-chat-area").append("<p style='font-style: italic; color: #f00'>No Connection Or An Error Occurred!</p>");
    });

    connection.received(function (msg) {
        $("#input-chat-area").append('<p>' + msg + '</p>');
        $('#input-chat-area').scrollTop($('#input-chat-area')[0].scrollHeight);
    });

});

$("#input-nickname-area").keypress(function (element) {
    if (element.which === 13) {
        element.preventDefault();
    }
});

var signalRMethods = {
    defaultInputMessageAreaOnKeyPressHandler: function (element) {
        if (element.which === 13) {
            element.preventDefault();
            var area = document.getElementById('input-message-area');
            area.value = '';
        }
    }
};