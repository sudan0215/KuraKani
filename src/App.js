
import './App.css';

function App() {
  return (
   <>
  
   <div className="p-3 mb-2 bg-danger text-white">
   <div className='header'>
   <p className="text-center"><h1 >KuraKani.com</h1></p>
   <p className="text-center"><h3>Let's chitchat</h3></p>
</div>
</div>
<div className="FirstName">
  <label for="exampleFormControlInput1" className="form-label">First Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
  <label for="exampleFormControlInput1" className="form-label">Last Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
  </div>
<div className="email">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Gender
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Male</button></li>
    <li><button class="dropdown-item" type="button">Female</button></li>
    <li><button class="dropdown-item" type="button">Rather not say</button></li>
  </ul>
</div>
 <div className="DOB"><p>Date of birth:</p>
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Year
  </button>
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Month
  </button>
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Day
  </button>

</div>
  <button type="button" className="btn btn-lg btn-primary" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Log in</button>
  <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Sign Up</button>
</div>


   </>
  );
}

export default App;
