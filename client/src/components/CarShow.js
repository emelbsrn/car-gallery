import React from 'react';
import {connect} from 'react-redux';
import {fetchCar} from '../actions';

class CarShow extends React.Component {
    componentDidMount() {
        this.props.fetchCar(this.props.match.params.id);
    };

    render() {
        if(!this.props.car)
            return "loading"
        return ( 
            <div>
                <div className="row">
                    <div className="col">
                        <h2>{this.props.car.title} </h2>
                    </div>
                </div>
                <div className="row"> 
                    
                    <div className="col-md-8"> 
                        <img src={images(`./${this.props.car.imagePaths[0]}`)} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group list-group-flush">
                            <li className="row list-group-item d-flex">
                                <div className="col-6 font-weight-bold">Brand</div>
                                <div className="col-6">{this.props.car.brand}</div>
                            </li>
                            <li className="row list-group-item d-flex">
                                <div className="col-6 font-weight-bold">Model</div>
                                <div className="col-6">{this.props.car.model}</div>
                            </li>
                            <li className="row list-group-item d-flex">
                                <div className="col-6 font-weight-bold">Year</div>
                                <div className="col-6">{this.props.car.year}</div>
                            </li>
                            <li className="row list-group-item d-flex">
                                <div className="col-6 font-weight-bold">Price</div>
                                <div className="col-6">{this.props.car.price}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p>{this.props.car.description} </p>
                </div>
            </div>
        );
    }
};
const images = require.context('../../../images', true);

const mapStateToProps = (state, ownProps) => {
    return { car: state.cars[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {
    fetchCar
})(CarShow);