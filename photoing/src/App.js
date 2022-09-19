import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Box />
      <Buttonnn />
      <Footer />
    </div>
  );
}

function Head() {
  return <header>
  <a class="logolink box" href="/">
  </a>
  <nav>
      <ul class="nav_links">
          <li><a href="/commands">About PhotoHost</a></li>
          <li><a href="/commands">Donate</a></li>
      </ul>
  </nav>
</header>
}

function Box () {
  return <div class="the_content">
    <div class="more_content">
    <p class="logo"><b>PhotoHost</b></p>
    <p class="content1">Host your images free in the cloud</p>
    <p class="content2">Maxium file size is 10 MB</p>
    </div>
  </div>
}

function Buttonnn() {
  return <div class="the_button">
    <div class="another_button">
      <input type="file" id="fileUpload" />

    </div>
  </div>
}
function Footer() {
  return <footer>
      <div class="foot">
      <p><a href="/commands">Terms Of Service</a></p>
      </div>
  </footer>
}

export default App;
