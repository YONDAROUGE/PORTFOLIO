import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img2.png";
import img2 from "../../assets/img5.png";
import img3 from "../../assets/img9.png";


const Portfolio = () => {
   return(
    <section>
   <article className='portfolio__item'>
   <div className='portfolio__item-image'>
     <img src={img1} alt='portfolio'/>
   </div>
   <h3>My Portfolio</h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/YONDAROUGE/PORTFOLIO' className='btn' target='_blank' rel="noreferrer">Github</a>
   <a href='https://niccinchami.netlify.app/' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
   </div>
 </article>

 <article className='portfolio__item'>
   <div className='portfolio__item-image'>
     <img src={img2} alt='portfolio'/>
   </div>
   <h3>My Portfolio</h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/YONDAROUGE/PORTFOLIO' className='btn' target='_blank' rel="noreferrer">Github</a>
   <a href='https://niccinchami.netlify.app/' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
   </div>
 </article>

 <article className='portfolio__item'>
   <div className='portfolio__item-image'>
     <img src={img3} alt='portfolio'/>
   </div>
   <h3>My Portfolio</h3>
   <div className='portfolio__item-cta'>
   <a href='https://github.com/YONDAROUGE/PORTFOLIO' className='btn' target='_blank' rel="noreferrer">Github</a>
   <a href='https://niccinchami.netlify.app/' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
   </div>
 </article>
</section>

)
}
   
export default Portfolio;
