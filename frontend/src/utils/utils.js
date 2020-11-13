// import { Route } from 'react-router-dom';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '30%',
    transform: 'translate(-50%, -50%)',
  },
};

export const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export const Config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

// export config;

export default function timeTransform(time) {
  const tempTime = time.replace(/[a-zA-Z]/g, ' ');
  return tempTime.substring(0, tempTime.indexOf('.'));
}

// export default function createGameRouter(data){
//   return {
//     data.quizzes.map((item, idx) => {
//     <Route exact path=`/${item}` key={idx} ><gameInfo /></Route>
//     });
//   }
// }

export const targetUrl = 'http://localhost:5005/';
