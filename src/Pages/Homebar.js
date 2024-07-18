import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from '../Images/background.jpg'
import SliderComponent from '../Components/Slider';
import Latestpost from '../Components/Latestpost';
import Popularpost from '../Components/Popularpost';
import Gallery from '../Components/Gallery';
import Header from '../Components/Header';
import SocialMedia from '../Components/SocialMedia';
import Subscription from '../Components/Subscription';
function Homebar() {
  const backgroundStyle={
    backgroundImage:`url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  }
  const divStyle={
    margin:0,
    padding:0,
  
  }
  const divStyle2={
    height: 'auto',
    margin:'0 150px',
    padding:0,
    textAlign:"center",
 
    }
  const divStyle3={
    height: 'auto',
    margin:'0 150px',
    padding:0,
    textAlign:"center",
    display:"flex",
    }
    // const divStyleLeft={
    //   flex:"3",
    // }
    // const divStyleRight={
    //   flex:"2",
    // }
  const textStyle = {
    marginTop: '250px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign:'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
  };

  return (
    <>

  <div style={backgroundStyle}>
  <Header/>

      {/* <Container>
        <Navbar expand="lg"> */}
        {/* <Navbar.Brand href="#home">Travel</Navbar.Brand> */}
         {/* <div className="mx-auto centered-form">
          <form className="d-flex justify-content-center">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width:'300px'}}
            />
          </form>
        </div> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">    
        <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
              <Nav.Link href="#about">Blogs</Nav.Link>
              <Nav.Link href="#contact">Gallery</Nav.Link>
              <Nav.Link href="#contact">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse> */}
        {/* </Navbar>
      </Container> */}
      <div>
       
        <h2 style={textStyle}>Someday, somewhere .</h2>
        <p>Together , we're mapping out a lifetime of memories !</p>
        <h3>Let's go ... </h3>
      </div>
      </div>
      {/* ---------------------Slider ------------------------------------------------ */}
      <div style={{padding: '0px', margin: '70px 50px' }}>
      <SliderComponent/>
      </div>
      {/* ---------------------Latest Post -------------------------------------------- */}
      <div style={{padding:"0", marginTop: '70px' ,textAlign:'center',marginLeft:'190px',marginRight:'200px'}}>
        <h1 style={{marginBottom:"70px"}}>Latest Blogs</h1>
      <Latestpost/>
      </div>
      {/* ---------------------Popular Post -------------------------------------------- */}
      <div style={{marginTop:"50px",padding:"0",marginLeft:'20px',marginRight:'52px'}}>
      <h1 style={{marginBottom:"50px",textAlign:"center"}}>Popular Blogs</h1>
      <div style={divStyle3}>
        <div style={{flex:3,padding:'0',margin:"0"}}>
        <Popularpost/>
        </div>
      {/* ---------------------Fav Post -------------------------------------------- */}
        <div style={{flex:2,padding:'0',margin:"0"}}>
        <div style={{ flex: 1, backgroundColor: '#f0f0f0', marginBottom: '20px',marginTop:"25px" }}>
            Favourite Blog
          </div>
      {/* ---------------------Gallery -------------------------------------------- */}
          <div style={{ flex: 1 }}>
            <Gallery/> 
          </div>
        <div>
      {/* ---------------------Social Media -------------------------------------------- */}
        <div>
          <SocialMedia/>
        </div>
      {/* ---------------------Popular Post -------------------------------------------- */}
        <div>
          <Subscription/>
        </div>
        </div>
        </div>
      </div>
      </div>
      
</>
  );
}

export default Homebar;