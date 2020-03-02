import spacetime from 'spacetime';

export const isDateTime = s => spacetime(s).isValid();

// custom prop type
export const DateTimeString = function (props, propName, componentName) {
  const { [propName]: value } = props;
  if (!isDateTime(value)) {
    return new Error(`Invalid ISO String ${propName} supplied to ${componentName}`);
  }
  return null;
};
