import React, { useState, useEffect } from 'react'

const App = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ image, setImage ] = useState(false);
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message);
          setIsLoaded(true);
        });
    }, []);

  return (
        <>{isLoaded ? <img src={image} alt={'A Random Dog'} /> : <p>Loading...</p>}</>
  )
}
export default App
