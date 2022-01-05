import './ButtonSocial.css'
import PropTypes from 'prop-types'

const ButtonSocial = ({
  label = 'spotify',
  type = 'spotify',
  url = 'https://oskerwyld.com',
}) => {
  return (
    <div onClick={() => window.open(url)} className={'btn-wrapper'}>
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
  url: PropTypes.string,
}

export default ButtonSocial
