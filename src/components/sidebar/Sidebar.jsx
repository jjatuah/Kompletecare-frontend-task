import "./Sidebar.css";
import { BsFillClipboard2Fill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { TfiDropboxAlt } from 'react-icons/tfi';
import { SlWallet } from 'react-icons/sl';
import { MdSms } from 'react-icons/md';
import { GiBookshelf } from 'react-icons/gi';
import { MdSettings } from 'react-icons/md';
import { MdSupport } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';



const Sidebar = () => {
  return ( 
    <section className="sidebar">
      <ul>
        <li><span><MdDashboard /></span> Dashboard</li>
        <li><span><FaUserAlt /></span> Profile</li>
        <li><span><TfiDropboxAlt /></span> Services <span style={{marginLeft: "60px"}}><IoIosArrowDown /></span></li>
        <li><span><BsFillClipboard2Fill /></span> Medical Records</li>
        <li><span><SlWallet /></span> Care Wallet</li>
        <li><span><MdSms /></span> Messages</li>
        <li><span><GiBookshelf /></span> Resources</li>
        <li><span><MdSettings /></span> Account Settings</li>
        <li><span><MdSupport /></span> Contact Support</li>
        <li><span><ImExit /></span> Logout</li>
      </ul>
    </section>
   );
}
 
export default Sidebar;