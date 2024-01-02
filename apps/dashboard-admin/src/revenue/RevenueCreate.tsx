import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const RevenueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
