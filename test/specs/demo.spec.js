describe('Demo test suite', () => {
    it('duckduckgo search test', async () => {
        browser.url('https://www.duckduckgo.com')

        await $('#searchbox_input').setValue("nintendo")
        // await $('[type="submit"]').click()
        browser.keys('Enter')

        await $('[data-testid="result-title-a"]').click()
    })
})