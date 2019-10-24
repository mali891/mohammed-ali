import { formatDate } from '../'

describe('formatDate', () => {
  const valueExistsTests = [
    {
      description: '2019-01-01 returns 1st Jan 2019',
      date: '2019-01-01',
      expect: '1st Jan 2019'
    },
    {
      description: '2020-02-02 returns 2nd Feb 2020',
      date: '2020-02-02',
      expect: '2nd Feb 2020'
    },
    {
      description: '2021-03-03 returns 3rd Mar 2021',
      date: '2021-03-03',
      expect: '3rd Mar 2021'
    },
    {
      description: '2019-12-31 returns 31st Dec 2019',
      date: '2019-12-31',
      expect: '31st Dec 2019'
    },
    {
      description: '2019-11-30 returns 30th Nov 2019',
      date: '2019-11-30',
      expect: '30th Nov 2019'
    },
    {
      description: '2019-06-17 returns 17th Jun 2019',
      date: '2019-06-17',
      expect: '17th Jun 2019'
    }
  ]

  valueExistsTests.forEach(testCase => {
    test(testCase.description, () => {
      expect(formatDate(testCase.date)).toEqual(testCase.expect)
    })
  })
})
