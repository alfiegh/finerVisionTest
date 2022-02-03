import React from 'react';
import { useState } from 'react';
const Step2 = (props) => {
  const { data, handleChange, next, back, title } = props;
  const [isActive, setIsActive] = useState(false);

  let genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

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
          transform: 'translateY(8px)',
        }}
        className='accordion-title'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='d-flex p-3'>{title}</div>
      </div>
      {/* {isActive && ( */}
      <form
        className='visible'
        style={{
          backgroundColor: 'rgb(222,222,222)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          height: '220px',
        }}
      >
        <div className='d-flex'>
          <div className='form-group p-3 d-flex flex-column'>
            <b>
              <label>Telephone Number</label>
            </b>
            <input
              type='text'
              name='telephone'
              value={data.telephone}
              onChange={handleChange}
              className='form-control'
              placeholder='Mobile number preferred'
            />
          </div>

          <div className='form-group p-2 pt-3'>
            <b>
              <label htmlFor='gender'>Gender</label>
            </b>

            {/* onClick={() => setGender('null')} */}
            <select
              className='form-control'
              name='gender'
              onChange={handleChange}
            >
              <option value={data.gender}>Select Gender</option>
              {genders.map((g) => (
                <option type='text' key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='d-flex flex-column mx-2'>
          <div className='form-group px-2'>
            <b>
              <label>Date of Birth</label>
            </b>
            <div className='d-flex'>
              <input
                className='form-control text-center'
                type='text'
                name='day'
                value={data.day}
                maxLength={2}
                style={{ maxWidth: '50px' }}
                onChange={handleChange}
                placeholder='DD'
                // onChange={(e) => setDay(e.target.value)}
              ></input>
              <input
                className='mx-2 form-control text-center'
                type='text'
                name='month'
                value={data.month}
                maxLength={2}
                style={{ maxWidth: '55px' }}
                onChange={handleChange}
                placeholder='MM'
                // onChange={(e) => setMonth(e.target.value)}
              ></input>
              <input
                className='form-control text-center'
                type='text'
                name='year'
                value={data.year}
                maxLength={4}
                minLength={2}
                style={{ maxWidth: '70px' }}
                onChange={handleChange}
                placeholder='YYYY'
                // onChange={(e) => setYear(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between py-3 px-3'>
          <button
            style={{
              background:
                'linear-gradient(rgb(70,78,170) 1%, rgb(90,85,167) 27%, rgb(108,94,183) 72%, rgb(117,98,204) 93%)',
              width: '120px',
              height: '35px',
              color: 'whitesmoke',
              borderRadius: '10px',
              transform: 'translateY(8px)',
            }}
            onClick={back}
          >
            {'<'} Back
          </button>
          <button
            disabled={
              !data.telephone ||
              !data.gender ||
              !data.day ||
              !data.month ||
              !data.year
            }
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
            Next {'>'}
          </button>
        </div>
      </form>
      {/* )} */}
    </div>
  );
};
export default Step2;
