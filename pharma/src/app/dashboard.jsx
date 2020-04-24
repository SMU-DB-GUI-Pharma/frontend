import React from 'react';
import { NavBar, PrescriptionList } from './index.js';
import { Medication, Prescription } from '../modules';

export class DashBoard extends React.Component {

    state = {
        currentPrescriptions: [],
        pastPrescriptions: []
    }

    getHeaders(heading) {
        return <>
            <ul className="list-group list-group-horizontal" style={{ "list-style-type": "none" }}>
                <li><h2>{heading}</h2></li>
                <li><button className="btn btn-primary ml-5" onClick={()=>console.log("FIXME:sort list")}>Recurring Only</button></li>
                <li><button className="btn btn-primary ml-5" onClick={()=>console.log("FIXME:sort list")}>Non-Recurring</button></li>
                <li><button className="btn btn-primary ml-5" onClick={()=>console.log("FIXME:sort list")}>Most Recent</button></li>
                <li><button className="btn btn-primary ml-5" onClick={()=>console.log("FIXME:sort list")}>Least Recenet</button></li>
            </ul>
            <div className="line-break"></div>
        </>
    }

    render() {

        let temp = [
            new Prescription(
                "forme",
                [new Medication("idiotPill", 10, false, 0, 1), new Medication("idiotPill2", 20, true, 0, 2)],
                new Date()
            ),
            new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ),
            new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            ), new Prescription(
                "samplePrescription",
                [new Medication("helloPill", 30, true, 1, 3), new Medication("worldPill", 40, false, 1, 3)],
                new Date()
            )
        ]

        return <>
            <NavBar state={'dashboard'} obj={this}></NavBar>
            <div className="standard-margin">
                {this.getHeaders("Current Prescription")}
                <PrescriptionList prescriptions={temp} />
                <br />
                {this.getHeaders("Past Prescription")}
                <PrescriptionList prescriptions={temp} />
            </div>
        </>
    }
}