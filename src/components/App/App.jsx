import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <SearchBar></SearchBar>
      {/* якщо data.hits.length >0 рендеримо список */}
      <ImageGallery></ImageGallery>
    </AppContainer>
  );
};
