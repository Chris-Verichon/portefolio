import axios from 'axios';

const personalMiddleware = (store) => (next) => (action) => {
  // console.log('action reçue par authMiddleware', action);
  switch (action.type) {
    default:
  }
  // on transmet l'action au suivant
  next(action);
};

export default personalMiddleware;
