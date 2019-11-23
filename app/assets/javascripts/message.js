$(function(){

  function buildHTML(message) {

      var image = message.image.url? `<img class="lower-message__image" src=${message.image.url}>` : "";
      var html = `<div class="message">
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
                </div>
              </div>
              <div class="lower-message">
                <p class="lower-message__content">
                  ${message.content}
                </p>
                  ${image}
              </div>
            </div>`
          return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $("form")[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました')
      $('.form__submit').prop('disabled', false);
    })
  })
});