import { format, parseISO, isValid } from 'date-fns'

export const mergeDateAndTime = (date, time) => {
  if (!isValid(date) || !isValid(time)) return null

  const dateStr = format(date, 'yyyy-MM-dd')
  const timeStr = format(time, 'HH:mm:ss')

  // return parseISO(`${dateStr}T${timeStr}`).getTime();
  return parseISO(`${dateStr}T${timeStr}`)
}

export const getFormErrors = formData => {
  const { title, body, choices, startDate, startTime, endDate, endTime, snapshot } = formData
  const errors = {}

  if (!title) {
    errors.title = 'Title is required'
  }

  if (body === '<p><br></p>' || body === '<h1><br></h1>' || body === '<h2><br></h2>') {
    errors.body = 'Body is required'
  }

  if (choices.some(choice => choice.length === 0)) {
    errors.choices = 'Choices must not be empty'
  }

  const startDateTimestamp = mergeDateAndTime(startDate, startTime)
  const endDateTimestamp = mergeDateAndTime(endDate, endTime)

  if (endDateTimestamp < startDateTimestamp) {
    errors.endDate = Array.isArray(errors.endDate)
      ? [...errors.endDate, 'End date must be after the start date']
      : (errors.endDate = 'End date must be after the start date')
  }
  if (isValid(startDateTimestamp) && isValid(endDateTimestamp)) {
    if (endDateTimestamp === startDateTimestamp) errors.endDate = 'End date must be after the start date'
  }

  return errors
}
