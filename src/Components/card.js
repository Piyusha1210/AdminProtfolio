import "./card.css";
import icon1 from "../Assets/revenues-icon.png";
import icon2 from "../Assets/total_transactions_icon.png";
import icon3 from "../Assets/likes_icon.png";
import icon4 from "../Assets/total_users_icon.png";

function Card(props) {
  const classes = "card " + props.bgcolor;
  return (
    <div className={classes}>
      <div className="card-img">
        <img
          src={
            (props.topic === "Total Revenues" && icon1) ||
            (props.topic === "Total Transactions" && icon2) ||
            (props.topic === "Total Likes" && icon3) ||
            (props.topic === "Total Users" && icon4)
          }
          alt=""
        />
      </div>
      <div className="card-topic">{props.topic}</div>
      <div className="card-num">{props.number}</div>
    </div>
  );
}

export default Card;
