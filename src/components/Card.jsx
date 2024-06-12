import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Card = ({ children }) => {
    const { theme } = useContext(AppContext);

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 xl:p-8 ${theme === 'dark' ? 'dark' : ''}`}>
            {children}
        </div>
    );
};

export default Card;
