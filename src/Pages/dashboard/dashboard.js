import "./dashboard.css";
import Sidebar from "../../Components/sidebar";
import Card from "../../Components/card";
import Header from "../../Components/header";
import SplineChart from "../../Components/splinechart";
import Piechart from "../../Components/piecharts";
import icon1 from "../../Assets/revenues-icon.png";

function Dashboard() {
  const cards = [
    {
      icon: { icon1 },
      bgcolor: "DDEFE0",
      topic: "Total Revenues",
      number: "$2,129,430",
    },
    {
      icon: { icon1 },
      bgcolor: "F4ECDD",
      topic: "Total Transactions",
      number: "1,520",
    },
    {
      icon: { icon1 },
      bgcolor: "EFDADA",
      topic: "Total Likes",
      number: "9,721",
    },
    {
      icon: { icon1 },
      bgcolor: "DEE0EF",
      topic: "Total Users",
      number: "892",
    },
  ];
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-menu">
        <Header />
        <div className="card-holder">
          {cards.map((card) => (
            <Card
              icon={card.icon}
              bgcolor={card.bgcolor}
              topic={card.topic}
              number={card.number}
            />
          ))}
        </div>
        <div className="graph">
          <span className="foot-card-title">Activities</span>
          <SplineChart />
        </div>
        <div className="foot-card-holder">
          <div className="foot-card">
            <p className="foot-card-title">Top Products</p>
            <Piechart />
          </div>
          <div className="foot-card">
            <span className="foot-card-title">Today's Schedule</span>
            <div className="note">
              <div className="note-heading">Meeting with Suppliers</div>
              <div>14:00-15:00</div>
              <div>at Sunset Road, Kuta, Bali </div>
            </div>

            <div className="note">
              <div className="note-heading">Meeting with Suppliers</div>
              <div>18.00-20.00</div>
              <div>at Central Jakarta </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
