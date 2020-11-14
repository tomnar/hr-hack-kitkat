import React from 'react';
import Interests from './Interests';
import Profile from './Profile';
import Settings from './Settings';
import styles from './Options.module.scss';
import Modal from 'react-modal';

const modalStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '0'
    }
};

type Props = {
    className?: string;
}

export default function Options({ className }: Props) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    return (
        <>
            <button className={className && className} onClick={() =>setModalIsOpen(true)}>⚙️</button>
            <Modal
                closeTimeoutMS={300}
                isOpen={modalIsOpen}
                onRequestClose={() =>setModalIsOpen(false)}
                style={modalStyles}
                contentLabel="Settings Modal"
                appElement={document.body}>
                <div className={styles.container}>
                    <Profile />
                    <Interests />
                    <Settings />
                </div>
            </Modal>
       </>
    );
}
