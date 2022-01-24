import styled from 'styled-components'

export const HeroContainer =styled.div`
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    position:relative;
    z-index:1;
    // /*Add :befor styles*/

`
export const HeroBg=styled.div`
    position:aboslute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    display:flex;
    justify-content: center;
`
export const VideoBg= styled.video`
width:60%;
height:50%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;

`