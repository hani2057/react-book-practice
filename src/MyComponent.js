import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
  return (
    <div> 
      hello, i am {name}! <br/>
      chlidren value is {children}!
      <br/>
      my favorite number is {favoriteNumber}!
    </div>
    )
    
}

MyComponent.defaultProps = {
  name: 'anonymous',
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent;