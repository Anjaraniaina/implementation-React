import React from 'react';
import { MyBreadscrumb } from './miscellaneous/MyBreadscrumb';
import {HeadCard} from './miscellaneous/HeadCard';
import {MyFooter} from './miscellaneous/MyFooter';
import {MyDropdownMenu, DropdownItem} from './nav/MyDropdownMenu';
import {MyNav} from './nav/MyNav';
import {MySearchBar} from './nav/MySearchBar';
import { MySidenavNav} from './sidenav/MySidenavNav';
import { CollapsedElt} from './sidenav/CollapsedElt';
import { MyPage} from './sidenav/MyPage';
import { SideNavChild} from './sidenav/SideNavChild';
import { SideNavParent} from './sidenav/SideNavParent';
import { SidenavHeading} from './sidenav/SidenavHeading';
import { NavCollapse} from './sidenav/NavCollapse';
import { NavCollapseSubItem} from './sidenav/NavCollapseSubItem';
import { NavLink} from './sidenav/NavLink';
import { MyTable} from './table/MyTable';
import { TableFooter} from './table/TableFooter';
import { TableHead} from './table/TableHead';
import { TableRow} from './table/TableRow';
import { TableBody} from './table/TableBoby';
import {MainContent} from './miscellaneous/MainContent';
import {NavForm} from './miscellaneous/NavForm';
import { LayoutSidenav} from './sidenav/LayoutSidenav';
import { SidenavContent} from './sidenav/SidenavContent';
function App(){
  return (
    <><MyNav bigtitle="Start Boostrap">
      <NavForm>
        <MySearchBar/>
      </NavForm>
      <MyDropdownMenu dropdownId="navbarDropdown" link="#" iconClass="fas fa-user fa-fw"  lastLink="#!" lastItem="Log out">
            <DropdownItem item="Setting" link="#!"/>
            <DropdownItem item="Activity Log" link="#!"/>
      </MyDropdownMenu>
      </MyNav>
      <LayoutSidenav>
        <MySidenavNav user="Start Boostrap">
        <SidenavHeading title="Core"/>
                <MyPage pageName="Dashboard"/>
                <SidenavHeading title="Interface"/>
                <SideNavParent title="Layouts"/>
                <SideNavChild> 
                        <NavLink title="Static Navigation" link="layout-static.html"/>
                        <NavLink title="Light Sidenav" link="layout-sidenav-light.html"/>
                </SideNavChild>
                <SideNavParent title="Pages"/>
                <CollapsedElt>
                        <NavCollapse item="Authentication">
                            <NavCollapseSubItem subitem="Login" link="login.html"/>
                            <NavCollapseSubItem subitem="Register" link="register.html"/>
                            <NavCollapseSubItem subitem="Forgot Password" link="password.html"/>
                        </NavCollapse>
                        <NavCollapse item="Error">
                            <NavCollapseSubItem subitem="401 Page" link="401.html"/>
                            <NavCollapseSubItem subitem="404 Page" link="404.html"/>
                            <NavCollapseSubItem subitem="500 Page" link="500.html"/>
                        </NavCollapse>
                </CollapsedElt>
                <SidenavHeading title="Addons"/>
                <MyPage pageName="Charts"/>
                <MyPage pageName="Tables"/>
        </MySidenavNav>
        <SidenavContent>
          <MainContent title="Tables">
              <MyBreadscrumb first="Dashboard" item1="Tables"/>
              <HeadCard content="DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the " link="https://datatables.net/" title="official DataTables documentation"/>
              <MyTable title="DataTable Example">
                  
                    <TableHead data1="Name" data2="Position" data3="Office" data4="Age" data5="Start date" data6="Salary"/>
                    <TableFooter data1="Name" data2="Position" data3="Office" data4="Age" data5="Start date" data6="Salary"/>
                    <TableBody>
                      <TableRow data1="Tiger Nixon" data2="System Architect" data3="Edinburgh" data4="61"
                      data5="2011/04/25" data6="$320,800"/>
                      <TableRow data1="Garrett Winters" data2="Accountant" data3="Tokyo" data4="63"
                      data5="2011/07/25" data6="$320,800"/>
                      <TableRow data1="Ashton Cox" data2="Junior Technical Author" data3="San Francisco" data4="66"
                      data5="2009/01/12" data6="$86,000"/>
                      <TableRow data1="Cedric Kelly" data2="Senior Javascript Developer" data3="Edinburgh" data4="22"
                      data5="2012/03/29" data6="$433,060"/>
                      <TableRow data1="Yuri Berry" data2="Chief Marketing Officer (CMO)" data3="New York" data4="40"
                      data5="2009/06/25" data6="$675,000"/>
                      <TableRow data1="Caesar Vance" data2="Pre-Sales Support" data3="New York" data4="21"
                      data5="2011/12/12" data6="$$106,450"/>
                      <TableRow data1="Tiger Nixon" data2="System Architect" data3="Edinburgh" data4="61"
                      data5="2011/04/25" data6="$320,800"/>
                      <TableRow data1="Garrett Winters" data2="Accountant" data3="Tokyo" data4="63"
                      data5="2011/07/25" data6="$320,800"/>
                      <TableRow data1="Ashton Cox" data2="Junior Technical Author" data3="San Francisco" data4="66"
                      data5="2009/01/12" data6="$86,000"/>
                      <TableRow data1="Cedric Kelly" data2="Senior Javascript Developer" data3="Edinburgh" data4="22"
                      data5="2012/03/29" data6="$433,060"/>
                      <TableRow data1="Yuri Berry" data2="Chief Marketing Officer (CMO)" data3="New York" data4="40"
                      data5="2009/06/25" data6="$675,000"/>
                      <TableRow data1="Caesar Vance" data2="Pre-Sales Support" data3="New York" data4="21"
                      data5="2011/12/12" data6="$$106,450"/>
                    </TableBody>
            
              </MyTable> 
            </MainContent>
          <MyFooter author="Your website 2022"/>
        </SidenavContent>
      </LayoutSidenav></>
)}

export default App;











