// import propTypes from 'prop-types';
import { Grid } from 'react-loader-spinner';

// const Flex = styl;
export const Loader = ({ isVisible }) => {
  return (
    <Grid
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    // </div>
  );
};

// Loader.propTypes = {
//   isVisible: propTypes.node.boolean,
// };
