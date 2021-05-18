import styles from './ErrorMessage.module.css';
import Card from '../UI/Card';
import Button from './Button';

const ErrorMessage = props => {

    const pressOkay = event => {
        props.pressed(event.target.value);
    }

    return (
        <Card>
            <div className={styles.invalid}>Invalid input</div>
            <div className={styles.message}>{props.message}</div>
            <Button onClick={pressOkay} type="submit">Okay</Button>
        </Card>
    );
}

export default ErrorMessage;