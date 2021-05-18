import styles from './ErrorMessage.module.css';
import Card from '../UI/Card';
import Button from './Button';

const ErrorMessage = ({ pressed, message }) => {

    const pressOkay = event => {
        const { value } = event.target;
        pressed(value);
    }

    return (
        <Card>
            <div className={styles.invalid}>Invalid input</div>
            <div className={styles.message}>{message}</div>
            <Button onClick={pressOkay} type="submit">Okay</Button>
        </Card>
    );
}

export default ErrorMessage;