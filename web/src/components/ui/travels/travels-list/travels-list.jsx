import { TravelItem } from "../../../ui"

function TravelsList({ travels }) {
  return(
    <ul className="list-group rounded">
      {travels.map((travel) => {
        return (
          <li className="list-group-item" key={travel.id}>
            <TravelItem { ...travel }/>
          </li>
        )
      })}
    </ul>
  )
};

export default TravelsList;