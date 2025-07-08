import { formatNumber } from '@/helpers/format';
import React from 'react';
import { BiBookReader } from 'react-icons/bi';
import {
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserGraduate,
} from 'react-icons/fa';

const stats = [
  {
    label: 'Total Students',
    value: 348,
    icon: <FaUserGraduate />,
  },
  {
    label: 'Total Teachers',
    value: 23,
    icon: <FaChalkboardTeacher />,
  },
  {
    label: 'Active Classes',
    value: 15,
    icon: <BiBookReader />,
  },
  {
    label: 'Monthly Revenue',
    value: 240150,
    icon: <FaMoneyBillWave />,
    isMoney: true,
  },
];

const DashboardStats = () => {
  return (
    <div className='px-2 sm:px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10'>
        {stats.map((item, idx) => (
          <div
            key={idx}
            className='bg-white min-h-[110px] rounded-2xl shadow hover:shadow-lg transition flex items-center gap-4 px-4 py-5 sm:py-6'
          >
            <div className='flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-100 p-4 text-2xl sm:text-3xl text-primary'>
              {item.icon}
            </div>
            <div>
              <div
                className={`flex items-end text-nowrap font-bold ${
                  item.isMoney
                    ? 'text-2xl sm:text-3xl text-green-500'
                    : 'text-xl sm:text-2xl'
                }`}
              >
                {item.isMoney ? (
                  <>
                    <span className='text-base sm:text-lg text-gray-400 mr-1'>
                      $
                    </span>
                    <span>{formatNumber(item.value)}</span>
                  </>
                ) : (
                  item.value
                )}
              </div>
              <div className='text-gray-500 text-base sm:text-lg'>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
