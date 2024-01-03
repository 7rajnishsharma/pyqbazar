import React, { Component } from 'react'
import pdf from '../assets/pdf-img.png'

export default class PdfCard extends Component {
    
    render() {
        return (
            <>
                <a href={this.props.pdfUrl} onClick={this.handleCardClick} className="card">
                    <img className="card-img-top" src={pdf} alt="..." style={{ height: '40px', width: '40px', margin: 'auto' }}/>
                        <div className="card-body">
                            <h5 className="card-text">{this.props.subj}</h5>
                            <p className="card-text">{this.props.year}</p>
                        </div>
                </a>
            </>
        )
    }
}
