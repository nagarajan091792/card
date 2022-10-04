import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.item.plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.item.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.item.features.map((item1) => {
              return item1.show ? (
                <li>
                  <span className="fa-li">
                  <FontAwesomeIcon icon={faCheck} /> 
                  </span>
                  {item1.text}
                </li>
              ) : (
                <li className="text-muted">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                  {item1.text}
                </li>
              );
            })}
          </ul>

          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;