describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const input = await import('../../src/components/Input.vue');
    expect(input).toBeDefined();
  })

  test('template string imports as expected', async () => {
    const input = await import(`../../src/components/Input.vue`);
    expect(input).toBeDefined();
  })

  test('dynamic imports as expected', async () => {
    const name = "Input";
    const input = await import(`../../src/components/${name}.vue`);
    expect(input).toBeDefined();
  })
})