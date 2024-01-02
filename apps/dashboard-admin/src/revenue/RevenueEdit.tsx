import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const RevenueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
