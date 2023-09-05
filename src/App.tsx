import './App.css';
import HTMLFlipBook from 'react-pageflip';

const TOTAL_PAGES = 1000;

function App() {
  return (
    <>
      {/* @ts-ignore */}
      <HTMLFlipBook width={600} height={800} showCover={true} drawShadow={false}>
        {Array.from(Array(TOTAL_PAGES).keys()).map((_, index) => (
          <img key={index} src={`/manga/${index + 1}.jpg`} alt="page1" />
        ))}
      </HTMLFlipBook>
    </>
  );
}

export default App;
