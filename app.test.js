// app.test.js (範例修改)
const request = require('supertest');
const app = require('./app'); // 導入您的應用程式

let server; // 宣告一個變數來保存伺服器實例

beforeAll((done) => {
  server = app.listen(3000, done); // 在測試前啟動伺服器並取得實例
});

afterAll((done) => {
  server.close(done); // 在所有測試完成後關閉伺服器
});

describe('API 測試', () => {
  test('首頁應該回傳 200 狀態', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('<h1>🎉 我的 CI/CD 專案</h1>');
  });

  test('健康檢查 API 應該回傳 JSON', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('application/json');
    expect(res.body.status).toEqual('OK');
  });
});
