import {forwardRef} from "@vhsys-ui/system";
import {CloseFilledIcon} from "@vhsys-ui/shared-icons";
import {useMemo} from "react";

import {UseInputProps, useInput} from "./use-input";

// export interface InputDateProps extends Omit<UseInputProps, "isLabelPlaceholder" | "isMultiline"> {}
export interface InputTimeProps extends Omit<UseInputProps, "isLabelPlaceholder" | "isMultiline"> {
  /**
   * Minimum hour to select
   * @default 3
   */
  minTime?: number;
  /**
   * Maximum hour to select
   * @default 8
   */
  maxTime?: number;
}
const InputTime = forwardRef<"input", InputTimeProps>(
  ({minTime = "00:00", maxTime = "23:59", ...otherProps}, ref) => {
    const {
      Component,
      label,
      description,
      isClearable,
      startContent,
      endContent,
      labelPlacement,
      hasPlaceholder,
      hasHelper,
      isLabelOutside,
      isLabelOutsideAsPlaceholder,
      shouldLabelBeOutside,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getMainWrapperProps,
      getHelperWrapperProps,
      getDescriptionProps,
      getErrorMessageProps,
      getClearButtonProps,
    } = useInput({...otherProps, ref});

    const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

    const end = useMemo(() => {
      if (isClearable) {
        return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
      }

      return endContent;
    }, [isClearable, getClearButtonProps]);

    const helperWrapper = useMemo(() => {
      if (!hasHelper) return null;

      return (
        <div {...getHelperWrapperProps()}>
          {errorMessage ? (
            <div {...getErrorMessageProps()}>{errorMessage}</div>
          ) : description ? (
            <div {...getDescriptionProps()}>{description}</div>
          ) : null}
        </div>
      );
    }, [
      hasHelper,
      errorMessage,
      description,
      getHelperWrapperProps,
      getErrorMessageProps,
      getDescriptionProps,
    ]);

    const innerWrapper = useMemo(() => {
      if (startContent || end) {
        return (
          <div {...getInnerWrapperProps()}>
            {startContent}
            <input {...getInputProps()} max={maxTime} min={minTime} type="time" />
            {end}
          </div>
        );
      }

      return <input {...getInputProps()} max={maxTime} min={minTime} type="time" />;
    }, [startContent, end, getInputProps, getInnerWrapperProps]);

    const mainWrapper = useMemo(() => {
      if (shouldLabelBeOutside) {
        return (
          <div {...getMainWrapperProps()}>
            {labelContent}

            <div {...getInputWrapperProps()}>{innerWrapper}</div>
            {helperWrapper}
          </div>
        );
      }

      return (
        <>
          <div {...getInputWrapperProps()}>
            {labelContent}
            {innerWrapper}
          </div>
          {helperWrapper}
        </>
      );
    }, [
      labelPlacement,
      helperWrapper,
      shouldLabelBeOutside,
      isLabelOutsideAsPlaceholder,
      hasPlaceholder,
      labelContent,
      innerWrapper,
      errorMessage,
      description,
      getMainWrapperProps,
      getInputWrapperProps,
      getErrorMessageProps,
      getDescriptionProps,
    ]);

    return (
      <Component {...getBaseProps()}>
        {isLabelOutside ? labelContent : null}
        {mainWrapper}
      </Component>
    );
  },
);

InputTime.displayName = "VhsysUI.InputTime";

export default InputTime;
