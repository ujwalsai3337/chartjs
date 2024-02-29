import React from 'react';
import './index.css';

//import flatpickr from 'flatpickr';

const InputSec = () => {



    return (
        <div className='input'>
            <div className='input-field'>
            <label className='label' htmlFor="year">Year:</label>
            <select className="drop-input" name="year" id="year">
                <option value="year1">I</option>
                <option value="year2">II</option>
                <option value="year3">III</option>
                <option value="year4">IV</option>
            </select>
            </div>

            <div className='input-field'>
            <label className="label" htmlFor="domain">Domain:</label>
            <select className='drop-input' name="domain" id="domain">
                <option value="iot">IOT</option>
                <option value="machine_learning">Machine Learning</option>
                <option value="web_dev">Web Dev</option>
                <option value="data_analytics">Data Analytics</option>
            </select>
            </div>

            <div className='input-field' id="date-input">
            <label className="label" htmlFor="date">Date:</label>
            <input
                className="drop-input"
                type="date"
                id="date"
                name="date"
                placeholder="Select Date"
            />
        </div>

            
        </div>
    );
}

export default InputSec;
