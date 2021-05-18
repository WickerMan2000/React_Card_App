import styles from './BackDrop.module.css';

const BackDrop = props => {
    return (
        <div className={props.error && styles.backdrop} onClick={props.click}></div>
    );
}

export default BackDrop;