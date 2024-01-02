import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="duration" source="duration" />
        <DateTimeInput label="startTimestamp" source="startTimestamp" />
        <TextInput label="userID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
