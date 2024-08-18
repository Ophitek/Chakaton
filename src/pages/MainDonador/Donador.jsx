import "./donador.css"

export default function NavbarDonador() {

  return (
    <div className="container">
            <div className="button-wrapper">
                <div className="button-title">👤 Ana</div>
                <div className="button-description">Id:4823049329493
                </div>
                <div className="button-price">$10.00</div>
            </div>
            <div className="button-wrapper">
                <div className="button-title">👤Pedro</div>
                <div className="button-description">id: 3240324</div>
                <div className="button-price">$20.00</div>
            </div>
            <div className="button-wrapper">
                <div className="button-title">👤 Pepe</div>
                <div className="button-description">Descripción del producto o servicio 3</div>
                <div className="button-price">$30.00</div>
            </div>
            <div className="button-wrapper">
                <div className="button-title">👤 Naranjo</div>
                <div className="button-description">Descripción del producto o servicio 4</div>
                <div className="button-price">$40.00</div>
            </div>
        </div>
  )
}