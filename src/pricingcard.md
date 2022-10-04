App.css
--------

section.pricing {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
}
-------------------------------------------------------------------------------------------------------
pricingcard.js
---------------

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
---------------------------------------------------------------------------------------

App.js
-------

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Card from "./pricingcard";

function App() {
  var cardDetails = [
    {
      plan: "free",
      price: 0,
      features: [
        { text: "Single User", show: true },
        { text: "5GB Storage", show: true },
        { text: "Unlimited Public Projects", show:true },
        { text: "Community Access", show: true},
        { text: "Unlimited Private Projects", show: false },
        { text: "Dedicated Phone Support", show: false },
        { text: "Free Subdomain", show: false },
        { text: "Monthly Status Reports", show: false },
      ],
    },

    {
      plan: "plus",
      price: 9,
      features: [
        { text: <strong>5 User</strong>, show: true},
        { text: "50GB Storage", show: true },
        { text: "Unlimited Public Projects" , show: true},
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects" , show: true},
        { text: "Dedicated Phone Support", show: true },
        { text: "Free Subdomain", show: true },
        { text: "Monthly Status Reports", show: false },
      ],
    },
    {
      plan: "pro",
      price: 49,
      features: [
        { text: <strong>Unlimited User</strong> , show: true},
        { text: "150GB Storage", show: true },
        { text: "Unlimited Public Projects", show: true },
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects", show: true },
        { text: "Dedicated Phone Support" , show: true},
        { text: <div><strong>Unlimited</strong> Free Subdomain</div> , show: true},
        { text: "Monthly Status Reports" , show: true},
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {cardDetails.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}
export default App;
---------------------------------------------------------------------------------