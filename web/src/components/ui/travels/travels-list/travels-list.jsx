import { TravelItem } from "../../../ui"

function TravelsList({ travels }) {
  return(
    <ul className="list-group list-group-horizontal rounded">
      {travels.map((travel) => {
        return (
          <li className="list-group-item bg-transparent border border-0" key={travel.id}>
            <TravelItem { ...travel }/>
          </li>
        )
      })}
    </ul>
  )
};

export default TravelsList;