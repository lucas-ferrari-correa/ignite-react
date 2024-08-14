import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.waitForTimeout(1000)

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Lucas Pizza')
  await page.getByLabel('Descrição').fill('Another description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  await page.waitForTimeout(1000)

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(1000)

  expect(page.getByRole('button', { name: 'Lucas Pizza' })).toBeVisible()

  await page.waitForTimeout(1000)
})
