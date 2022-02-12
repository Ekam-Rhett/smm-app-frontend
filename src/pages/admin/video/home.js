import React from 'react'
import {useState, useEffect} from 'react'
import '../../../CSS/admindashboard.css'

const Home = () => {
    let [data, setData] = useState([]);

  useEffect(() => {
      showAll();
  }, []);

  const showAll = async () => {
    const request = await fetch('http://localhost:12346/api/category/all')
    const response = await request.json()
    if (request.status === 200) {
      setData(response.categories);
    }
  };

  return (
        <div style={{marginTop: "150px", marginLeft:"200px"}}>
     <table className="styled-table">
         <thead>
             <tr>
                 <th style={{ textAlign: "center" }}>Index</th>
                 <th style={{ textAlign: "center" }}>Name</th>
                 <th style={{ textAlign: "center" }}>ID</th>
                 <th style={{ textAlign: "center" }}>Is Disabled</th>
             </tr>
         </thead>
         <tbody>
             {data && data.map((item, index) => {
               let i=item.isDisabled.toString()
                 return (
                     <tr key={index}>
                         <th scope="row">{index + 1}</th>
                         <td>{item.name}</td>
                         <td>{item._id}</td>
                         <td>{i}</td>
                     </tr>
                 )
                 })}
         </tbody>
     </table>
    </div>
  );
};

export default Home;