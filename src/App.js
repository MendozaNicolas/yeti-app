import Carousel from "./components/Carousel";
import Card from "./components/card";
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Carousel />
      </section>
      <section id="home" className="d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center">
          <img className="mt-5" src="./images/pedido.png" width={450} height={119} />
        </div>
        <div className="d-flex mt-5 justify-content-center">
          <img className="" src="./images/logo_pedidosya.svg" width={200} height={60} />
          <div className="vr mx-3"></div>
          <img className="mt-3" src="./images/logo_rappi.png" width={75} height={35} />
          <div className="vr mx-3"></div>
          <img src="./images/logo_delivery.svg" width={200} height={67} />
        </div>
      </section>
      <div className="wave-container"></div>
      <section id="products" className="p-5 d-flex justify-content-center" style={{ height: "100vh", backgroundColor: "#1d88b6" }} data-bs-theme="dark">
        <div className="text-white d-flex flex-column justify-content-center">
          <h2 className="mt-5 text-center">NUESTROS PRODUCTOS</h2>
          <div className="products-container" >
            <Card title="Estaca de chocolate" desc="Helado de palito con chocolate con pepitas de chocolate." src="./images/palito_chocolate.png" />
            <Card title="Coffee Cake" desc="Helado torta de cafe con chocolate y crema. Ultra delicioso y empalagoso" src="./images/torta_cafe.png" />
            <Card title="Cowboy Kelly" desc="Helado de palito con forma de oreo. Ultra delicioso y empalagoso. Premium" src="./images/helado_oreo.png" />
          </div>
        </div>
      </section>
      <section className="" style={{ height: "100vh", width: "100%", backgroundColor: "#1d88b6" }} >
        <img src="./images/big0000.png" style={{ width: "100%", height: '100%', objectFit: 'scale-down' }} />
      </section>
      <div className="wave-container-darker"></div>
      <footer className="overflow-hidden" style={{ backgroundColor: "#136181" }}>
        <div className="row text-white">
          <div className="col-5">
            <hr />
            <div className="container">
              <span>© YETI 2024. TODOS LOS DERECHOS RESERVADOS.</span>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex justify-content-center">
              <img src="./images/yeti-logo-icon.png" alt="Yeti Helados" width="64px" />
            </div>

          </div>
          <div className="col-5">
            <hr />
            <div className="container">
              <ul>
                <li className="d-inline ms-3">
                  <a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">FRANQUICIAS</a>
                </li>
                <li className="d-inline ms-3">
                  <a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">TRABAJA CON NOSOTROS</a>
                </li>
                <li className="d-inline ms-3">
                  <a href="#" className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
