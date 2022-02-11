import axios from 'axios';
import { DashboardData } from '../models/reporting.model';

export const getData = async (): Promise<DashboardData> => {
  const result = await axios.get<DashboardData>('/v1/reporting/dashboard', {
    baseURL: 'http://127.0.0.1:5081',
  });
  return result.data;
};
