import * as React from 'react';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';

const staticDateAdapter = new DateFnsAdapter({ locale: ruLocale });

export default function UsingDateAdapterProp() {
  const [locale] = React.useState(deLocale);
  const [selectedDate, handleDateChange] = React.useState(new Date());

  const memoizedDateAdapter = React.useMemo(() => {
    return new DateFnsAdapter({ locale });
  }, [locale]);

  return (
    <React.Fragment>
      <DatePicker
        renderInput={props => <TextField {...props} />}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        dateAdapter={staticDateAdapter}
      />

      <DatePicker
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        dateAdapter={memoizedDateAdapter}
        renderInput={props => (
          <TextField helperText="In case you need to generate adapter from state" {...props} />
        )}
      />
    </React.Fragment>
  );
}
