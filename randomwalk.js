const { createCanvas } = require("canvas");
const Discord = require("discord.js");
// const p5 = require("p5");
const fs = require("fs");
//---------------------------------

module.exports = async function (msg, args) {
  await msg.channel.send('im walking only');
  await  msg.channel.send('wait n loog');
  console.log("generating...");
  const buffer = await generateImage();
  const attachment = new Discord.MessageAttachment(buffer, "walkofdrunk.png");
  await msg.channel.send('what an brilliant path', attachment);
  msg.channel.send('but woopz i have fall');
};
//--------------------------------------

function generateImage() {
	const width = 1920;
	const height =1080;
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext("2d");
	//background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);
	//drunkard
	let x = width / 2;
	let y = height / 2;
	const stepSize = 2;
	ctx.fillStyle = "white";
	for (let i = 0; i < 10000000; i++) {
		ctx.fillRect(x, y, stepSize, stepSize);
		const r = Math.floor(Math.random()*4);
		switch (r) {
			case 0:
				x = x + stepSize;
				break;
			case 1:
				x = x - stepSize;
				break;
			case 2:
				y = y + stepSize;
				break;
			case 3:
				y = y - stepSize;
				break;
			}
  }
  const buffer = canvas.toBuffer("image/png");
  return buffer;
}
