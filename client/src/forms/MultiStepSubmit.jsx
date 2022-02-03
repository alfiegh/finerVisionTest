import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Submit = ({ data, title, back }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { newData } = await axios.post(
        `${process.env.REACT_APP_API}/register`,
        {
          data,
        }
      );
      toast.success('Succesfully register');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

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
      >
        <div className='d-flex p-3'>{title}</div>
      </div>

      <form
        style={{
          backgroundColor: 'rgb(222,222,222)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      >
        <div className='d-flex flex-column '>
          <div className='px-2 pt-3'>
            <b>
              <label>Name:</label>
            </b>
            <span> {data.name}</span>
          </div>
          <div className='px-2  pt-1'>
            <b>
              <label>Surname:</label>
            </b>
            <span> {data.surname}</span>
          </div>
          <div className='px-2  pt-1'>
            <b>
              <label>Email:</label>
            </b>
            <span> {data.email}</span>
          </div>
          <div className='px-2  pt-1'>
            <b>
              <label>Telephone number:</label>
            </b>
            <span> {data.telephone}</span>
          </div>
          <div className='px-2  pt-1'>
            <b>
              <label>Gender:</label>
            </b>
            <span> {data.gender}</span>
          </div>
          <div className='px-2  pt-1'>
            <b>
              <label>Date of Birth:</label>
            </b>
            <span> {data.day + '/' + data.month + '/' + data.year}</span>
          </div>{' '}
          <div className='px-2  pt-1'>
            <b>
              <label>Comments:</label>
            </b>
            <span> {data.comments}</span>
          </div>
        </div>

        <div className='d-flex justify-content-between py-3 px-3 input-3'>
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
            style={{
              background:
                'linear-gradient(rgb(70,78,170) 1%, rgb(90,85,167) 27%, rgb(108,94,183) 72%, rgb(117,98,204) 93%)',
              width: '120px',
              height: '35px',
              color: 'whitesmoke',
              borderRadius: '10px',
              transform: 'translateY(8px)',
            }}
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Submit;
