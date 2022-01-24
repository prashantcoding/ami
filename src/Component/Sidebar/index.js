import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarWrapper,SidebarMenu,SidebarRoute } from './SidebarElements'
const Sidebar = (props) => {
    
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon>
                <CloseIcon/></Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about">
                            About
                        </SidebarLink>
                        <SidebarLink to="/events">
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
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
