import React, { useEffect, useState } from "react";
import Span from "./span";

import Search from './search'


function CardCreation(data) {
  return (
    <div class=" flex justify-center py-2">
    <Span
      year={data.year}
      
    />
    </div>
  );
}
function App(props) {
  const [data, setdata] = useState([])
  useEffect(async () => {
    const result = await fetch("http://localhost:8000/")


    setdata((await result.json()).data)



  }, [])


  return (
    <div>
      <div>
          <Search />
          </div> 

        {data.map(CardCreation)}

      
    </div>
  );
}

export default App;
