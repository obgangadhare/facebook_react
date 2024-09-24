import React from "react";
import Like from "./Like";
import './feedschild.css';

const Feedschild = (prodlist) => {      //functional component that accepts the products data paased to it
    // custom method ,called from the view in the render() below
    const renderList = ({ prodlist }) => { //temp argument that recieves the data passed to this component by product component
        if (prodlist) {              // if data exists       
            return prodlist.map((data) => {  // map() function iteratively executes once for each record,in the json data
                return (

                    <div key={data.id} >
                        <div className="card">
                            <div className="card-imgpr">
                                <img className=" imgsizepr" src={data.imgpr} alt={data.nameofprofile} />
                            </div>

                            <div className="nameofprof"><p>{data.nameofprofile}</p></div>

                            <div className="nameofproftime"><p>{data.time}🌏</p></div>
                            <div className="captionofprof"><p>{data.caption}</p></div>
                            <div className="threedots"><p>...</p></div>
                            <div className="closedbar"><p>x</p></div>
                            <div className="card-img">
                                <img className=" imgsize" src={data.img} alt={data.nameofprofile} />
                                <div className="lineunderlike"><hr/></div>
                                <div className="btnofprof">
                                    <Like />
                                </div>
                                <button  className="commentonprof btnofprof"><div><i class="fa-regular fa-comment"></i>Comment</div></button>
                                <button  className="shareonprof btnofprof"><div><i class="fa-regular fa-share-from-square"></i>Share</div></button>
                            </div>
                        </div>

                    </div>


                )
            })
        }
    }
    return (
        <div className="container">

            {renderList(prodlist)}

        </div>
    )
}
export default Feedschild;