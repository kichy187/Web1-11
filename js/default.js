var number = Math.floor(Math.random()*5);
var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));

while{
var message;
if(answer === number)
{
  message = 'あたり！';
  break;
}
else if(answer<number)
{
  message = '残念、もっと大きいです！';
  var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));
}
else if(answer>number)
{
  message = '残念、もっと小さいです！';
  var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));
}
else
{
  message = '0~3の数字を入力してください！！';
  var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));
}
}
document.getElementById('choice').textContent = message;
