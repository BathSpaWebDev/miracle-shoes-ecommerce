import "./Navbar.css";

export const Navbar = () => {
  return <div>Navbar</div>;
};

import "./Navbar.css";
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { GiRunningShoe } from 'react-icons/gi';

export const Navbar = () => {

  return <div>
    <div class="top">
      <nav class="flex-container">

        <div class="item">
          <a href="#"><GiRunningShoe /> Miracle Shoes</a>
        </div>

        <div class="item">
          <a href="#"><AiOutlineHome /> Home </a>
        </div>

        <div class="item">
          <a href="#"><BsCart2 /> Shop</a>
        </div>

      </nav>
    </div>


  </div>;
};



  