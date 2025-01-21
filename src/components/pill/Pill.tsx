import { HTMLAttributes } from "react";

export const pillSizes = ["sm", "md", "lg"] as const;
export type PillSize = (typeof pillSizes)[number];

export type PillProps = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> & {
  text: string;
  size?: PillSize;
  onClick: () => void;
};

export const Pill = ({ text, size, onClick, ...rest }: PillProps) => {
  let buttonSize;

  switch (size) {
    case "sm":
      buttonSize = "text-sm";
      break;
    case "md":
      buttonSize = "text-base";
      break;
    case "lg":
      buttonSize = "text-lg";
      break;
  }

  return (
    <div
      className={`${buttonSize} inline-flex items-center px-3 py-1 space-x-2 bg-gray-400 rounded-full`}
      {...rest}
    >
      <span>{text}</span>
      {onClick && <button onClick={onClick}>&times;</button>}
    </div>
  );
};

// type Props = {
//   children: React.ReactNode;
//   size: "xs" | "sm" | "md";
// };

// function Pill({ children, size, ...rest }: Props) {
//   // const classes = [BASE_CLASS, `${BSE_CLASS--${size || "md"}}`]

//   let buttonSize;

//   switch (size) {
//     case "xs":
//       buttonSize = "text-xs";
//       break;
//     case "sm":
//       buttonSize = "text-sm";
//       break;
//     case "md":
//       buttonSize = "text-base";
//       break;
//   }

//   return (
//     <div
//       className={`${buttonSize} inline-flex items-center px-3 py-1 space-x-2 bg-gray-400 rounded-full`}
//       {...rest}
//     >
//       <p>{children}</p>

//       <button className="">&times;</button>
//     </div>
//   );
// }

// export default Pill;
