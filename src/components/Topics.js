import {Link} from "react-router-dom"
export default function Topics()
{
    return (
      <div>
          <h2 className="videoHeading">
            Topics
          </h2>
          <div className="topics">
              <div className="topics__topic">
                  <h3>Learn Basic Exercises</h3>
                  <Link to ="/basicexercises">
                  <button >Basic Exercises</button>
                  </Link>
              </div>
              <div className="topics__topic">
                  <h3>Want to Loss Fat?</h3>
                  <Link to="/fatloss">
                    <button >Fat Loss</button>
                  </Link>
                 
              </div>
              <div className="topics__topic">
                  <h3>lets buid muscle</h3>
                  <Link to="/musclegain">
                  <button >Muscle Gain</button>
                  </Link>
                
              </div>
              <div className="topics__topic">
                  <h3>Eat Clean</h3>
                  <Link to="/diets">
                  <button>Diet Plan</button>
                  </Link>
                 
              </div>
          </div>
      </div>
    )
}