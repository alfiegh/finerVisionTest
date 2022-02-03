import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List } from 'antd';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (people.length < 1) fetchPeople();
  }, [people]);

  const fetchPeople = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/registered`
      );

      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <pre>{JSON.stringify(people, null, 4)}</pre>
    <div className='container col-md-8 offset-md-2 mt-4 '>
      {people && (
        <List
          itemLayout='horizontal'
          dataSource={people}
          renderItem={(user) => (
            <List.Item style={{ listStyleType: 'none' }}>
              <List.Item.Meta
                title={
                  <div
                    style={{
                      background:
                        'linear-gradient(rgb(255,192,55) 0%, rgb(251,179,53) 27%, rgb(247,165,51) 72%, #e6914a 93%)',
                      height: '55px',
                      borderRadius: '10px',
                      transform: 'translateY(10px)',
                    }}
                    className='px-2'
                  >
                    <p className='pt-2'>{user.name + ' ' + user.surname}</p>
                  </div>
                }
                description={
                  <div
                    className='d-flex justify-content-evenly text-center pt-2'
                    style={{
                      backgroundColor: 'rgb(222,222,222)',
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                    }}
                  >
                    <p className='px-2'>
                      <b>Gender:</b> <br /> {user.gender}
                    </p>
                    <p className='px-2'>
                      <b>Email:</b> <br /> {user.email}
                    </p>

                    <p className='px-2'>
                      <b>Telephone:</b> <br /> {user.telephone}
                    </p>
                    <p>
                      <b>DOB:</b> <br />{' '}
                      {user.day + '/' + user.month + '/' + user.year}
                    </p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default People;
