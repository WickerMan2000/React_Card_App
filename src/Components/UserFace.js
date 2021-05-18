import User from './User';

const UserFace = props => {

    const getTheSubmittedData = submittedData => {
        const submitted = {
            ...submittedData,
            id: Math.random().toString()
        }
        props.onAddSubmission(submitted);
    }

    return (
        <div>
            <User submissionData={getTheSubmittedData} />
        </div>
    );
}

export default UserFace;