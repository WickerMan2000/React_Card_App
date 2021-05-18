import styles from './UserInformation.module.css';

const Userinformation = props => {
    return (
        <div className={styles.result}>
            My name is {props.name} and I am {props.age} years old.
        </div>
    );
}

export default Userinformation;