var number = Math.floor(Math.random()*2);
var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));
var message;

while (answer != number){
  if(answer === number)
{
  message = 'あたり！';
    document.getElementById('choice').textContent = message;
}
else if(answer<number)
{
  message = '残念、もっと大きいです！';
    document.getElementById('choice').textContent = message;
}
else if(answer>number)
{
  message = '残念、もっと小さいです！';
    document.getElementById('choice').textContent = message;
}
else
{
  message = '0~3の数字を入力してください！！';
    document.getElementById('choice').textContent = message;
}
  var answer = parseInt(window.prompt('数あてゲーム！０～２の数字を入力してください！！'));}
document.getElementById('choice').textContent = message;
