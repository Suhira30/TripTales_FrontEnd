import React from 'react'

export const IndividualBlog = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(itemData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedItems = itemData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <div style={backgroundStyle}>
        <Header />
      </div>
      
    </>
  );
}
