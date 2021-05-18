import styles from './User.module.css';
import Button from './Button';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import BackDrop from './BackDrop';

const messages = ['You have to input a valid name',
    'Your age must be a positive number and smaller than 120!',
    'Please insert your name and your age'];

const User = ({ submissionData }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isValidName, setIsValidName] = useState(false);
    const [isValidAge, setIsValidAge] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [message, setMessage] = useState([]);

    const nameChangeHandler = event => {
        const { value } = event.target;
        if (value.trim().length === 0) {
            setIsValidName(false);
        } else {
            setIsValidName(true);
        }
        setName(value.charAt(0).toUpperCase() + value.slice(1));
    }

    const numberChangeHandler = event => {
        const { value } = event.target;
        if (value <= 0 || value > 120) {
            setIsValidAge(false);
        } else {
            setIsValidAge(true);
        }
        setAge(value);
    }

    const itIsClicked = () => {
        setIsClicked(prevState => !prevState);
    }

    const submitHandler = event => {
        event.preventDefault();
        const submission = {
            userName: name,
            userAge: age
        }

        if (!isValidName) {
            if (!isValidAge) {
                setMessage(messages[2]);
                return;
            }
            setMessage(messages[0]);
            return;
        } else if (!isValidAge) {
            if (!isValidName) {
                setMessage(messages[2]);
                return;
            }
            setMessage(messages[1]);
            return;
        }

        submissionData(submission);
        setIsClicked(false);
        setIsValidName(false);
        setIsValidAge(false);
        setName('');
        setAge('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles['form-control']}>
                <div>
                    <label>Username</label>
                    <input type='text' value={name} onChange={nameChangeHandler}></input>
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' value={age} onChange={numberChangeHandler}></input>
                </div>
                <Button type='submit' onClick={itIsClicked}>Add User</Button>
            </div>
            <div>
                {isClicked && (!isValidName || !isValidAge) &&
                    <div>
                        <BackDrop error={isClicked} click={itIsClicked} />
                        <ErrorMessage pressed={itIsClicked} message={message} />
                    </div>
                }
            </div>
        </form>
    );
}

export default User;