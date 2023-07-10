import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react'
import './styles/turkeymap.css'

const TurkiyeMap = () => {

  const [country, setCountry] = useState([])

  const addCountry = (newCountry) => {
    setCountry([...country, newCountry])
  }

  const removeCountry = (countryName) => {
    const updatedCountry = country.filter((c) => c !== countryName)
    setCountry(updatedCountry);
  }

  const handleClick = (plateNumber, name, id) => {
    const element = document.getElementById(`${id}`)
    if (element.classList.length === 0) {
      element.classList.add('selected')
      addCountry(name)
    } else {
      element.classList.remove('selected')
      removeCountry(name)
    }
  }

  return (
    <div>
      <div className='container'>
        <small><b>Not:</b> Şehir seçip/kaldırmak için haritada üstüne tıkla.</small><br/>
        <h2>Gezilen Şehir Sayısı: {country.length}/81</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            country.length > 0 ? <b>Gezdiğim Şehirler: </b> : ''
          }
          {
            country.map((city) =>
              <span key={city}>{city}</span>
            )
          }
        </div>
      </div>
      <TurkeyMap
        onClick={({ plateNumber, name, id }) => handleClick(plateNumber, name, id)}
        hoverable={true}
        showTooltip={true}
      />
    </div>
  )
}

export default TurkiyeMap
