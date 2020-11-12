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

export const targetUrl = 'http://localhost:5005/';
