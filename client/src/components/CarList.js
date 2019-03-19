import React from 'react';
import {connect} from 'react-redux';
import {fetchCars} from '../actions';
import {Link} from 'react-router-dom';

class CarList extends React.Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderList(){
        return this.props.cars.map((car, index) => {
            return(
                <div className="tab-pane" id={car._id} key={car._id} role="tabpanel">
                    <Link to={`cars/${car._id}`} className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col">
                                {car.imagePaths && car.imagePaths.length > 0 ? (
                                    <img alt = "" src={images(`./${car.imagePaths[0]}`)} className="img-fluid" />
                                    ): (<i className="far fa-file-image fa-3x"></i> )}
                            </div>
                             <div className="col-11">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{car.title}</h5>
                                    <small>3 days ago</small>
                                </div>
                                <small>{car.description}</small>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="list-group">
                {this.renderList()}
            </div>
        )
    }
}

const images = require.context('../../../images', true);

const mapStateToProps = state => {
    return {
        cars: Object.values(state.cars)
    };
}

export default connect(mapStateToProps, {
    fetchCars
})(CarList);