import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;

  // temp amt
  const amount = 100;
  const diff = 20;

  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <PersonOutlinedIcon 
          className="icon" 
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)"
          }}
        />
      )
    }
  }
  else if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "View all orders",
      icon: (
        <ShoppingCartOutlinedIcon 
          className="icon" 
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)"
          }}
        />
      )
    }
  }
  else if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: (
        <MonetizationOnOutlinedIcon 
          className="icon" 
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)"
          }}
        />
      )
    }
  }
  else if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See Details",
      icon: (
        <AccountBalanceWalletOutlinedIcon 
          className="icon" 
          style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)"
          }}
        />
      )
    }
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget;