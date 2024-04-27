import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(planetItem => (
          <PlanetItem key={planetItem.id} planetDetails={planetItem} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
