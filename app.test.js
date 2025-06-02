const request = require('supertest');
const { app, server } = require('./app');

describe('API 測試', () => {
  afterAll(() => {
    server.close(); // 關閉 server，避免測試結束後仍開著
  });

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
