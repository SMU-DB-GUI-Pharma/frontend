import React from 'react';

export const PrescriptionList = props => {

    return <>
        <div className="close-margin">
            <ul className="list-group list-group-horizontal overflow-auto">
                {
                    props.prescriptions.map((prescription, id) => (
                        <li className="list-group-item" key={id}>
                            <button className="btn">
                                <h4>{prescription.name}</h4>
                                {
                                    prescription.medications.map((medication, id) => (
                                        <p key={id} className="text-left" >{medication.name}</p>
                                    )
                                    )
                                }
                            </button>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    </>
}

