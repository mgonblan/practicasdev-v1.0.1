import React from "react";

import { Button, Img, Text } from "components";

type HomeProductProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleThree"
  | "descriptionThree"
  | "userimage"
  | "userimage1"
  | "arrowrighticon"
  | "arrowrighticon1"
  | "svg"
> &
  Partial<{
    titleThree: string;
    descriptionThree: string;
    userimage: string;
    userimage1: string;
    arrowrighticon: string;
    arrowrighticon1: string;
    svg: string;
  }>;

const HomeProduct: React.FC<HomeProductProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start overflow-auto p-4 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-full"
                    size="txtIBMPlexSans20"
                  >
                    {props?.titleThree}
                  </Text>
                  <Text
                    className="mt-[18px] text-gray-900_01 text-sm tracking-[0.16px] w-full"
                    size="txtIBMPlexSans14"
                  >
                    {props?.descriptionThree}
                  </Text>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[15px] w-full">
                    {!!props?.userimage1 ? (
                      <Img
                        className="md:flex-1 md:h-[158px] sm:h-auto h-full object-cover rounded-[16px] w-[328px] md:w-full"
                        alt="image_Four"
                        src="props?.userimage1"
                      />
                    ) : null}
                    {!!props?.userimage1 ? (
                      <Img
                        className="md:flex-1 md:h-[158px] sm:h-auto h-full object-cover rounded-[16px] w-[328px] md:w-full"
                        alt="image_Four"
                        src="props?.userimage1"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[312px] h-12 md:h-auto items-end justify-end overflow-auto w-full">
              <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-center justify-center p-[3px] w-12">
                {!!props?.arrowrighticon1 ? (
                  <Button className="bg-white-A700 flex h-5 items-center justify-center p-0.5 w-5">
                    <Img alt="arrowright_Four" src="props?.arrowrighticon1" />
                  </Button>
                ) : null}
              </div>
              <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-center justify-center p-[3px] w-12">
                {!!props?.arrowrighticon1 ? (
                  <Button className="bg-white-A700 flex h-5 items-center justify-center p-0.5 w-5">
                    <Img alt="arrowright_Four" src="props?.arrowrighticon1" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end my-auto py-[141px] right-[0] w-[7%] md:w-full">
          {!!props?.svg ? (
            <Img className="h-6 w-6" alt="svg" src="props?.svg" />
          ) : null}
        </div>
      </div>
    </>
  );
};

HomeProduct.defaultProps = {
  titleThree: "Title",
  descriptionThree: "Description",
};

export default HomeProduct;
