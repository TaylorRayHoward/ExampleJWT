export const getJwt = () => {
  return 'bearer ' + localStorage.getItem('example-jwt-jwt');
};
