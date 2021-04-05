/**
 * React
 */
import React, { useState } from 'react'

/**
 * Mapbox
 */
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const officeLocationDetails = {
  latitude: 52.496270,
  longitude: 5.500330
}

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 300,
    latitude: officeLocationDetails.latitude,
    longitude: officeLocationDetails.longitude,
    zoom: 16
  })

  return (
        <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            mapStyle={'mapbox://styles/hoekstraenveldhuis/ckn55nvuj08um17oc0tga6gdx'}
        >
          <Marker latitude={officeLocationDetails.latitude} longitude={officeLocationDetails.longitude} >
            Ons kantoor
          </Marker>
        </ReactMapGL>
  )
}

export default Map
