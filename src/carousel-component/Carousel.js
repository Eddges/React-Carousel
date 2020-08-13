import React from 'react'
import classes from './Carousel.module.css'

class Carousel extends React.Component{
    state = {
        translate : 0
    }
    translate = () => {
        this.setState({
            translate : this.state.translate - 150
        })
    }
    render(){
        return(
            <div className={classes.Container}>
                <span>Slider here</span>
                <div className={classes.CarouselSlider} style={{'transform' : `translateX(${this.state.translate}px)`}}>
                    <div className={classes.CarouselItem}>1</div>
                    <div className={classes.CarouselItem}>2</div>
                    <div className={classes.CarouselItem}>3</div>
                    <div className={classes.CarouselItem}>4</div>
                    <div className={classes.CarouselItem}>5</div>
                    <div className={classes.CarouselItem}>6</div>
                    <div className={classes.CarouselItem}>7</div>
                    <div className={classes.CarouselItem}>8</div>
                    <div className={classes.CarouselItem}>9</div>
                    <div className={classes.CarouselItem}>10</div>
                    <div className={classes.CarouselItem}>11</div>
                    <div className={classes.CarouselItem}>12</div>
                    <div className={classes.CarouselItem}>13</div>
                    <div className={classes.CarouselItem}>14</div>
                    <div className={classes.CarouselItem}>15</div>
                    <div className={classes.CarouselItem}>16</div>
                    <div className={classes.CarouselItem}>17</div>
                    <div className={classes.CarouselItem}>18</div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                    <div className={classes.CarouselItem}></div>
                </div>
                <button className={classes.NextButton} onClick={this.translate}>Next</button>
            </div>
        )
    }
}

export default Carousel