/* @vitest-environment node */
import { fileURLToPath } from 'node:url';
import { createTest, $fetch, setup } from '@nuxt/test-utils';

describe('Main Page', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../..', import.meta.url)),
    server: true
  })
  
  it('Redirect to login without login', async () => {
    const html = await $fetch('/');
    expect(html).toContain(
      'Sign In'
    );
  });

  it('Main page with login', async () => {
    vi.stubGlobal('useSupabaseAuthClient', () => ({
      auth: { }
    }))

    // const credentials = {
    //   email: "foo@bar.com",
    //   password: "test1234"
    // }

    // await auth.signInWithPassword(credentials);

    const html = await $fetch('/');
    expect(html).toContain(
      'Hi!'
    );
  })
});
