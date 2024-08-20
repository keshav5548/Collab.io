import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";
import { executeCode } from "./IDE-API/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const runCode = async () => {
    console.log("Editor Ref:", editorRef); // Check the output in the console
    const sourceCode = editorRef?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
      setOpenSnackbar(false);
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box width="50%">
      <Typography variant="h6" gutterBottom>
        Output
      </Typography>
      <Button
        variant="outlined"
        color="success"
        sx={{ marginBottom: 2 }}
        onClick={runCode}
        disabled={isLoading}
        startIcon={isLoading && <CircularProgress size={16} />}
      >
        Run Code
      </Button>

      <Box
        sx={{
          height: "75vh",
          padding: 2,
          border: "1px solid",
          borderRadius: 1,
          borderColor: isError ? "error.main" : "grey.800",
          color: isError ? "error.main" : "inherit",
          overflowY: "auto",
        }}
      >
        {output
          ? output.map((line, i) => <Typography key={i}>{line}</Typography>)
          : 'Click "Run Code" to see the output here'}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          An error occurred. Unable to run code.
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default Output;
