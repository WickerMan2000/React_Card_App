import User from './User';

const UserFace = ({ onAddSubmission }) => {

    const getTheSubmittedData = submittedData => {
        const submitted = {
            ...submittedData,
            id: Math.random().toString()
        }
        onAddSubmission(submitted);
    }

    return (
        <div>
            <User submissionData={getTheSubmittedData} />
        </div>
    );
}

export default UserFace;