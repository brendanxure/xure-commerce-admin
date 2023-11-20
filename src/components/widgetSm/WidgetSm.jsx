import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../Utils/ServerUrl";

export default function WidgetSm() {
  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    const fetchUsers = async()=> {
      try {
        const response =  await axios.get(`${serverUrl}/api/user/users?new=true`)
      console.log(response.data)
      setUsers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user)=> 
        <li className="widgetSmListItem" key={user?._id}>
        <img
          src={user?.img || "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=612x612&w=0&k=20&c=nrJ6RZ8Ft4vHECnRjBGBK_9XJ7f_lsi3dJjj_uAlkT8="}
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{user?.username}</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>
      )}
      </ul>
    </div>
  );
}
