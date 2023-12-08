import { serverUrl } from "../../Utils/ServerUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import "./widgetLg.css";

export default function WidgetLg() {
  const [orders, setOrders] = useState([])
  console.log(orders)
  
  useEffect(()=>{
    const fetchOrders = async()=> {
      try {
        const response =  await axios.get(`${serverUrl}/api/order`)
      console.log(response.data)
      setOrders(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrders()
  }, [])

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders?.map((order)=> 
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            src={order?.img || "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{order?.userId}</span>
        </td>
        <td className="widgetLgDate">{order?.createdAt}</td>
        <td className="widgetLgAmount">${order?.amount}</td>
        <td className="widgetLgStatus">
          <Button type={order?.status} />
        </td>
      </tr>)}
      </table>
    </div>
  );
}
