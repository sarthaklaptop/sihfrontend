// import "./styles.css"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import farmerssss from '../assets/farmerssss.jpg'
import farmerssss2 from '../assets/farmersss2.jpg'
import farmerssss3 from '../assets/farmersss3.jpg'
import farmerssss4 from '../assets/farmersss4.jpg'
import farmerssss5 from '../assets/farmersss5.jpg'
import farmerssss6 from '../assets/farmersss6.jpg'

export default function ImageScroll() {
    const ref = useRef(null);
  
    return (
      <div className="flex">
        <ul id="ull" ref={ref}>
          <li className="lii "><img width={300} height={300} src={farmerssss}/></li>
          {/* <li className="lii"><img width={250} height={250} src={farmerssss2}/></li>
          <li className="lii"><img width={250} height={250} src={farmerssss3}/></li>
          <li className="lii"><img width={250} height={250} src={farmerssss4}/></li>
          <li className="lii"><img width={250} height={250} src={farmerssss5}/></li>
          <li className="lii"><img width={250} height={250} src={farmerssss6}/></li> */}
        </ul>

      </div>
    );
  }
  