import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import Stockchart from "views/admin/default/components/Stockchart"
import PieChartCard from "views/admin/default/components/PieChartCard";
import { MdBarChart, MdDashboard,MdPerson,MdOutlineWaves } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import Widget1 from "components/widget/widget1";
import Widget2 from "components/widget/widget2";
import Widget3 from "components/widget/widget3";


import CheckTable from "views/admin/default/components/CheckTable";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import RecentlyTable from "views/admin/default/components/recentlyOrder"

const Dashboard = () => {
  return (
    <div className="container">
      {/* Card widget */}

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4">
        

        <Widget1
          icon={<MdPerson className="h-7 w-7 " />}
          title={"Total user"}
          subtitle={"1000+"}
        />


        <Widget2
          icon={<MdOutlineWaves className="h-6 w-6 " />}
          title={"Total Earnings"}
          subtitle={"12000+"}
        />
        <Widget3
          icon={<MdBarChart className="h-7 w-7 " />}
          title={"Total Categories"}
          subtitle={"500+"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Total Product"}
          subtitle={"10,000+"}
        />

      </div>


      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />

      </div>

      {/* customer Detail &  category stock chart */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>
        <Stockchart />
      </div>


      {/* recently order list  */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <RecentlyTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </div>

        {/*  calender & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <MiniCalendar />
          <PieChartCard />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
