import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Card from "./Pricingcard";

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