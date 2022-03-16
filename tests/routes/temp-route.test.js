const build = require('../../src/app');

let app;

describe('Temp route', () => {
  beforeAll(() => {
    app = build();
  });

  afterAll(() => {
    app.close();
  });

  it('should return id when post route called with valid data', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/test/',
      payload: { title: 'some test title' },
    });

    expect(res.statusCode).toBe(201);
    expect(res.json().id).toBeDefined();
  });
});
