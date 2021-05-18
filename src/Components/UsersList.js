import styles from './UsersList.module.css';
import UserInformation from './UserInformation';

const UsersList = props => {

    return (
        <div className={styles.list}>
            {props.items.map(item => {
                return <UserInformation name={item.userName} age={item.userAge} />
            })}
        </div>
    );
}

export default UsersList;