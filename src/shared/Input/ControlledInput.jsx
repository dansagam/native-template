import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import Input from ".";

const ControlledInput = ({
  label,
  name,
  multiline,
  placeholder,
  isNumber,
  isCurrency,
  isFormatted,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      // eslint-disable-next-line no-unused-vars
      render={({ field: { ref, onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          label={label}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          error={!!error?.message}
          helperText={error?.message || ""}
          multiline={multiline}
          placeholder={placeholder}
          isCurrency={isCurrency}
          isNumber={isNumber}
          isFormatted={isFormatted}
        />
      )}
    />
  );
};

ControlledInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  isNumber: PropTypes.bool,
  isCurrency: PropTypes.bool,
  isFormatted: PropTypes.bool,
  control: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
};

ControlledInput.defaultProps = {
  multiline: false,
  label: "",
  placeholder: "",
  isNumber: false,
  isCurrency: false,
  isFormatted: false,
  control: () => {},
};

export default ControlledInput;
