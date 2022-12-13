import React from "react";

function Experience({ experience: { year, degree, title, content } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h3 className="mt-0">{degree}</h3>
        <h5 className="mt-0">{title}</h5>
        <p style={{ whiteSpace: 'pre-wrap' }}>{content}</p>
      </div>
    </div>
  );
}

export default Experience;
