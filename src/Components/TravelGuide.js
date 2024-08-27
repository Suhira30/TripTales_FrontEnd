import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import guide1 from '../Images/Guide1.jpeg';
import guide2 from '../Images/Guide2.jpeg';
import guide3 from '../Images/Guide3.jpeg';
import guide4 from '../Images/Guide4.jpeg';
import guide5 from '../Images/Guide5.jpeg';
import guide6 from '../Images/Guide6.jpeg';


const posts = [

  { id: 1, title: 'Post 1', content: 'Content for post 1...', image: guide1 },
  { id: 2, title: 'Post 2', content: 'Content for post 2...', image: guide2 },
  { id: 3, title: 'Post 3', content: 'Content for post 2...', image: guide3 },
  { id: 4, title: 'Post 4', content: 'Content for post 4...', image: guide4 },
  { id: 5, title: 'Post 5', content: 'Content for post 5...', image: guide5 },
  { id: 6, title: 'Post 6', content: 'Content for post 6...', image: guide6 },
];

export const TravelGuide = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate the posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ textAlign: 'center',width:"auto",margin:"0",padding:"0" }}>
        <Row xs={1} md={2} lg={5} className="g-5">
          {currentPosts.map((post) => (
            <Col key={post.id}>
              <Card style={{ width: '12.3rem', height: '18rem' ,margin:"0",padding:'0'}}>
                <Card.Img variant="top" src={post.image} style={{ height: '12rem', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination-container" style={{ marginTop: '20px', textAlign:'center', }}>
          {pageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => paginate(number)}
              style={{
                cursor: 'pointer',
                marginRight: '20px',
                textDecoration: currentPage === number ? 'underline' : 'none',
              }}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

