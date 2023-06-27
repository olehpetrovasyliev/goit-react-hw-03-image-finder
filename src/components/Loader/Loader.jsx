import propTypes from 'prop-types';
import { Grid } from 'react-loader-spinner';

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
  );
};

ImageGallery.propTypes = {
  isVisible: propTypes.node.bool,
};
