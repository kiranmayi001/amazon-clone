import classes from './LandingPage.module.css'
import React, { Component } from 'react'

 class LandingPage extends Component {
     state={
         addsArr:["https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
                  "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg",
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"],
     addImage:"https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
                }


componentDidMount(){
//     let i=0;
//     setInterval(function(){
//    if(i==this.state.addsArr.length-1){
//             // i=0;
//             this.setState({addImage:this.state.addsArr[i]})
//             i=0;
//         }
//         else{
//             // i=0;
//             this.setState({addImage:this.state.addsArr[i]})
//             i++; 
//         }
//     },5000)
}
setAdd=()=>{
    
}

    render() {
        console.log(this.state.addsArr.length)
        return (
            <div className={classes.LandinPageConatiner}>
                <div  className={classes.caraouselContainer}>
                </div>

                <div className={classes.ProductDivisionContainer}>
                  <div className={classes.ProductLeftSection}>
                   <div className={classes.CardDiv}>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div> <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div> <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                       <div className={classes.Card}>
                           <img className={classes.LandingImage} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="LandingImage"/>
                           <p className={classes.LandingPara}>ACs</p>
                       </div>
                   </div>

                  </div>
                  <div className={classes.ProductRightSection}>
                 <div className={classes.changeImage}   >
               <img className={classes.addImage} src={this.state.addImage} alt="add"/>
               </div>

                  </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
