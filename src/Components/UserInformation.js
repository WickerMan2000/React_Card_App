import styles from './UserInformation.module.css';

const Userinformation = ({ name, age }) => {
    return (
        <div className={styles.result}>
            My name is {name} and I am {age} years old.
        </div>
    );
}

export default Userinformation;