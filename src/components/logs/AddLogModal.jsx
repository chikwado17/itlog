import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const AddLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({
                html: 'Please enter a message and tech'
            })
        }else {

            console.log(message, attention, tech);

            setAttention(false);
            setMessage('');
            setTech('');
        }
    }

    return (
        <div className='modal' id='add-log-modal' style={{width:'75%', height: '85%'}}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value) } />
                        <label className='active'>Log Message</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                       <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                        <option value="" disabled>Select Technician</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Sam Smith">Sam Smith</option>
                        <option value="Sara Wilson">Sara Wilson</option>
                       </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input onChange={e => setAttention(!attention)} checked={attention} value={attention} type="checkbox" className='filled-in' />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

export default AddLogModal
