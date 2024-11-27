const botToken = "TG_BOT_TOKEN";
const chatId = "TG_CHAT_ID";

const region = "cn";
const language = ['zh-CN'];

addEventListener("scheduled", event => {
  event.waitUntil(handleScheduledEvent());
});

async function handleScheduledEvent() {
  console.log('Selected region:', region);

  try {
    const wallpaper = await fetchBingWallpaper(region, 'UHD.jpg');
    await sendToTelegram(wallpaper);
  } catch (error) {
    console.error('Error processing scheduled event:', error);
  }
}

async function sendToTelegram(wallpaper) {
  const message = `${wallpaper.title}\n${wallpaper.copyright}`;

  await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      photo: wallpaper.imageUrl,
      caption: message,
    }),
  });
}

async function fetchBingWallpaper(region, resolution) {
  const response = await fetch(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&cc=${region}`, {
    headers: { 'Accept-Language': language.join(', ') },
  });

  const data = await response.json();

  if (!data.images.length) {
    throw new Error('No wallpaper available');
  }

  const imageData = data.images[0];
  return {
    imageUrl: `https://www.bing.com${imageData.urlbase}_${resolution}`,
    title: imageData.title,
    copyright: imageData.copyright,
  };
}
