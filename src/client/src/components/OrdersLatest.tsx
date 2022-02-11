import React from 'react';
import { Table } from 'antd';
import { Order } from '../models/order.model';

interface OrdersLatestProps {
  ordersLatest: Order[]
}

const OrdersLatest: React.FC<OrdersLatestProps> = ({
  ordersLatest = [],
}) => {
  const orderProperties = [
    'order_id',
    'order_placed',
    'product_name',
    'price',
    'full_name',
    'address',
    'order_status',
  ];

  const columns = orderProperties.map((name) => ({
    title: name.replace('_', ' ').replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
    dataIndex: name,
    key: name,
  }));

  const data = ordersLatest.map((order, index) => ({ ...order, key: index, full_name: `${order.first_name} ${order.last_name}` }));

  return (<Table columns={columns} dataSource={data} size="small" />);
};

export default OrdersLatest;
