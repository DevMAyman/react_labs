


export default function SingleSkill({progress}){
    return(
        <div className="col-12 col-sm-6 col-xl-5">
          <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
            <h3 className="fw-bold mb-2">{progress.progressName}</h3>
            <p className="text-secondary fst-italic mb-4">
              Nullam felis turpis, commodo id fermentum eget, semper vel odio.
            </p>
            <div className="progress">
              <div
                className="progress-bar w-95 progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-label="WordPress"
                aria-valuenow={progress.progressName}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {progress.progressValue}
              </div>
            </div>
          </div>
        </div>
    )
}