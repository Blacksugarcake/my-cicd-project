const request = require('supertest');
const app = require('./app'); // 只匯入 app，不會自動啟動 server

describe('API 測試', () => {
  test('首頁應該回傳 200 狀態', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('我的 CI/CD 專案');
  });

  test('健康檢查 API 應該回傳 JSON', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
