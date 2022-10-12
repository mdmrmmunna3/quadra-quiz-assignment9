import React from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
    const handleCorrectAns = () => {
         
        if(option === correctAnswer) {
            toast.success('This is True Answer', {
                position: toast.POSITION.TOP_CENTER
            });
            
        }
        else{
            toast.success('This is Wrong Answer', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
        <div className='flex justify-center '>
            <div className='w-3/4 md:w-3/4 lg:w-2/4 mb-5 py-2 rounded-lg' style={{ backgroundColor: '#0F3443' }}>
                <p onClick={handleCorrectAns} className='text-center text-white font-semibold'>{option}</p>
            </div>
        </div>
    );
};

export default Option;