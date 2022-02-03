import React, { useState } from 'react';
const Step3 = (props) => {
  const { data, handleChange, next, back, title } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className='container col-md-8 offset-md-2 mt-3 pb-3'
      style={{ borderRadius: '10px', backgroundColor: 'whitesmoke' }}
    >
      <div
        style={{
          background:
            'linear-gradient(rgb(255,192,55) 0%, rgb(251,179,53) 27%, rgb(247,165,51) 72%, #e6914a 93%)',
          height: '55px',
          borderRadius: '10px',
          transform: 'translateY(10px)',
        }}
        className='accordion-title'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='d-flex p-3'>{title}</div>
      </div>
      {/* {isActive && ( */}
      <form
        style={{
          backgroundColor: 'rgb(222,222,222)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          height: '220px',
        }}
      >
        <div className='d-flex'>
          <div className='form-group px-2 pt-3 d-flex flex-column'>
            <b>
              <label htmlFor='comments'>Comments:</label>
            </b>

            <textarea
              className='container-fluid'
              name='comments'
              value={data.comments}
              onChange={handleChange}
              cols={90}
              rows={4}
              style={{ resize: 'none', overflow: 'scroll' }}
            ></textarea>
          </div>
        </div>
        <div className='d-flex justify-content-between py-4 px-3'>
          <button
            style={{
              background:
                'linear-gradient(rgb(70,78,170) 1%, rgb(90,85,167) 27%, rgb(108,94,183) 72%, rgb(117,98,204) 93%)',
              width: '120px',
              height: '35px',
              color: 'whitesmoke',
              borderRadius: '10px',
              transform: 'translateY(12px)',
            }}
            onClick={back}
          >
            {'<'} Back
          </button>
          <button
            style={{
              background:
                'linear-gradient(rgb(70,78,170) 1%, rgb(90,85,167) 27%, rgb(108,94,183) 72%, rgb(117,98,204) 93%)',
              width: '120px',
              height: '35px',
              color: 'whitesmoke',
              borderRadius: '10px',
              transform: 'translateY(12px)',
            }}
            onClick={next}
          >
            Next
          </button>
        </div>
      </form>
      {/* )} */}
    </div>
  );
};
export default Step3;
