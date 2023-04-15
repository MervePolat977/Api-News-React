import React, {useState} from 'react';
import axios from 'axios';
function App() {

  const [data, setData] = useState([])
  const getNews =()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2047b75c572f488e9bf928daf96345c2") 
    .then((response)=>{
      //console.log(response);
      setData(response.data.articles)
    })
  }
  return (
    <>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={getNews}>Fetch News</button>
      </div>


      <div className="container">
        <div className="row">
          {
            data.map((value)=>{
              return (
                <div className="col-3">
                  <div className="card" style={{width: "18rem;"}}>
                     <img src={value.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{value.title}</h5>
                          <p className="card-text">{value.description}</p>
                          <a href="#" class="btn btn-primary">Main News</a>
                        </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  )
}

export default App;