import { Paper, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "./components/form/FormInputText";

interface IFormInput {
  nameValue: string;
  emailValue: string;
}

const defaultValues = {
  nameValue: "",
  emailValue: ""
};

function App() {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, control } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          style={{
            display: "grid",
            gridRowGap: "20px",
            padding: "20px",
            margin: "10px 300px",
          }}
        >
          <Typography variant="h6">Form</Typography>

          <FormInputText name="nameValue" control={control} label="Name" rules={{ required: true }} />
          <FormInputText name="emailValue" control={control} label="Email" rules={{ required: true }} />

          <Button type="submit" variant={"contained"}>
            Submit
          </Button>
        </Paper>
      </form>
    </div >
  );
}

export default App;
