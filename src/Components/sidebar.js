import "./sidebar.css";
import DashboardIcon from "../Assets/dashboard_icon.png";
import TransactionsIcon from "../Assets/transaction_icon.png";
import SchedulesIcon from "../Assets/schedule_icon.png";
import UserIcon from "../Assets/user_icon.png";
import SettingIcon from "../Assets/setting_icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Board.</h1>
      <div className="board-items">
        <div className="b-item active">
          <img src={DashboardIcon} alt="" />
          Dashboard
        </div>
        <div className="b-item">
          <img src={TransactionsIcon} alt="" />
          Transactions
        </div>
        <div className="b-item">
          <img src={SchedulesIcon} alt="" />
          Schedules
        </div>
        <div className="b-item">
          <img src={UserIcon} alt="" />
          Users
        </div>
        <div className="b-item">
          <img src={SettingIcon} alt="" />
          Settings
        </div>
      </div>
      <div className="sidebar-foot-items">
        <div className="s-f-item">Help</div>
        <div className="s-f-item">Contact Us</div>
      </div>
    </div>
  );
}
export default Sidebar;
