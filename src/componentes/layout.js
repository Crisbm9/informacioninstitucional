import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Layout =({children})=>{
  return(
<>
<header>
<StaticImage 
style={{width: `200px`,height: `100px`, textAlign: `center`}}
src="..\images\images.png"
/>

</header>
<div>{children}</div>
<footer>footer</footer>
</>
  )
}
export default Layout

