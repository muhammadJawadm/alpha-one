import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  // Stat cards data
  const stats = [
    {
      value: '03',
      label: 'Total Missions',
      gradient: 'from-[#6E2BB6]/30 to-[#6E2BB6]/30',
      iconBg: 'bg-[#6E2BB6]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      value: '06',
      label: 'Reset requests',
      gradient: 'from-[#2BB696]/30 to-[#2BB696]/30',
      iconBg: 'bg-[#2BB696]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      value: '22',
      label: 'Active Workers',
      gradient: 'from-[#B62B83]/30 to-[#B62B83]/30',
      iconBg: 'bg-[#B62B83]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: '02',
      label: 'Missed Missions',
      gradient: 'from-[#B62B2B]/30 to-[#B62B2B]/30',
      iconBg: 'bg-[#B62B2B]',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  // Reset requests data
  const resetRequests = [
    { id: 1, name: 'John Martinez', message: 'I need to change my password because I suspect that my account may...' },
    { id: 2, name: 'Sarah', message: 'I need to change my password because I suspect that my account may...' },
    { id: 3, name: 'Michael Thompson', message: 'I received an email that I didn\'t expect and it has made me concerned a...' },
    { id: 4, name: 'Emma Garcia', message: 'I noticed some unfamiliar transactions on my account and would like to...' },
    { id: 5, name: 'David Lee', message: 'I think my account details may have been exposed and I want to chang...' },
  ];

  // Employee schedules
  const schedules = [
    {
      id: 1,
      name: 'John Martinez',
      location: 'Downtown Corporate Plaza',
      time: '09:00 AM - 02:30 PM',
      status: 'Checked-In',
      statusColor: 'bg-emerald-500',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      location: 'Downtown Corporate Plaza',
      time: '09:00 AM - 02:30 PM',
      status: 'Confirmed',
      statusColor: 'bg-blue-500',
    },
  ];

  // Calendar days
  const calendarDays = [
    { date: 31, month: 'prev' },
    { date: 1, month: 'current' },
    { date: 2, month: 'current' },
    { date: 3, month: 'current' },
    { date: 4, month: 'current' },
    { date: 5, month: 'current' },
    { date: 6, month: 'current' },
    { date: 7, month: 'current' },
    { date: 8, month: 'current' },
    { date: 9, month: 'current', event: 'blue' },
    { date: 10, month: 'current' },
    { date: 11, month: 'current' },
    { date: 12, month: 'current' },
    { date: 13, month: 'current' },
    { date: 14, month: 'current' },
    { date: 15, month: 'current' },
    { date: 16, month: 'current', event: 'green' },
    { date: 17, month: 'current' },
    { date: 18, month: 'current' },
    { date: 19, month: 'current' },
    { date: 20, month: 'current' },
    { date: 21, month: 'current' },
    { date: 22, month: 'current' },
    { date: 23, month: 'current' },
    { date: 24, month: 'current' },
    { date: 25, month: 'current' },
    { date: 26, month: 'current' },
    { date: 27, month: 'current', isToday: true },
    { date: 28, month: 'current' },
    { date: 1, month: 'next' },
    { date: 2, month: 'next' },
    { date: 3, month: 'next' },
    { date: 4, month: 'next' },
    { date: 5, month: 'next' },
    { date: 6, month: 'next' },
    { date: 7, month: 'next' },
    { date: 8, month: 'next' },
    { date: 9, month: 'next' },
    { date: 10, month: 'next' },
    { date: 11, month: 'next' },
    { date: 12, month: 'next' },
    { date: 13, month: 'next' },
  ];

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-6 relative overflow-hidden`}
          >
            <div className="flex items-center justify-start gap-3">
              <div className={`${stat.iconBg} p-3 rounded-3xl text-white`}>
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-white/80 text-md">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Reset Requests - 2/3 width */}
        <div className="lg:col-span-1">
          <div className="bg-[#1E293B] rounded-xl p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Code Reset Requests</h2>
            <div className="space-y-3">
              {resetRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-[#0F1729] rounded-lg p-4 hover:bg-[#1A2332] transition-colors cursor-pointer"
                >
                  <h3 className="text-white font-medium mb-1">{request.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-1">{request.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar - 1/3 width */}
        <div className="lg:col-span-1">
          <div className="bg-[#1E293B] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-semibold">Calendar</h2>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-[#2B78B6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer focus:outline-none"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            {/* Calendar Grid */}
            <div className="mb-4 bg-[#0F1729] p-2 rounded-lg">
              {/* Week days header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs text-gray-500 font-medium">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar dates */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg
                      ${day.month !== 'current' ? 'text-gray-600' : 'text-gray-300'}
                      ${day.isToday ? 'bg-[#2B78B6] text-white font-semibold' : ''}
                      ${day.event === 'blue' && !day.isToday ? 'bg-blue-500/20 text-blue-400' : ''}
                      ${day.event === 'green' && !day.isToday ? 'bg-emerald-500/20 text-emerald-400' : ''}
                      hover:bg-gray-700/50 cursor-pointer transition-colors
                    `}
                  >
                    {day.date}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 text-xs mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-400">Acknowledgements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-gray-400">Check-Ins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-gray-400">Missed</span>
              </div>
            </div>

            {/* Employee Schedules */}
            <div className="space-y-3">
              {schedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="bg-[#0F1729] rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-medium">{schedule.name}</h3>
                    <span className={`${schedule.statusColor} text-white text-xs px-3 py-1 rounded-full`}>
                      {schedule.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{schedule.location}</p>
                  <p className="text-gray-500 text-xs">{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
