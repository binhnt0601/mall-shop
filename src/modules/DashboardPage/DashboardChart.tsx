import StudentGrowthBarChart from "./StudentGrowthBarChart";
import UserRatioPieChart from "./UserRatioPieChart";

const studentGrowth = [
  { month: "Jan", students: 210 },
  { month: "Feb", students: 250 },
  { month: "Mar", students: 280 },
  { month: "Apr", students: 300 },
  { month: "May", students: 330 },
  { month: "Jun", students: 348 },
];

const userRatio = [
  { name: "Students", value: 348 },
  { name: "Teachers", value: 23 },
];

const DashboardCharts = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
      <div className="bg-white rounded-2xl shadow p-6 w-full">
        <h2 className="text-lg font-semibold mb-4">
          Student Growth (6 months)
        </h2>
        <StudentGrowthBarChart data={studentGrowth} />
      </div>
      <div className="bg-white rounded-2xl shadow p-6 w-full">
        <h2 className="text-lg font-semibold mb-4">Students vs Teachers</h2>
        <UserRatioPieChart data={userRatio} />
      </div>
    </div>
  );
};

export default DashboardCharts;
