




import SinglePortofolio from '../SinglePortofolio'
import './portfolio.css'


function Portfolio(){
const  portfolioArray = [
  {name: 'Web Design'},  
  {name: 'Web Developing'},
  {name: 'Backend Developing'},
  {name: 'Web Application'},
  {name: 'ERP Design'},
  {name: 'Front end'},
]
    return(

<>
  <section className="bg-light py-5 py-xl-6">
    <div className="container mb-5 mb-md-6">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h2 className="mb-4 display-5">Portfolio</h2>
          <p className="text-secondary mb-4 mb-md-5">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Pellentesque et neque id ligula mattis
            commodo.
          </p>
          <hr className="w-50 mx-auto mb-0 text-secondary" />
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row justify-content-xl-center gy-3 gy-sm-4">
          {
          portfolioArray.map((portfolio,index)=> { return  <SinglePortofolio portfolio={portfolio} index={index}/>})
        }
      </div>

    </div>
  </section>
</>

        
    )
}

export default Portfolio