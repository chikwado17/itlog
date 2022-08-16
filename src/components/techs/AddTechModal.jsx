import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const AddTechModal = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () => {
        if(firstname === '' || lastname === '') {
            M.toast({
                html: 'Please enter the first and last name'
            })
        }else {

            console.log(firstname, lastname);

            setFirstname('');
            setLastname('');
        }
    }

    return (
        <div className='modal' id='tech-modal'>
            <div className='modal-content'>
                <h4>Add New Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value) } />
                        <label className='active'>Firstname</label>
                    </div>
                </div>

         
                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name='lasrname' value={lastname} onChange={(e) => setLastname(e.target.value) } />
                        <label className='active'>Lastname</label>
                    </div>
                </div>

            </div>
            <div className='modal-footer'>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal
