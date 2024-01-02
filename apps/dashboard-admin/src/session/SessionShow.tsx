import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="startTimestamp" source="startTimestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
