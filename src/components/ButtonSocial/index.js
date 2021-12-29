import './ButtonSocial.css'
import PropTypes from 'prop-types'

const ButtonSocial = ({ label = 'btn-label', type = 'spotify' }) => {
  return (
    <div className={'btn-wrapper'}>
      <div className={'btn-content'}>
        <i
          className={`icon-${type}`}
          aria-hidden="true"
          title="Listen on Spotify"></i>
        <label>{label}</label>
      </div>
    </div>
  )
}

ButtonSocial.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default ButtonSocial
