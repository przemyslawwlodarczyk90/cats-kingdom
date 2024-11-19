import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Layout from './components/Layout';
import CatForm from './components/CatForm';
import CatDisplay from './components/CatDisplay';

function App() {
  const [cat, setCat] = useState('');
  const [image, setImage] = useState('');
  const [radio, setRadio] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const fetchImage = async () => {
    if (!cat.trim()) {
      setErrorStatus("Aby adopotować Kotka podaj najpierw jego imię!");
      return;
    }

    const baseUrl = process.env.REACT_APP_CAT_API_URL || 'https://cataas.com/cat';
    setLoading(true);
    setImage(null);
    setErrorStatus(null);

    const imageUrl = radio ? `${baseUrl}/${radio}` : baseUrl;

    try {
      const res = await fetch(imageUrl);
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL);
    } catch (error) {
      setErrorStatus(error.message || 'An unknown error occurred while fetching the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="child">
      <Layout
        leftContent={
          <CatForm
            cat={cat}
            setCat={setCat}
            radio={radio}
            setRadio={setRadio}
            fetchImage={fetchImage}
            errorStatus={errorStatus}
          />
        }
        rightContent={
          <CatDisplay
            image={image}
            cat={cat}
            loading={loading}
            errorStatus={errorStatus}
          />
        }
      />
    </Box>
  );
}

export default App;
