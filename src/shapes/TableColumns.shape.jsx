import PropTypes from 'prop-types';
import { nonNegativeInteger } from 'airbnb-prop-types';

export default PropTypes.shape({
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataFormat: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  export: PropTypes.bool,
  filter: PropTypes.string,
  filterOptions: PropTypes.object,
  formatExtraData: PropTypes.any,
  hidden: PropTypes.bool,
  searchable: PropTypes.bool,
  sortable: PropTypes.bool,
  width: nonNegativeInteger,
});
