import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({ type, variant, onClick, isLoading, label, Icon, iconPosition }) => {
  return (
    <Button
    fullWidth
    type={type}
      variant={variant}
      onClick={onClick}
      startIcon={Icon && iconPosition === 'start' ? <Icon /> : <></>}
      endIcon={Icon && iconPosition === 'end' ? <Icon /> : <></>}
      >
      {isLoading ? <CircularProgress /> : label || "Submit"}
    </Button>
  );
};

export default CustomButton;
