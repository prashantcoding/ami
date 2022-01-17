import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa' 
import {Link as linkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer=styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;

display: grid;
align-items:center;

transition:1s ease-in-out;
top:${({isOpen})=>(isOpen? '0%' :'-100%')};
opacity:${({isOpen}) => ((isOpen) ? '100%' :'0')};
`;

export const CloseIcon=styled(FaTimes)`
color:#fff
`;
export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;

export const SidebarWrapper=styled.div`
color:#44CCB2;
`
export const SidebarLink=styled(linkR)`
display: flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2 ease-in-out;
text-decoration:none;
color:#44CCB2;
cursor:pointer;

&:hover{
    color:#44CCB2;
    transition:0.2s ease-in-out;

}`
export const SideBtnWrap=styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRoute=styled(linkR)`
border-radius:50px;
background:whitesmoke;
white-space:nowrap;
padding:16px 64px;
color:#44CCB2;
font-size:20px;
outline:none;
font-weight: bolder;
border:none;
cursor:pointer;
transition:all 0,2s ease-in-out;
text-decoration:none;
&:hover{
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#44CCB2; 
}`
export const SidebarMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
@media screen and (max-width:480px){
    grid-template-rows:repeat(6,60px);
}`