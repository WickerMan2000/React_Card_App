import styles from './UsersList.module.css';
import UserInformation from './UserInformation';

const UsersList = ({ items }) => {

    return (
        <div className={styles.list}>
            {items.map(item => {
                return <UserInformation name={item.userName} age={item.userAge} />
            })}
        </div>
    );
}

export default UsersList;