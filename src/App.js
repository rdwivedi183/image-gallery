import "./App.css";
import { Container } from "react-bootstrap";
import GalleryGrid from "./components/Gallery/GalleryGrid";

function App() {
  return (
    <>
      <Container className="mt-5">
        <GalleryGrid />
      </Container>
    </>
  );
}

export default App;
