import React, { Component } from "react";
import MoveIcon from './MoveIcon';

class HomePage extends Component {
    render() {
      return (
            <div className="container pt-5">
                <div class="card bg-transparent text-white">
                    <img class="card-img" src="./imgs/Pre-Owned-Sale-Slider.jpg" alt="Card"/>
                    <div class="card-img-overlay ">
                        <br></br>
                        <br></br>
                        <br></br>
                        <div class="container bg-danger sticky-top col-xl-8">
                            <div class = "container text-center" >
                                <div class="row justify-content-center">
                                    <div class="col-xl-7 col-lg-8">
                                    <h3 class="mb-0 text-white">Find your car</h3>
                                        <form action="">
                                            <div class="form-group">
                                                    <select class="form-control">
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                    </select>
                                            </div>

                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder = "Car Search"/>
                                            </div>

                                            <div class="form-group">
                                                <div class="container">
                                                    <div class="row">
                                                    <div class="col"><button class="col-6 btn btn-light mr-2 book-btn float-right">Search</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="content">
                        <MoveIcon/>
                    </div>
                </div>
            </div>
        );
    }
}

   
export default HomePage;