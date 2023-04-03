import { useState, useEffect } from 'react';
import { PERSIST_KEY } from '../utils/contants';

const usePersist = () => {
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem(PERSIST_KEY)) || false);

    useEffect(() => {
        localStorage.setItem(PERSIST_KEY, JSON.stringify(persist))
    }, [persist]);

    return [persist, setPersist];
}

export const deletePersistProperty = () => localStorage.removeItem(PERSIST_KEY);

export default usePersist;