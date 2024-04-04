import { calculateData } from '../CommonFunctions/CalculateData';

describe('calculateData', () => {
  test('correctly calculates totals and averages from data', () => {
    const mockData = [
      { year: 2020, sales: 100, revenue: 200, userActivity: 50 },
      { year: 2021, sales: 150, revenue: 300, userActivity: 75 },
    ];

    const expected = {
      totalSales: 250,
      averageSalePerMonth: 125,
      totalRevenue: 500,
      averageRevenuePerMonth: 250,
      totalUsers: 125,
      averageUsersPerMonth: 62.5,
    };

    expect(calculateData(mockData)).toEqual(expected);
  });
});
