import { Fragment } from "react"

import dishImage from '../../assets/dish1.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
        <h3>Delicious Meal</h3>
        <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
        <img src={dishImage} alt='Table full of delicious fruits'/>
        </div>
    </Fragment>
  )  
}

export default Header;