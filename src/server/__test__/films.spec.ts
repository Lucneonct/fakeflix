/* @vitest-environment node */
import { fileURLToPath } from 'node:url';
import { $fetch, setup, fetch } from '@nuxt/test-utils';
1
await setup({
  rootDir: fileURLToPath(new URL('..', import.meta.url)),
  server: true
})

describe('API List Films Test', async () => {
  
  test('should fail without search key', async () => {
    const response = await fetch('/api/films');
    expect(response.status).toBe(400);
    expect(response.statusText).toBe("invalid query");
  });
  
  test('should fail with less tan 3 characters (too many results)', async () => {
    const response = await fetch('/api/films?s=t'); // Just 1 search length

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.Response).toBe("False");
    expect(data.Error).toBe("Too many results.");
  });
  
  test('should retrieve correct data', async () => {
    const response = await fetch('/api/films?s=Star+Wars+Episode+IV+a-new-hope'); // Just 1 search length

    expect(response.status).toBe(200);

    // Response the correct object elemc
    const data = await response.json();
    expect(data.Response).toBe("True");
    expect(data.Search).instanceOf(Array);
    expect(parseInt(data.totalResults)).toBeGreaterThan(0);

    // Verify the schema of elems
    const [ film ] = data.Search;
    expect(film.Title).toBeDefined();
    expect(film.Year).toBeDefined();
    expect(film.imdbID).toBeDefined();
    expect(film.Type).toBeDefined();
    expect(film.Poster).toBeDefined();
  });
});

describe('API Get Full Item', async () => {
  
  test('should fail with less than 5 keys', async () => {
    const response = await fetch('/api/films/1234');
    expect(response.status).toBe(400);
    expect(response.statusText).toBe("invalid id");
  });
  
  test('should retrieve correct data', async () => {
    const response = await fetch('/api/films/tt0076759');
    expect(response.status).toBe(200);

    // Response the correct object elemc
    const film = await response.json();
    expect(film).toBeDefined();

    // Escential data test
    expect(film.Response).toBe("True");
    expect(film.Title).toBeDefined();
  });
});