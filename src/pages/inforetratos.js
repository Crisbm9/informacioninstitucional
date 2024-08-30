import * as React from "react"
import Layout from "../componentes/layout";
import './infoInstitucional.css';
import { StaticImage } from "gatsby-plugin-image";


const InfoInstitucional = () => {
  
    return (
      <Layout>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
          <a href="/infopresidenta" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
          <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
          <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
          <a href="/infoactosoficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
          <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
          <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/>
          <a href="/infoministerio" role='button' className="aInst">Ministerio de la presidencia</a> <br/><br/>


          </div>

    
          
          
         <div style={{display:`flex`}}>
        <div>
        <StaticImage
          alt="Card image cap"
          src="../images/felipe1.jpg"
          width="100px"
        />
        <p>
S.M. el Rey
© Casa de S.M. el Rey
Formato:
50 x 60 cm y 30 x 40 cm
Depósito legal:
M-5986-2020
NIPO:
093-20-006-X</p>
      </div>
      <div>
        <StaticImage
          alt="Card image cap"
          src="../images/felipe2.jpg"
          width="100px"
        />
        <p>
        S.M. el Rey con indumentaria de gala en el Palacio Real de Madrid
© Casa de S.M. el Rey
Formato:
50 x 60 cm y 30 x 40 cm
Depósito legal:
M-5983-2020
NIPO:
093-20-006-X</p>
      </div>
      
      <div>
        <StaticImage
          alt="Card image cap"
          src="../images/felipe3.jpg"

          width="100px"
        />
        <p>
        S.M. EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DEL EJÉRCITO DE TIERRA
© Casa de S.M. el Rey
Formato:
50 x 60 cm y 30 x 40 cm
Depósito legal:
M-3588-2015
NIPO:
006-15-001-3
        </p>
      </div>
      <div>
        <StaticImage
          alt="Card image cap"
          src="../images/felipe4.jpg"

          width="100px"
        />
        <p>
        S.M. EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DE LA ARMADA
© Casa de S.M. el Rey
Formato:
50 x 60 cm y 30 x 40 cm
Depósito legal:
M-3588-2015
NIPO:
006-15-001-3
        </p>
      </div>
      <div>
        <StaticImage
          alt="Card image cap"
          src="../images/felipe5.jpg"

          width="100px"
        
        />
        <p>
        S.M. EL REY CON UNIFORME DE DIARIO DE CAPITÁN GENERAL DEL EJÉRCITO DEL AIRE
© Casa de S.M. el Rey
Formato:
50 x 60 cm y 30 x 40 cm
Depósito legal:
M-3588-2015
NIPO:
006-15-001-3
        </p>
      </div>

    </div>
            </div>
        
        
        
  
  
      </Layout>
  
    )
  }
  
  export default InfoInstitucional
