import React from 'react';

const MyReviewRow = ({ view, handleDeleteReview, handleReviewUpdate }) => {
    const { _id, message, serviceName } = view;

    return (
        <tr>
              <td><button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost">X</button></td>
              <td>{serviceName}</td>
              <td>{message}</td>
              <td><button onClick={() => handleReviewUpdate(_id)} className="btn btn-ghost">Update</button></td>
            </tr>
    );
};

export default MyReviewRow;