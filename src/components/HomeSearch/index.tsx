import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

type HomeSearchProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchtext"
> &
  Partial<{ searchtext: string }>;

const HomeSearch: React.FC<HomeSearchProps> = (props) => {
  const [searchinputvalue, setSearchinputvalue] = React.useState<string>("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-4 md:h-auto items-start justify-start mx-auto w-full">
          <Text
            className="text-blue_gray-700 text-xs tracking-[0.32px] w-auto"
            size="txtIBMPlexSans12"
          >
            {props?.searchtext}
          </Text>
        </div>
        <Input
          name="searchinput"
          placeholder="Placeholder text"
          value={searchinputvalue}
          onChange={(e) => setSearchinputvalue(e)}
          className="font-ibmplexsans p-0 placeholder:text-gray-500 text-gray-500 text-left text-sm tracking-[0.16px] w-full"
          wrapClassName="flex mt-auto mx-auto pr-3 py-3 w-full"
          suffix={
            <div className="h-4 mt-0.5 ml-[35px] w-4 bg-white-A700 top-[23%] left-[7%] p-px flex justify-center items-center">
              {searchinputvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer h-[13px] my-auto"
                  onClick={() => setSearchinputvalue("")}
                  fillColor="#a8a8a8"
                  height={13}
                  width={13}
                  viewBox="0 0 13 13"
                />
              ) : (
                <Img
                  className="cursor-pointer h-[13px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              )}
            </div>
          }
        ></Input>
        <div className="absolute bg-gray-100 border-b border-blue_gray-400 border-solid h-16 inset-[0] justify-center m-auto rounded-[30px] w-full"></div>
      </div>
    </>
  );
};

HomeSearch.defaultProps = { searchtext: "Search" };

export default HomeSearch;
