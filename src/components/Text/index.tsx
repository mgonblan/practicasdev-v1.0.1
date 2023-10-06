import React from "react";

const sizeClasses = {
  txtIBMPlexSans20: "font-ibmplexsans font-normal",
  txtInterBold24IndigoA400: "font-bold font-inter",
  txtInterBold128: "font-bold font-inter",
  txtInterBold1538: "font-bold font-inter",
  txtInterBold1258: "font-bold font-inter",
  txtInterBold1512: "font-bold font-inter",
  txtInterMedium1162: "font-inter font-medium",
  txtInterMedium1181: "font-inter font-medium",
  txtIBMPlexSans12BlueA700: "font-ibmplexsans font-normal",
  txtInterLight3417: "font-inter font-light",
  txtInterBold24: "font-bold font-inter",
  txtInterBold1575: "font-bold font-inter",
  txtInterBlack15: "font-black font-inter",
  txtInterBlack1512: "font-black font-inter",
  txtInterBold2362: "font-bold font-inter",
  txtInterMedium2344: "font-inter font-medium",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterRegular1356: "font-inter font-normal",
  txtInterRegular1378: "font-inter font-normal",
  txtInterBlack16: "font-black font-inter",
  txtInterRegular1162: "font-inter font-normal",
  txtInterBold155: "font-bold font-inter",
  txtIBMPlexSans12: "font-ibmplexsans font-normal",
  txtInterBold1525: "font-bold font-inter",
  txtInterRegular1181: "font-inter font-normal",
  txtInterMedium12: "font-inter font-medium",
  txtInterBold1588: "font-bold font-inter",
  txtInterBold15: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterBold32: "font-bold font-inter",
  txtInterBold1562: "font-bold font-inter",
  txtIBMPlexSans16: "font-ibmplexsans font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtIBMPlexSans14: "font-ibmplexsans font-normal",
  txtInterBlack1525: "font-black font-inter",
  txtInterMedium3445: "font-inter font-medium",
  txtInterMedium1144: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular1144: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtIBMPlexSansSmBld14: "font-ibmplexsans font-semibold",
  txtInterRegular1389: "font-inter font-normal",
  txtInterBlack1588: "font-black font-inter",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
