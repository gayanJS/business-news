import React, { useState, useEffect } from 'react'
import News from './News'
import axios from "axios";
import './NewsC.css';

export default function NewsList() {
    const [NewsList, setNewsList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshNewsList();
    }, [])

    const NewsAPI = (url = 'http://localhost:5000/api/News/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshNewsList() {
        NewsAPI().fetchAll()
            .then(res => {
                console.log("+++++++++++",res.data)
                setNewsList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('ID') == "0")
            NewsAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshNewsList();
                })
                .catch(err => console.log(err))
        else
            NewsAPI().update(formData.get('ID'), formData)
                .then(res => {
                    onSuccess();
                    refreshNewsList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            NewsAPI().delete(id)
                .then(res => refreshNewsList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card1" onClick={() => { showRecordDetails(data) }}>
            <img src={data.urlToImage} className="card-img-top rounded-circle" />
            <div className="card-body">
            <h5>{data.date}</h5>
                <h5>{data.title}</h5>
                <span>{data.authorName}</span> <br />
                <span>{data.content}</span> <br />
                <button className="butn btun-light delete-button" onClick={e => onDelete(e, parseInt(data.id))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div >
                    
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <News addOrEdit={addOrEdit}  recordForEdit={recordForEdit}/>
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {/*
                            //tr > 3 td
                            [...Array(Math.ceil(NewsList.length / 2))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(NewsList[2 * i])}</td>
                                    
                                </tr>
                            )*/
                        }


                    </tbody>
                </table>
            </div>
        </div>



    )
}
