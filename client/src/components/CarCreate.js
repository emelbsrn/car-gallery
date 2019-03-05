import React from 'react';
import {
    Field,
    reduxForm
}
from 'redux-form';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import {
    getBrandList,
    getModelList,
    createCar,
    getSelectedModel,
    emptySelectedModel,
    emptyModelList,
    getImagePath
} from '../actions';


class CarCreate extends React.Component {
    componentDidMount() {
        this.props.getBrandList();
    }
    renderField = ({
        input,
        label,
        type,
        meta: {
            touched,
            error
        }    
    }) => (
        <div className = "field" >
            <label>{label}</label>
            <input {...input} type={type} />
            {touched &&
                    ((error && <div className="ui error message">
                        <div className = "header">{error}</div></div > ))
            }
        </div>
    );

    renderSelectField = ({
        label,
        onChangeVal,
        input,
        children,
        selectVal,
        meta: {
            touched,
            error
        }
    }) => (
        <div className="field" onChange={onChangeVal} >
            <label>{label}</label>
            <select value={selectVal} {...input}>
                {children}
            </select>
            {touched &&
                    ((error && <div className="ui error message">
                        <div className = "header">{error}</div></div > ))
            }
        </div>
    );

    handleModelChange = (e) => {
        if(e.target.value)
            this.props.getSelectedModel(e.target.value)
    }

    handleBrandChange = (e) => {
        this.props.emptySelectedModel();
        if (e.target.value)
            this.props.getModelList(this.props.brands[e.target.selectedIndex - 1])
        else 
            this.props.emptyModelList();
    }

    onSubmit = formValues => {
        console.log(formValues);
        this.props.change('model', this.props.selectedModel)
        this.props.change('filePath',this.props.imagePath)
        //this.props.createCar(formValues);
    };

    imageUpload = imageFile => {
        console.log(imageFile)
        this.props.getImagePath(imageFile);
    }

    render() {
        console.log()
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field type="text" name="title" component={this.renderField} label="Enter Title"/>
                <Field type="text" name = "description" component={this.renderField} label="Enter Description"/>
                <Field name="brand" component={this.renderSelectField} label="Select Brand" onChangeVal={this.handleBrandChange.bind(this)} >
                    <option value = "" >Select a brand</option>
                    { this.props.brands.map((item) => <option key={item.name} value={item.name}>{item.name}</option>) }
                </Field>
                <Field name="model" component={this.renderSelectField} label="Select Model" selectVal={this.props.selectedModel} onChangeVal={this.handleModelChange.bind(this)} >
                    <option value = "" >Select a model</option>
                    {this.props.models.map((item) => <option key={item} value={item}>{item}</option>)}
                </Field>
                <Dropzone name="file" onDrop={acceptedFiles => this.imageUpload(acceptedFiles[0])}>
                    {({getRootProps, getInputProps}) => (
                        <div className = "field" >
                            <label>Upload an image</label>
                            <div className="ui action input" {...getRootProps()}>
                                <input type="text" placeholder="Drag & drop some files here, or click to select files" readOnly />
                                <input type="file" {...getInputProps()} />
                                <div className="ui icon button">
                                    <i className="attach icon"></i>
                                </div>
                            </div>
                        </div>
                    )}
                </Dropzone>
                <button className="ui button primary" disabled={this.props.pristine || this.props.submitting}>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Required'
    } else if (formValues.title.length > 15) {
        errors.title = 'Must be 15 characters or less'
    }
    if (!formValues.description) {
        errors.description = 'Required'
    } else if ((formValues.description.length > 30)) {
        errors.email = 'Must be 30 characters or less'
    }
    if (!formValues.brand) {
        errors.brand = 'You must select a brand'
    }
    if (!formValues.model) {
        errors.model = 'You must select a model'
    }
    return errors
}

const mapStateToProps = (state) => {
    return {
        brands: state.cars.brands,
        models: state.cars.models,
        selectedModel: state.cars.selectedModel,
        imagePath: state.cars.imagePath
    }
}

CarCreate = reduxForm({
    form: 'carCreateForm',
    validate
})(CarCreate);

export default connect(mapStateToProps, {
    createCar,
    getBrandList, 
    getModelList,
    getSelectedModel,
    emptyModelList,
    emptySelectedModel,
    getImagePath
})(CarCreate);