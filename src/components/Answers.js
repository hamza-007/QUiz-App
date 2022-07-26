import React, { useMemo, useState } from "react";

const Answers = ({ data, handler,id }) => {
console.log(id);
  return (
    <div key={id} className='answers-container'>
      <div className='question-answers'>
        <input
          type={"radio"}
          name={'answer'}
          onChange={handler}
          value={data}
        />
        <h2> {data} </h2>
      </div>
    </div>
  );
};

export default React.memo(Answers);
