import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, ele) => {
      if (ele.type === 'income') {
        acc.income += ele.price
        acc.total += ele.price
      } else {
        acc.outcome += ele.price
        acc.total -= ele.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
