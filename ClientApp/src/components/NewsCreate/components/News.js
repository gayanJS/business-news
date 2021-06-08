import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap';
import './NewsC.css';
import { connect } from "react-redux"
import { createNews } from '../../../redux/actions/newsActions'
import 'react-day-picker/lib/style.css'


const defaulturlToImage = '/News-2.png'

const initialFieldValues = {
    ID: 0,
    title: '',
    Date: '',
    author:'',
    description:'',
    imageName: '',
    urlToImage: defaulturlToImage,
    imageFile: null
}

function News(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    console.log("NESSSS", props.news)

    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    urlToImage: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                urlToImage: defaulturlToImage
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.title = values.title == "" ? false : true;
        temp.urlToImage = values.urlToImage == defaulturlToImage ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('ID', values.ID)
            formData.append('title', values.title)
            formData.append('Date', values.Date)
            formData.append('author',values.author)
            formData.append('description',values.description)
            formData.append('urlToImage', values.imageName)      //urlToImage
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
            alert("News Submitted")
        }
        else{
            console.log("Invalid date");
        }

        const data  = values;
        props.createNews(data)
        //window.location.reload();
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
      
     
            <div className="post">
                
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card1">
                    <img src={values.urlToImage} className="card-img-top image" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/" className={"form-control-file" + applyErrorClass('urlToImage')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form">
                            <input className={"form-control" + applyErrorClass('title')} placeholder="News title" name="title"
                                value={values.title}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form">
                            <input className="form-control" placeholder="Date" name="Date"
                                value={values.Date}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form">
                          
                        </div>
                        <div className="form">
                            <input className="form-control" placeholder="asuthor Name" name="author"
                                value={values.author}
                                onChange={handleInputChange} />
                        </div>
                        <Form>
                            <Form.Group >
                            {/* <Form.Label></Form.Label> */}
                            <Form.Control as="textarea" rows={3} placeholder="Type your description here" id="area"  name="description" value={values.description}
                                onChange={handleInputChange}/>
                            </Form.Group>
                        </Form>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light but">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
      
    )
}

const mapStateToProps = state => {
    return {
      news : state.news.createdNews,
    }
  }

// const mapDispatchToProps = dispatch => {
//     return {
//         createNews: () => dispatch(createNews()),
//     }
// }  

export default connect(mapStateToProps, {createNews})(News)


