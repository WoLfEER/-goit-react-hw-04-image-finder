import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { getImages, resultsQuantity } from 'services/api';
import { GlobalStyle, Container } from './GlobalStyles';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';
import { startLoader, stopLoader } from 'components/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = () => {
      setStatus('pending');

      getImages(query, page)
        .then(response => {
          if (response.total === 0) {
            Notify.failure('Sorry, no results matching your request', {
              clickToClose: true,
            });
            setImages([]);
            throw new Error();
          }
          setImages(prevImages => [...prevImages, ...response.hits]);
          setStatus('resolved');
        })
        .catch(error => setStatus('rejected'));
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = searchQuery => {
    if (searchQuery === query) {
      Notify.info('The search query does`t change', {
        clickToClose: true,
      });
      return;
    }
    setImages([]);
    setQuery(searchQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const isLastPage = Math.round(images.length / resultsQuantity) < page;

  const openModal = activeUrl => {
    startLoader();
    setSelectedImgUrl(activeUrl);
    stopLoader();
  };

  const closeModal = () => {
    setSelectedImgUrl('');
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {status === 'pending' && startLoader()}
      {(status === 'rejected' && <h1> Ups... something went wrong</h1>) ||
        stopLoader()}
      {images.length > 0 && (
        <ImageGallery hits={images} onPreviewClick={openModal} />
      )}
      {selectedImgUrl && (
        <Modal
          activeUrl={selectedImgUrl}
          imgAlt={selectedImgUrl}
          onClose={closeModal}
        />
      )}
      {!isLastPage && <Button onClick={handleLoadMore} status={status} />}
      <GlobalStyle />
    </Container>
  );
};
