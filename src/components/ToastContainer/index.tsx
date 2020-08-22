import React, { FC } from 'react';

import { FiAlertCircle, FiXCircle} from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
 return(
    <Container>
        <Toast hasDescription>
            <FiAlertCircle  size={20}/>
            <div>
                <strong>Aconteceu um erro</strong>
                <p> Não foi possivel fazer um login na Aplicação</p>
            </div>

            <button type="button">
                <FiXCircle size={18} />
            </button>
        </Toast>

        <Toast type='sucess' hasDescription={false}>
            <FiAlertCircle size={20} />
            <div>
                <strong>Realizado com Sucesso</strong>
            </div>

            <button type='button'>
                <FiXCircle size={18} />
            </button>
        </Toast>
        
        <Toast type='error' hasDescription>
            <FiAlertCircle size={20} />
            <div>
                <strong>Não conseguimos gravar</strong>
                <p> Verifique o que aconteceu e tente novamente... </p>
            </div>

            <button type='button'>
                <FiXCircle size={18} />
            </button>
        </Toast>
    </Container>
)}

export default ToastContainer;