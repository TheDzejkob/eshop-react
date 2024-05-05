import '../App.css';

function navbar() {
  return (
    <div className="navbar">
     <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
     <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Subaru_logo.svg/1024px-Subaru_logo.svg.png" width="200" height="30" class="d-inline-block align-top" alt="Bootstrap"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item active">
        <a class="nav-link" href="#">Store</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="#">Service</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="#">Retailers</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link disabled" href="#">Support</a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  );
}

export default navbar;