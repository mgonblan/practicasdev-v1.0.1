import React from "react";

import { Button, Img, Text } from "components";

type HomeSlot1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "onetext" | "landscapetext"
> &
  Partial<{ onetext: string; landscapetext: string }>;

const HomeSlot1: React.FC<HomeSlot1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="relative w-[61px]">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto w-auto">
            <Button className="bg-white-A700 flex h-8 items-center justify-center p-1 w-8">
              <Img
                className="h-6"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center mt-auto mx-auto relative w-auto">
            <Text
              className="text-base text-blue-A700 text-center w-auto"
              size="txtIBMPlexSans16"
            >
              {props?.onetext}
            </Text>
            <Text
              className="text-blue-A700 text-center text-xs tracking-[0.32px] w-auto"
              size="txtIBMPlexSans12BlueA700"
            >
              {props?.landscapetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomeSlot1.defaultProps = { onetext: "1:1", landscapetext: "Landscape" };

export default HomeSlot1;
