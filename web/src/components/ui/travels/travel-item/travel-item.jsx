function TravelItem({ title, origin, destinations, budget, id }) {
  return(
    <div  className="card" style={{ width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{origin}</p>
        <p className="card-text">{destinations}</p>
        <p className="card-text">{budget}</p>
      </div>
      <a href={`/travels/${id}`} className="stretched-link" />
    </div>
    
  )
};

export default TravelItem;