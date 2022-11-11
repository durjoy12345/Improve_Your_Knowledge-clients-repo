import React from "react";

const SingleSection = ({ view, image }) => {
  const { date, message, name, serviceName } = view;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="photoURL" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{message}</td>
      <td>{date}</td>
    </tr>
  );
};

export default SingleSection;
