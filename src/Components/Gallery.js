import React from 'react'
import Row from 'react-bootstrap/Row';
import Gallery_1 from '../Images/Gallery_1.jpg';
import Gallery_2 from '../Images/Gallery_2.jpg';
import Gallery_3 from '../Images/Gallery_3.jpg';
import Gallery_4 from '../Images/Gallery_4.jpg';
import Gallery_5 from '../Images/Gallery_5.jpg';
import Gallery_6 from '../Images/Gallery_6.jpg';

export   const Gallery = () => {
  const imgDivStyle = {
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    margin:"0 0 0 0px",
    borderRadius:'0',
    width:'158px',
    border: 'none',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: 'none',
    borderRadius:'0',
    padding:'0 0 0 0 ',
    margin:"0 0 0 0 ",
  };
  return (
<>
<div class="card-group"style={{padding:'0',margin:'0 0 0 10px',width:'100%'}}>
  <Row xs={1} md={2} lg={3}>
  <div class="card" style={imgDivStyle}>
    <img src= {Gallery_1} class="card-img-top" style={imgStyle} alt="..."/>
  </div>
  <div class="card" style={imgDivStyle}>
    <img src={Gallery_2} class="card-img-top "  style={imgStyle} alt="..."/>
  </div>
  <div class="card" style={imgDivStyle}>
    <img src={Gallery_3} class="card-img-top"style={imgStyle} alt="..."/>
  </div>
  <div class="card" style={imgDivStyle}>
    <img src={Gallery_4} class="card-img-top" style={imgStyle}alt="..."/>
  </div>
  <div class="card" style={imgDivStyle}>
    <img src={Gallery_5} class="card-img-top"style={imgStyle} alt="..."/>
  </div>
  <div class="card" style={imgDivStyle}>
    <img src={Gallery_6} class="card-img-top"style={imgStyle} alt="..."/>
  </div></Row>
</div>
</>


  )
}
export default Gallery;