import React, {useEffect, useState} from 'react';
import Map from './components/Map';
import './App.css';
const axios = require("axios");




function App() {
    const {response} = axios.get('http://localhost:3001');

  return (
    <>
      <h1>Haufe Hackathon</h1>
      {<Map/> }

        <table>
            <h1>Puncte de colectare</h1>
            <tbody>
            <tr>
                <th>_id</th>
                <th>id</th>
                <th>tip colecatre</th>
                <th>adresa</th>
                <th>companie</th>
                <th>website</th>
                <th>latitudine</th>
                <th>longitudine</th>
            </tr>
            {/*{response.map((item, i) => (*/}
            {/*    <tr key={i}>*/}
            {/*        <td>{item.result.records._id}</td>*/}
            {/*        <td>{item.result.records.id}</td>*/}
            {/*        <td>{item.result.records['tip colectare']}</td>*/}
            {/*        <td>{item.result.records.adresa}</td>*/}
            {/*        <td>{item.result.records.companie}</td>*/}
            {/*        <td>{item.result.records.website}</td>*/}
            {/*        <td>{item.result.records.latitudine}</td>*/}
            {/*        <td>{item.result.records.longitudine}</td>*/}
            {/*    </tr>*/}
            {/*))}*/}
            </tbody>
        </table>

    </>
  );
}
export default App;
