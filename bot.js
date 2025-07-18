const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'fireboyzzsmp.aternos.me',
    port: 13117,
    username: 'Noodlebaba',
  });

  bot.on('spawn', () => {
    console.log('✅ Bot spawned!');
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err);
  });
}

createBot();
