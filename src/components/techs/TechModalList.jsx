import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import TechModalItem from './TechModalItem';

const TechModalList = () => {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTechs = async () => {
        setLoading(true);

        const snapShots = await getDocs(collection(db, 'techs'));

        let techsItem = [];
        snapShots.forEach((doc) => {
            techsItem.push({ 
                id: doc.id,
                ...doc.data() 
            });
        });

        setTechs(techsItem);

        setLoading(false);
    }

    useEffect(() => {
        getTechs();
    }, []);

    return (
        <div id='tech-list-modal' className="modal">
            <div className='modal-content'>
                <h4>Technician List</h4>

                <ul className='collection'>
                    {!loading && techs.map(tech => (
                         <TechModalItem key={tech.id} tech={tech} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechModalList
