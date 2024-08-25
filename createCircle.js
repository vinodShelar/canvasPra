const canva=document.getElementById('canvas-ele2');
const ctx2=canva.getContext('2d');

console.log(ctx2);

// now create a circle in ctx2


ctx2.beginPath();
ctx2.arc(100, 100, 50, 0, 2 * Math.PI);
ctx2.fillStyle = 'red';
ctx2.fill();
ctx2.stroke();