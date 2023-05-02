$(function () {
  // 送信
  $("form").submit(function () {
    var name = $('input[name="name"]').val();
    var customer = $('input[name="customer"]').val();
    var detail = $('textarea[name="detail"]').val();

    var msg = `お礼日記を考えてください。源氏名は「${name}」です。\n相手の名前は「${customer}」です。\n日記の内容は「${detail}」です。`;
    sendText(msg);

    return false;
  });
});
