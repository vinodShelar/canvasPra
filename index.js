const canvas = document.getElementById('canvas-ele1');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'white';
ctx.width = '1000';
ctx.height = '1500';
ctx.fillRect(0, 0, ctx.width, ctx.height);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;

ctx.strokeRect(0, 0, 100, 50);


ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.fillStyle = 'black';

ctx.fillText('Hello, world!', 100, 100);

ctx.shadowColor = 'blue';
ctx.shadowOffsetX = 20;
ctx.shadowOffsetY = 20;
ctx.shadowBlur = 40;


ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 50);
ctx.ellipse(100, 50, 75, 25, 0, 0, 2 * Math.PI);
ctx.fill();