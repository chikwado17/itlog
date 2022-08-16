import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';

const Logs = () => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);


    const getLogs = async () => {
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, 'logs'));

        let logsItem = [];

        querySnapshot.forEach((doc) => {
            logsItem.push({ ...doc.data(), id: doc.id });
        });


        setLogs(logsItem);

        setLoading(false);
    }

    useEffect(() => {

        getLogs();

    }, []);

    

    if(loading) {

        return <Preloader />

    }else {
        return (
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h4 className='center'>System Logs</h4>
                </li>
            
           {!loading && logs.length === 0 ? (<p>No Logs to show...</p>) : (
            logs.map((log, index) => (
                <LogItem key={log.id} index={index + 1} log={log} />
            ))
           )}
            </ul>   
        )
    }
 
    
}

export default Logs;
