function TravelItem({ title, origin, destinations, budget, id }) {
  return(
    <div  className="card" style={{ width: "15rem"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Origin: {origin}</p>
        <p className="card-text">Destination: {destinations}</p>
        <p className="card-text">Budget: {budget ? budget : "Budget not set"}</p>
      </div>
      <a href={`/travels/${id}`} className="stretched-link" />
    </div>
    
  )
};

export default TravelItem;
