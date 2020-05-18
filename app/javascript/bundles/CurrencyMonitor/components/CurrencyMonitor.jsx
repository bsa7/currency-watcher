import PropTypes from 'prop-types'
import React from 'react'

const CurrencyMonitor = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
)

CurrencyMonitor.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
}

export default CurrencyMonitor
