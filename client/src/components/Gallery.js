import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCars} from '../actions';

class Gallery extends React.Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderList(){
        return this.props.cars.map((car) => {
            return(
                <div className="item" key={car._id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to = {`/cars/${car._id}`} >{car.title}</Link>
                        <div className="description">{car.description}</div>
                    </div>
               </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h2>Cars</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        cars: Object.values(state.cars)
    };
}

export default connect(mapStateToProps, {
    fetchCars
})(Gallery);