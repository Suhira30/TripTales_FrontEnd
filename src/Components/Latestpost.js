import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import L_Eg from '../Images/L_Eg.jpg';
import L_Eg2 from '../Images/L_Eg2.jpg';
import L_Eg3 from '../Images/L_Eg3.jpg';
import L_Eg4 from '../Images/L_Eg4.jpg';
import L_Eg5 from '../Images/L_Eg5.jpg';
import L_Eg6 from '../Images/L_Eg6.jpg';
// Import other images...

const posts = [

    { id: 1, title: 'Post 1', content: 'Content for post 1...', image: L_Eg },
    { id: 2, title: 'Post 2', content: 'Content for post 2...', image: L_Eg2 },
    { id: 3, title: 'Post 3', content: 'Content for post 2...', image: L_Eg3 },
    { id: 4, title: 'Post 4', content: 'Content for post 4...', image: L_Eg4 },
    { id: 5, title: 'Post 5', content: 'Content for post 5...', image: L_Eg5 },
    { id: 6, title: 'Post 6', content: 'Content for post 6...', image: L_Eg6 },
    { id: 7, title: 'Post 7', content: 'Content for post 6...', image: L_Eg6 },
    { id: 8, title: 'Post 8', content: 'Content for post 6...', image: L_Eg6 },
    { id: 9, title: 'Post 9', content: 'Content for post 9...', image: L_Eg6 },
    { id: 10, title: 'Post 10', content: 'Content for post 10...', image: L_Eg6 },
    { id: 11, title: 'Post 11', content: 'Content for post 11...', image: L_Eg6 },
    { id: 12, title: 'Post 12', content: 'Content for post 12...', image: L_Eg6 },
];

export const Latestpost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

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
              <Card style={{ width: '12.3rem', height: '22rem' ,margin:"0",padding:'0'}}>
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

export default Latestpost;
