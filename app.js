const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🎉 我的 CI/CD 專案</h1>
    <p>現在時間：${new Date().toLocaleString('zh-TW')}</p>
    <p>版本：1.0.0</p>
    <p>這個專案部署成功了！</p>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Server is healthy!' 
  });
});

// 啟動 server 並儲存為變數
const server = app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

// 匯出 app 和 server，供測試用
module.exports = { app, server };

