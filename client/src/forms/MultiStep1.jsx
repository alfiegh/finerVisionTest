import React from 'react';
import { useState } from 'react';
const Step1 = (props) => {
  const { data, handleChange, next, title } = props;
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
        className='form-1'
        style={{
          backgroundColor: 'rgb(222,222,222)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          height: '220px',
        }}
      >
        <div className='d-flex input-1'>
          <div className='form-group p-3'>
            <b>
              <label htmlFor='name'>Name:</label>
            </b>

            <input
              type='text'
              name='name'
              value={data.name}
              onChange={handleChange}
              className='form-control'
              placeholder='Firstname'
              required
            />
          </div>
          <div className='form-group p-2 pt-3'>
            <b>
              <label htmlFor='email'>Surname:</label>
            </b>

            <input
              type='text'
              name='surname'
              value={data.surname}
              onChange={handleChange}
              className='form-control'
              placeholder='Lastname'
              required
            />
          </div>
        </div>
        <div className='form-group px-3 d-flex flex-column input-2'>
          <b>
            <label htmlFor='email'>Email:</label>
          </b>

          <input
            type='email'
            name='email'
            value={data.email}
            onChange={handleChange}
            className='form-control'
            style={{ minWidth: '234px', maxWidth: '248px' }}
            placeholder='Type your email'
            required
          />
        </div>
        <div className='d-flex justify-content-end py-3 px-3 input-3'>
          <button
            disabled={!data.name || !data.surname || !data.email}
            style={{
              background:
                'linear-gradient(rgb(70,78,170) 1%, rgb(90,85,167) 27%, rgb(108,94,183) 72%, rgb(117,98,204) 93%)',
              width: '120px',
              height: '35px',
              color: 'whitesmoke',
              borderRadius: '10px',
              transform: 'translateY(8px)',
            }}
            onClick={next}
          >
            Next {'>'}{' '}
          </button>
        </div>
      </form>
      {/* )} */}
    </div>
  );
};
export default Step1;
