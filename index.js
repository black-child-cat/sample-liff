$(function () {
  // 送信
  $("form").submit(function () {
    var name = $('input[name="name"]').val();
    var customer = $('input[name="customer"]').val();
    var detail = $('input[name="detail"]').val();

    var msg = `源氏名：${name}\n相手の名前：${customer}\n詳細：${detail}`;
    sendText(msg);

    return false;
  });
});
