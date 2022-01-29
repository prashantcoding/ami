import React from 'react'
import LogOut from '../../Auth/LogOut'
import Login from '../../Auth/Login'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarWrapper,SidebarMenu,SidebarRoute } from './SidebarElements'
const Sidebar = (props) => {
    
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon>
                <CloseIcon/></Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="AboutUs">
                            About
                        </SidebarLink>
                        <SidebarLink to="events">
                           Events
                        </SidebarLink>
                        <SidebarLink to="Services">
                            Workshops
                        </SidebarLink>
                        <SidebarLink to="Sign Up">
                            Gallery
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <div>{localStorage.getItem('Auth_token')?<LogOut/>:<Login/>}</div>
                    </SideBtnWrap>
                </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
