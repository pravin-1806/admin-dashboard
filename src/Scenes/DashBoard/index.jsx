import Header from "../../Components/Header";
import { Menu } from "antd";

const DashBoard=()=>{
    return <div style={{margin:"20px",width:"fit-content"}}>
        <Menu display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome To Dashboard" />
        </Menu>
    </div>
}
export default DashBoard;