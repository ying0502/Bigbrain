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

export const pageConfig = {
  content: {
    display: 'flex',
    alignContent: 'center',
    justifyItems: 'center',
  },
};

// headers for situation 1
export const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

// headers for situation 2
export const Config = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

// transform the date
export function timeTransform(time) {
  const tempTime = time.replace(/[a-zA-Z]/g, ' ');
  return tempTime.substring(0, tempTime.indexOf('.'));
}

export const targetUrl = 'http://localhost:5005/';
