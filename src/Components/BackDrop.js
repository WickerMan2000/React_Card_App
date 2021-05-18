import styles from './BackDrop.module.css';

const BackDrop = ({ error, click }) => {
    return (
        <div className={error && styles.backdrop} onClick={click}></div>
    );
}

export default BackDrop;