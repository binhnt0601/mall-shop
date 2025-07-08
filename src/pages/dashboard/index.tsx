import ProfileDropdown from '@/components/ProfileDropdown';
import AdminLayout from '@/layouts/admin-layout/AdminLayout';
import DashboardCharts from '@/modules/DashboardPage/DashboardChart';
import DashboardStats from '@/modules/DashboardPage/DashboardStats';
import React from 'react';

const DashboardAdmin = () => {
  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='flex flex-wrap-reverse items-center justify-center sm:justify-between mb-8'>
        <div>
          <h1 className='text-2xl font-bold'>Welcome back, Admin 👋</h1>
          <p className='text-gray-500 mt-1'>Here’s your dashboard overview.</p>
        </div>

        <ProfileDropdown />
      </div>

      <DashboardStats />

      <DashboardCharts />
    </div>
  );
};

DashboardAdmin.Layout = AdminLayout;
export default DashboardAdmin;
