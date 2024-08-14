import { http, HttpResponse } from 'msw'

import { GetMonthRevenueAmountResponse } from '../get-month-revenue'

export const getMonthRevenueAmountMock = http.get<
  never,
  never,
  GetMonthRevenueAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 1000,
    diffFromLastMonth: -2,
  })
})
