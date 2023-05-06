import React from "react";
import PropTypes from 'prop-types';

NumberQueries.propTypes = {
  data: PropTypes.any,
};

export function NumberQueries({ data }) {

  return (
    <div>
      <span>Consultas realizadas: {data}</span>
    </div>
  );
}
