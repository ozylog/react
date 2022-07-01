export function isRequired(value: any) {
  return value ? undefined : 'Required';
}

export function isValidNumber(value: any) {
  return value && !isNaN(value) ? undefined : 'Must be a number';
}

export function isValidDate(value: any) {
  return value && /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(value)
    ? undefined
    : 'Must be a valid time format eg YYYY-MM-DD';
}
