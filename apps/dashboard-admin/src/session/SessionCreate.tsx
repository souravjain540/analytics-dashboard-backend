import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="duration" source="duration" />
        <DateTimeInput label="startTimestamp" source="startTimestamp" />
        <TextInput label="userID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
