import React from 'react';
import {
  Statistic, Card, Row, Col,
} from 'antd';
import {
  CalendarOutlined, ClockCircleOutlined, PoundCircleOutlined, RiseOutlined,
} from '@ant-design/icons';
import { Order } from '../models/order.model';
import OrdersLatest from './OrdersLatest';

interface DashboardProps {
  dashboardData?: {
    ordersTotal: number;
    ordersTotalCurrentMonth: number;
    ordersTotalInProgress: number;
    revenue: number;
    ordersLatest: Order[]
  }
}

const Dashboard: React.FC<DashboardProps> = ({
  dashboardData = {
    ordersTotal: 545,
    ordersTotalCurrentMonth: 545,
    ordersTotalInProgress: 545,
    revenue: 545,
    ordersLatest: [],
  },
}) => (
  <>
    <h1>Dashboard</h1>

    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Total Orders"
            value={dashboardData.ordersTotal}
            valueStyle={{ color: '#1890ff' }}
            prefix={<RiseOutlined />}
            suffix=""
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Total Orders this month"
            value={dashboardData.ordersTotalCurrentMonth}
            valueStyle={{ color: '#27ae60' }}
            prefix={<CalendarOutlined />}
            suffix=""
          />
        </Card>
      </Col>
    </Row>

    <Row gutter={16} className="mt-20">
      <Col span={12}>
        <Card>
          <Statistic
            title="Number of orders in progress"
            value={dashboardData.ordersTotalInProgress}
            valueStyle={{ color: '#f39c12' }}
            prefix={<ClockCircleOutlined />}
            suffix=""
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Revenue"
            value={dashboardData.revenue}
            precision={2}
            valueStyle={{ color: '#8e44ad' }}
            prefix={<PoundCircleOutlined />}
          />
        </Card>
      </Col>
    </Row>

    <h3 className="mt-30 mb-10">Latest Orders</h3>

    <OrdersLatest ordersLatest={dashboardData.ordersLatest} />

  </>
);

export default Dashboard;
