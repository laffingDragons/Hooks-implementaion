import React from 'react'
import './../css/fancy-card.css';

export default function FancyCard({ cardInfo, getCardClick }) {

    return (
        <>
            {
                cardInfo.map(card => {
                    return (<div key={card.id} className='col-md-6 mt-4' onClick={e => { getCardClick(card) }}>
                        <div className="father">
                            <div className="front">
                                <header>{card.name}</header>
                            </div>

                            <div className="back">
                                <header>{card.description || ''}</header>

                                <p>{card.info || ''}</p>
                            </div>

                        </div>
                    </div>)
                })
            }

        </>
    )
}
