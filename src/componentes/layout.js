import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./layout.css";

const Layout =({children})=>{
  return(
<>
<header>
<a href="/">
<StaticImage 
style={{width: `200px`,height: `100px`, textAlign: `center`}}
src="../images/images.png"
/>
</a>

</header>
<div>{children}</div>
<footer>
<StaticImage
style={{width: `230px`,height: `50px`, textAlign: `center`, margin:`1em`}} 
src="../images/footer.png"
/>
</footer>
</>
  )
}
export default Layout

