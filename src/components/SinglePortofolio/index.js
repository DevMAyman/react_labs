

export default function SinglePortofolio({portfolio,index}){
  return(
 <div className="col-12 col-sm-4 col-xl-5">
          <div className={index%2==0?"rounded shadow-sm p-3 p-md-4 p-xxl-5":"rounded shadow-sm p-3 p-md-4 p-xxl-5 bg-info"}>
            <h3 className="fw-bold mb-2">{portfolio.name}</h3>
            <p className="text-secondary fst-italic mb-4">
              Nullam felis turpis, commodo id fermentum eget, semper vel odio.
            </p>
          </div>
        </div> 
  )  
}
