import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomeHeader from "components/HomeHeader";
import HomeProduct from "components/HomeProduct";
import HomeSearch from "components/HomeSearch";
import HomeSlot1 from "components/HomeSlot1";

import { CloseSVG } from "../../assets/images";

const Home1Page: React.FC = () => {
  const [searchinputvalue, setSearchinputvalue] = React.useState<string>("");
  const [buttonvalue, setButtonvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[88px] items-center justify-end mx-auto w-auto sm:w-full md:w-full">
        <div className="sm:h-[14768px] h-[3523px] md:h-[8318px] md:px-5 relative w-full">
          <div className="absolute bg-white-A700 h-[800px] left-[1%] top-[0] w-[89%]"></div>
          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[78px] inset-x-[0] items-center justify-start max-w-[1568px] mx-auto w-full">
            <div className="flex flex-col gap-[35.2px] h-[2438px] md:h-auto items-center justify-between w-full">
              <div className="flex flex-col gap-9 h-[201px] md:h-auto items-center justify-between w-full">
                <div className="flex flex-col gap-[7px] h-[101px] md:h-auto items-center justify-between w-full">
                  <Text
                    className="sm:text-[30.450000000000003px] md:text-[32.45px] text-[34.45px] text-center text-gray-900 w-full"
                    size="txtInterMedium3445"
                  >
                    Compra y vende artículos de segunda mano en Cholloexpress
                  </Text>
                  <Text
                    className="sm:text-[30.17px] md:text-[32.17px] text-[34.17px] text-center text-gray-900 w-full"
                    size="txtInterLight3417"
                  >
                    una comunidad que lleva años generando impacto del bueno
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-ibmplexsans md:gap-10 h-16 md:h-auto items-center justify-between w-full">
                  <HomeSearch className="h-16 md:h-auto pl-4 py-[13px] relative w-full" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-full w-12"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Line className="bg-gradient  h-[122px] md:h-px md:w-full w-px" />
                <List
                  className="flex sm:flex-col flex-row gap-[165px] overflow-auto w-[97%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col h-[122px] md:h-auto items-center justify-between pl-[45px] pr-[45.86px] md:px-10 sm:px-5 py-4 w-[161px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_allsvg.svg"
                      alt="allsvg"
                    />
                    <Text
                      className="leading-[21.00px] text-center text-gray-900 text-sm"
                      size="txtInterRegular14"
                    >
                      <>
                        Todas las                        
                        categorías
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col h-[122px] md:h-auto items-center justify-between pb-[37px] pl-[55.07px] pr-[55.93px] pt-4 md:px-10 sm:px-5 w-[161px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-[13.89px] text-center text-gray-900 w-full"
                      size="txtInterRegular1389"
                    >
                      Coches
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 h-[122px] md:h-auto items-center justify-between pb-[37px] pl-[60.07px] pr-[59.93px] pt-[29px] md:px-10 sm:px-5 w-[161px]">
                    <Img
                      className="h-[23px] w-[33px]"
                      src="images/img_categorymotorbikesvg.svg"
                      alt="categorymotorbi"
                    />
                    <Text
                      className="text-[13.56px] text-center text-gray-900 w-full"
                      size="txtInterRegular1356"
                    >
                      Motos
                    </Text>
                  </div>
                  <div className="flex flex-col h-[122px] md:h-auto items-center justify-between pl-[44.07px] pr-[44.93px] md:px-10 sm:px-5 py-4 w-[161px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_categorymotoraccessoriessvg.svg"
                      alt="categorymotorac"
                    />
                    <Text
                      className="leading-[21.00px] text-[13.78px] text-center text-gray-900"
                      size="txtInterRegular1378"
                    >
                      <>
                        Motor y<br />
                        Accesorios
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col h-[122px] md:h-auto items-center justify-between pl-[44.07px] pr-[44.93px] md:px-10 sm:px-5 py-4 w-[161px]">
                    <div className="overflow-x-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                          <Img
                            className="h-12 w-12"
                            src="images/img_categoryfashio.svg"
                            alt="categoryfashio"
                          />
                          <Img
                            className="h-12 w-12"
                            src="images/img_categorycellph.svg"
                            alt="categorycellph"
                          />
                        </div>
                        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                          <Text
                            className="leading-[21.00px] text-[13.78px] text-center text-gray-900"
                            size="txtInterRegular1378"
                          >
                            <>
                              Moda y<br />
                              Accesorios
                            </>
                          </Text>
                          <Text
                            className="leading-[21.00px] text-center text-gray-900 text-sm"
                            size="txtInterRegular14"
                          >
                            <>
                              Móviles y<br />
                              Telefonía
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 h-[122px] md:h-auto items-center justify-between pb-[37px] pl-[27px] pr-[25.86px] sm:px-5 w-px">
                    <Img
                      className="h-12 md:h-auto object-cover"
                      src="images/img_icontelevision.png"
                      alt="icontelevision"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      TV, Audio y Foto
                    </Text>
                  </div>
                  <div className="h-[122px] w-[1%]"></div>
                </List>
              </div>
              <List
                className="flex flex-col gap-[103px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 h-[383px] md:h-auto items-start justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl w-[285px]"
                    size="txtInterBold24"
                  >
                    Lo mejor, al mejor precio
                  </Text>
                  <div className="flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-center justify-evenly w-full">
                    <HomeProduct
                      className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-[360px]"
                      userimage="images/img_image.png"
                      userimage1="images/img_image.png"
                      arrowrighticon="images/img_arrowright.svg"
                      arrowrighticon1="images/img_arrowright.svg"
                    />
                    <HomeProduct
                      className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-[360px]"
                      userimage="images/img_image.png"
                      userimage1="images/img_image.png"
                      arrowrighticon="images/img_arrowright.svg"
                      arrowrighticon1="images/img_arrowright.svg"
                    />
                    <HomeProduct
                      className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-[360px]"
                      userimage="images/img_image.png"
                      userimage1="images/img_image.png"
                      arrowrighticon="images/img_arrowright.svg"
                      arrowrighticon1="images/img_arrowright.svg"
                    />
                    <HomeProduct
                      className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-[360px]"
                      userimage="images/img_image.png"
                      userimage1="images/img_image.png"
                      arrowrighticon="images/img_arrowright.svg"
                      arrowrighticon1="images/img_arrowright.svg"
                    />
                    <HomeProduct className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start overflow-auto w-32" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 h-[401px] md:h-auto items-start justify-between w-full">
                  <Text
                    className="sm:text-[19.63px] md:text-[21.63px] text-[23.63px] text-blue_gray-900_01 w-[286px]"
                    size="txtInterBold2362"
                  >
                    A mucha gente le gustan
                  </Text>
                  <div className="flex flex-col font-ibmplexsans items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 h-[318px] md:h-auto items-center justify-between w-auto md:w-full">
                      <HomeProduct
                        className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-full"
                        userimage="images/img_image.png"
                        userimage1="images/img_image.png"
                        arrowrighticon="images/img_arrowright.svg"
                        arrowrighticon1="images/img_arrowright.svg"
                      />
                      <HomeProduct
                        className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-full"
                        userimage="images/img_image.png"
                        userimage1="images/img_image.png"
                        arrowrighticon="images/img_arrowright.svg"
                        arrowrighticon1="images/img_arrowright.svg"
                      />
                      <HomeProduct
                        className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start w-full"
                        userimage="images/img_image.png"
                        userimage1="images/img_image.png"
                        arrowrighticon="images/img_arrowright.svg"
                        arrowrighticon1="images/img_arrowright.svg"
                      />
                      <HomeProduct
                        className="bg-gray-100 border border-gray-400 border-solid sm:h-[316px] h-[318px] md:h-[506px] relative w-full"
                        userimage="images/img_image.png"
                        userimage1="images/img_image.png"
                        arrowrighticon="images/img_arrowright.svg"
                        arrowrighticon1="images/img_arrowright.svg"
                      />
                      <HomeProduct className="bg-gray-100 border border-gray-400 border-solid flex flex-col items-start justify-start overflow-auto w-full" />
                    </div>
                  </div>
                </div>
              </List>
              <List
                className="flex flex-col gap-[34px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[21.85px] items-start justify-start my-0 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtInterBold32"
                  >
                    Prepárate para el Otoño
                  </Text>
                  <div className="flex md:flex-col flex-row font-ibmplexsans md:gap-10 items-center justify-between w-full">
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[21.85px] items-start justify-start my-0 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtInterBold32"
                  >
                    Prepárate para el Otoño
                  </Text>
                  <div className="flex md:flex-col flex-row font-ibmplexsans md:gap-10 items-center justify-between w-full">
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                    <HomeSlot1 className="bg-blue-50 flex flex-col items-start justify-start w-[142px]" />
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[53.51px] h-[357px] md:h-auto items-center justify-between w-full">
                <div className="bg-indigo-A400 flex flex-1 flex-col gap-4 h-full items-center justify-between pb-4 pt-8 px-4 rounded-[16px] w-full">
                  <Img
                    className="h-[147px] w-[752px]"
                    src="images/img_divtextcenter.svg"
                    alt="divtextcenter"
                  />
                  <div className="flex flex-col items-center justify-start p-2">
                    <div className="bg-white-A700 flex flex-col gap-2 items-center justify-between p-4 rounded-[16px] w-[467px] sm:w-full">
                      <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px]">
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
                          size="txtInterBold24IndigoA400"
                        >
                          Cholloexpress PRO
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtInterRegular16"
                        >
                          ¿Tienes un negocio y quieres empezar a vender online?
                        </Text>
                      </div>
                      <Button className="bg-indigo-A400 cursor-pointer font-bold min-w-[435px] sm:min-w-full py-2.5 rounded-[20px] text-[15.63px] text-center text-white-A700">
                        Más información
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:h-[357px] h-full pl-6 md:pr-10 pr-[272px] sm:px-5 py-6 relative w-full">
                  <div className="flex h-[333px] md:h-[357px] justify-end m-auto w-full">
                    <div className="bg-teal-A700 h-[357px] mt-auto mx-auto rounded-[16px] w-full"></div>
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[3%] w-[31%]">
                      <div className="flex flex-col items-center justify-between mb-[55px] mt-6 w-[238px]">
                        <div className="flex flex-col items-start justify-start pb-6 sm:pr-5 pr-6 w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[32.00px] sm:text-[19.44px] md:text-[21.44px] text-[23.44px] text-white-A700"
                              size="txtInterMedium2344"
                            >
                              <>
                                ¿Quieres la app?
                                <br />
                                Descárgala ahora
                              </>
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[140px] w-[140px]"
                          src="images/img_qrdownloadappsvg.svg"
                          alt="qrdownloadappsv"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[32%]">
                    <div className="flex flex-col gap-6 items-center justify-start pb-[9px] w-full">
                      <div className="flex flex-col items-center justify-start py-[82px] w-full">
                        <div className="flex flex-col items-center justify-start mb-[58px] w-full">
                          <Img
                            className="h-[22px] md:h-auto object-cover w-full"
                            src="images/img_phonesavif.png"
                            alt="phonesavif"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <List
                          className="sm:flex-col flex-row gap-4 grid grid-cols-2 justify-center pr-1.5 w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] pb-4 w-full">
                            <Img
                              className="h-[11px]"
                              src="images/img_map.svg"
                              alt="map"
                            />
                            <div className="flex flex-row gap-2 items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-5">
                                <Text
                                  className="text-[12.8px] text-white-A700"
                                  size="txtInterBold128"
                                >
                                  4.8
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[13%]">
                                <Img
                                  className="h-[17px]"
                                  src="images/img_newappleiconsvg.svg"
                                  alt="newappleiconsvg"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-[3px]">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtInterRegular14WhiteA700"
                                >
                                  AppStore
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start sm:ml-[0] pb-4 w-full">
                            <Img
                              className="h-[11px]"
                              src="images/img_map.svg"
                              alt="map"
                            />
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="h-[19px] text-[12.58px] text-white-A700"
                                  size="txtInterBold1258"
                                >
                                  4.7
                                </Text>
                              </div>
                              <Img
                                className="h-4 mt-[3px] w-4"
                                src="images/img_newplaystoreiconsvg.svg"
                                alt="newplaystoreico"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtInterRegular14WhiteA700"
                                >
                                  PlayStore
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col gap-9 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-10 grid-cols-[repeat(20,minmax(0,1fr))] justify-center md:pr-10 sm:pr-5 pr-[52px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-start justify-start mb-[304px] sm:ml-[0] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[94%] md:w-full">
                      <Text
                        className="text-[15.38px] text-blue_gray-900"
                        size="txtInterBold1538"
                      >
                        Coches
                      </Text>
                      <div className="flex flex-row items-center justify-start w-[84%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Furgonetas,
                        </Text>
                        <Text
                          className="ml-[29px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Diesel,
                        </Text>
                        <Text
                          className="ml-[19px] text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Eléctricos,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[23px] items-center justify-start w-4/5 md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Audi A5,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          BMW X5,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Chevrolet,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[93%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Citroen Xsara,
                        </Text>
                        <Text
                          className="ml-8 text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Fiat Coupe,
                        </Text>
                        <Text
                          className="ml-[29px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Ford,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Ford Fiesta,
                        </Text>
                        <Text
                          className="ml-7 text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Hyundai Getz,
                        </Text>
                        <Text
                          className="ml-9 text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Jeep,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[91%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Lada Niva,
                        </Text>
                        <Text
                          className="ml-[26px] text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Mazda,
                        </Text>
                        <Text
                          className="ml-[19px] text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Mercedes Vito,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[45px] items-center justify-start w-[77%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Mitsubishi Montero,
                        </Text>
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Nissan,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[37px] items-center justify-start w-[77%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Nissan Qashqai,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Opel Corsa,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[66%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Peugeot 3008,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Porsche,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[33px] items-center justify-start w-[76%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Renault Clio,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Renault Scenic,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] items-center justify-start w-[58%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Renault Trafic,
                        </Text>
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          SEAT,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] items-center justify-start w-[62%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          SEAT Cordoba,
                        </Text>
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Smart,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-start w-[81%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Suzuki Samurai,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Suzuki Vitara,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[22px] items-center justify-start w-[54%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Toyota,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Volkswagen,
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Volkswagen Passat,
                        </Text>
                        <Text
                          className="ml-[46px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Volvo,
                        </Text>
                        <Text
                          className="ml-[18px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Camión
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[109px] sm:ml-[0] sm:mt-0 mt-[346px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="text-[15.13px] text-blue_gray-900"
                        size="txtInterBold1512"
                      >
                        Motos
                      </Text>
                      <div className="flex flex-row gap-8 items-center justify-start mt-1.5 w-[82%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Derbi Senda,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Ducati Monster,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-start mt-1.5 w-[73%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Gas Gas,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Harley Davidson,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start mt-1.5 w-[88%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Moto Honda,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Moto Honda CBR,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[5px] w-[99%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Kawasaki,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Kymco,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Montesa Cota,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Ossa,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Piaggio Zip,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Rieju,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Suzuki,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start mt-1.5 w-[63%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Vespa,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Yamaha T-MAX,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-8 items-start justify-start mt-1 w-4/5 md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Yamaha Jog,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Yamaha Aerox
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[541px] pr-[3px] pt-[3px] w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[95%] md:w-full">
                      <Text
                        className="text-[15.38px] text-blue_gray-900"
                        size="txtInterBold1538"
                      >
                        Motor y Accesorios
                      </Text>
                      <div className="flex flex-row gap-[35px] items-center justify-start w-4/5 md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Moto de agua,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Baúl moto,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Supermotard,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Pit bike,
                        </Text>
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Llantas,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-8 items-center justify-start w-[68%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Llantas Audi,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Buggies
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[520px] sm:ml-[0] pr-[3px] pt-[3px] w-full">
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                      <Text
                        className="text-[15.5px] text-blue_gray-900"
                        size="txtInterBold155"
                      >
                        Moda y Accesorios
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-1 w-[83%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Zapatillas,
                        </Text>
                        <Text
                          className="ml-[25px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Anillo,
                        </Text>
                        <Text
                          className="ml-[18px] text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Camisetas,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[23px] items-center justify-start mt-1.5 w-[69%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Vestido,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Vestido de fiesta,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Vestido de novia,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Mochila,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Ropa,
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[92%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Pantalones,
                        </Text>
                        <Text
                          className="ml-[29px] text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Zapatos,
                        </Text>
                        <Text
                          className="ml-[22px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Sandalias
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[411px] sm:ml-[0] sm:mt-0 mt-[130px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtInterBold16"
                      >
                        Inmobiliaria
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Piso,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Oficinas,
                        </Text>
                        <Text
                          className="text-[11.44px] text-blue_gray-500"
                          size="txtInterRegular1144"
                        >
                          Casas,
                        </Text>
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Traspaso,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[33px] items-center justify-start w-[88%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Traspaso Bar,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Compartir piso,
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Parcela
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[281px] sm:ml-[0] sm:mt-0 mt-[239px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="text-[15.75px] text-blue_gray-900"
                        size="txtInterBold1575"
                      >
                        TV, Audio y Foto
                      </Text>
                      <div className="flex flex-row gap-[38px] items-center justify-start mt-1 w-[89%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Samsung Gear,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Altavoces,
                        </Text>
                      </div>
                      <Text
                        className="mt-1.5 text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Cámara de fotos,
                      </Text>
                      <Text
                        className="mt-[7px] text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Cámara de fotos reflex,
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Equipo de música,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Proyector
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[194px] sm:ml-[0] sm:mt-0 mt-[369px] pr-[3px] pt-[3px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[94%] md:w-full">
                      <Text
                        className="text-[15.5px] text-blue_gray-900"
                        size="txtInterBold155"
                      >
                        Móviles y Telefonía
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Galaxy,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Huawei,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Iphone,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Xiaomi,
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Iphone 12
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[457px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtInterBold16"
                      >
                        Informática y Electrónica
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-1 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Pantalla de ordenador,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Impresora,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-9 items-center justify-start mt-1.5 w-[73%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Tarjeta gráfica,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          MacBook,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[33px] items-center justify-start mt-[5px] w-[76%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          MacBook Pro,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          MacBook air,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-start mt-1.5 w-[73%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Apple watch,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          GoPro Hero,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[29px] items-start justify-start mt-1 w-[57%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Pulsómetro,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Garmin
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[563px] sm:ml-[0] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtInterBold16"
                      >
                        Deporte y Ocio
                      </Text>
                      <div className="flex flex-row gap-[37px] items-center justify-between mt-1 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Caña de pescar,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Botas de fútbol,
                        </Text>
                      </div>
                      <Text
                        className="mt-[7px] text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Piragua
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[433px] sm:ml-[0] sm:mt-0 mt-[87px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[88%] md:w-full">
                      <Text
                        className="text-[15.25px] text-blue_gray-900"
                        size="txtInterBold1525"
                      >
                        Bicicletas
                      </Text>
                      <div className="flex flex-row gap-[33px] items-center justify-start w-[86%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Bicicleta Scott,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bicicleta Trek,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[29px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bicicleta Bh,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bicicleta Bmx,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bicicleta de paseo,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bicicleta Fixie,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[37px] items-start justify-between w-[97%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Rodillo Bkool,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Ruedas de bicicleta
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[238px] sm:ml-[0] sm:mt-0 mt-[217px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[88%] md:w-full">
                      <Text
                        className="text-[15.75px] text-blue_gray-900"
                        size="txtInterBold1575"
                      >
                        Consolas y Videojuegos
                      </Text>
                      <div className="flex flex-row gap-[39px] items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Nintendo Switch,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Nintendo 3DS,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[37px] items-center justify-start w-[95%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          PlayStation Vita,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          PlayStation 4,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[39px] items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          PlayStation 4 pro,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          PlayStation 3,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[72%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Xbox,
                        </Text>
                        <Text
                          className="ml-[18px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Xbox one,
                        </Text>
                        <Text
                          className="ml-[27px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Wii,
                        </Text>
                      </div>
                      <Text
                        className="text-[11.81px] text-blue_gray-500"
                        size="txtInterRegular1181"
                      >
                        Mandos PlayStation 4,
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Maquina recreativa,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Game boy,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[13px] items-center justify-start w-[51%] md:w-full">
                        <Text
                          className="text-[11.44px] text-blue_gray-500"
                          size="txtInterRegular1144"
                        >
                          PSP,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          PlayStation 5
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[21px] sm:ml-[0] sm:mt-0 mt-[413px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                      <Text
                        className="text-[15.88px] text-blue_gray-900"
                        size="txtInterBold1588"
                      >
                        Hogar y Jardín
                      </Text>
                      <div className="flex flex-row gap-8 items-center justify-start mt-1 w-[83%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Mueble Ikea,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Mueble de cocina,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[47px] items-center justify-start mt-1.5 w-[85%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Caseta prefabricada,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Acuario,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cuadro,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Armario,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cómoda,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cama,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start mt-1.5 w-3/5 md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cama nido,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Zapatero,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[5px] w-[95%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Jacuzzi exterior,
                        </Text>
                        <Text
                          className="ml-[35px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Espejo,
                        </Text>
                        <Text
                          className="ml-[21px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Canape,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-1.5 w-[54%] md:w-full">
                        <Text
                          className="text-[11.44px] text-blue_gray-500"
                          size="txtInterRegular1144"
                        >
                          Mesa,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Mesa comedor,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-start mt-1.5 w-[70%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Mesa extensible,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Butaca,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-7 items-center justify-start mt-[5px] w-[59%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Colchones,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Lámparas
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[477px] sm:ml-[0] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[91%] md:w-full">
                      <Text
                        className="text-[15.5px] text-blue_gray-900"
                        size="txtInterBold155"
                      >
                        Electrodomésticos
                      </Text>
                      <div className="flex flex-row gap-[39px] items-center justify-start w-[91%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Termo eléctrico,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Estufa de leña,
                        </Text>
                      </div>
                      <Text
                        className="text-[11.81px] text-blue_gray-500"
                        size="txtInterRegular1181"
                      >
                        Estufa de pellets,
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Campana extractora,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Lavavajillas,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Congelador,
                        </Text>
                        <Text
                          className="ml-[33px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Nevera,
                        </Text>
                        <Text
                          className="ml-[19px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Lavadora,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-start w-[64%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Secadora,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Thermomix,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[41px] items-start justify-start w-[73%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Robot de cocina,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Horno
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[325px] sm:ml-[0] sm:mt-0 mt-[173px] pr-[3px] pt-[3px] w-full">
                    <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                      <Text
                        className="text-[15.63px] text-blue_gray-900"
                        size="txtInterBold1562"
                      >
                        Cine, Libros y Música
                      </Text>
                      <div className="flex flex-row gap-[19px] items-center justify-start mt-1.5 w-[63%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Libros,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Libros Uned,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between mt-[5px] w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Libros infantiles,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Libros inglés,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Vinilos,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cómics,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Amplificador,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-start mt-1.5 w-[56%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Clarinete,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Piano,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-11 items-start justify-start mt-1 w-[91%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Batería electrónica,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Violín
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[108px] sm:ml-[0] sm:mt-0 mt-[325px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[87%] md:w-full">
                      <Text
                        className="text-[15.75px] text-blue_gray-900"
                        size="txtInterBold1575"
                      >
                        Niños y Bebés
                      </Text>
                      <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Muñeca,
                        </Text>
                        <Text
                          className="ml-[22px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Funko Pop,
                        </Text>
                        <Text
                          className="ml-[29px] text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Columpio,
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Casa de muñecas,
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Carrito Bugaboo,
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Bañera cambiador,
                      </Text>
                      <div className="flex flex-row gap-[42px] items-center justify-start w-[86%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Capota Bugaboo,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          MaxiCosi,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Juguetes,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Trona,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cambiador bebé,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] items-center justify-start w-[74%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cuna de viaje,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Minicuna,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[37px] items-start justify-start w-[88%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Bebés Llorones,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Bebé Reborn
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[520px] sm:ml-[0] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[89%] md:w-full">
                      <Text
                        className="text-[15.75px] text-blue_gray-900"
                        size="txtInterBold1575"
                      >
                        Coleccionismo
                      </Text>
                      <div className="flex flex-row gap-[25px] items-center justify-start w-[94%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Monedas,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Figuras de Lladró,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Monedas de plata,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Chapas,
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Chapas para tejado,
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Teléfono antiguo
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[346px] sm:ml-[0] sm:mt-0 mt-[130px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[90%] md:w-full">
                      <Text
                        className="text-[15.75px] text-blue_gray-900"
                        size="txtInterBold1575"
                      >
                        Construcción y Reformas
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Hormigonera,
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Hormigonera eléctrica,
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Puertas de madera,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Herramientas,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[63%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Compresor,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Lijadora,
                        </Text>
                      </div>
                      <Text
                        className="text-[11.81px] text-blue_gray-500"
                        size="txtInterRegular1181"
                      >
                        Puertas de madera exteriores,
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Soplador
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[281px] sm:ml-[0] sm:mt-0 mt-[304px] pr-0.5 pt-0.5 w-full">
                    <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
                      <Text
                        className="text-[15.88px] text-blue_gray-900"
                        size="txtInterBold1588"
                      >
                        Industria y Agricultura
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Cámara frigorífica,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Retroexcavadora
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[129px] sm:ml-[0] sm:mt-0 mt-[369px] w-full">
                    <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                      <Text
                        className="text-[15px] text-blue_gray-900"
                        size="txtInterBold15"
                      >
                        Servicios
                      </Text>
                      <div className="flex flex-row gap-[25px] items-center justify-start mt-2 w-[61%] md:w-full">
                        <Text
                          className="text-[11.44px] text-blue_gray-500"
                          size="txtInterRegular1144"
                        >
                          Masajista,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Limpieza,
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-1.5 w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Limpieza de hogar,
                        </Text>
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Transporte,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[27px] items-center justify-start mt-1.5 w-[59%] md:w-full">
                        <Text
                          className="text-[11.81px] text-blue_gray-500"
                          size="txtInterRegular1181"
                        >
                          Mudanzas,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Niñera,
                        </Text>
                      </div>
                      <Text
                        className="mt-[7px] text-[11.81px] text-blue_gray-500"
                        size="txtInterRegular1181"
                      >
                        Clases particulares,
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[5px] w-[97%] md:w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Montaje de muebles,
                        </Text>
                        <Text
                          className="text-[11.44px] text-blue_gray-500"
                          size="txtInterRegular1144"
                        >
                          Masajes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[521px] w-full">
                    <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                      <Text
                        className="text-[15.5px] text-blue_gray-900"
                        size="txtInterBold155"
                      >
                        Otros
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[7px] w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Máquina de coser,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Playmobil,
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-start justify-start mt-1 w-[69%] md:w-full">
                        <Text
                          className="text-[11.63px] text-blue_gray-500"
                          size="txtInterRegular1162"
                        >
                          Maleta,
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          Mesa de billar
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-2/5 md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15.63px] text-blue_gray-900"
                        size="txtInterBold1562"
                      >
                        Ciudades
                      </Text>
                      <List
                        className="flex flex-col gap-px items-center mt-0.5 w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Madrid,
                            </Text>
                          </div>
                          <div className="flex relative w-[28%] sm:w-full">
                            <div className="flex flex-col items-start justify-end my-auto pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Barcelona,
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-end ml-[-2px] my-auto pr-0.5 py-0.5 z-[1]">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Valencia,
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Sevilla,
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Zaragoza,
                            </Text>
                          </div>
                          <div className="flex relative w-[26%] sm:w-full">
                            <div className="flex flex-col items-start justify-end my-auto pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Málaga,
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-end ml-[-1px] my-auto pr-0.5 py-0.5 z-[1]">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Valladolid,
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Alicante,
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-[99%] md:w-full">
                          <div className="flex relative w-[24%] sm:w-full">
                            <div className="flex flex-col items-start justify-end my-auto pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Bilbao,
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-end ml-[-0.06px] my-auto pr-[3px] py-[3px] z-[1]">
                              <Text
                                className="text-[11.63px] text-blue_gray-500"
                                size="txtInterRegular1162"
                              >
                                Móstoles,
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Alcalá de Henares,
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Granada,
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Vigo,
                            </Text>
                          </div>
                          <div className="flex relative w-[22%] sm:w-full">
                            <div className="flex flex-col items-start justify-end my-auto pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Burgos,
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-end ml-[-1px] my-auto pr-[3px] py-[3px] z-[1]">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Getafe,
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Gijón,
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex relative w-[91%] sm:w-full">
                        <div className="sm:h-16 md:h-[22px] h-[43px] my-auto w-[85%] sm:w-full">
                          <div className="sm:h-16 md:h-[22px] h-[43px] m-auto w-full">
                            <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-evenly mx-auto top-[0] w-full">
                              <div className="flex relative w-[66%] sm:w-full">
                                <div className="flex my-auto w-4/5">
                                  <div className="flex flex-col items-center justify-start my-auto w-[66%]">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                                        <Text
                                          className="text-blue_gray-500 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          Córdoba,
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                                        <Text
                                          className="text-[11.81px] text-blue_gray-500"
                                          size="txtInterRegular1181"
                                        >
                                          Leganés,
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-end ml-[-1px] my-auto pr-0.5 py-0.5 z-[1]">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      A Coruña,
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-end ml-[-1px] my-auto pr-0.5 py-0.5 z-[1]">
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    Murcia,
                                  </Text>
                                </div>
                              </div>
                              <div className="flex sm:flex-1 flex-row items-center justify-evenly w-[35%] sm:w-full">
                                <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    Sabadell,
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtInterRegular12"
                                  >
                                    Badalona,
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col items-start justify-end left-[0] pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Palma de Mallorca,
                              </Text>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col items-start justify-end left-[33%] pr-0.5 py-0.5">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                Elche,
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Oviedo,
                            </Text>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col items-start justify-end pr-0.5 py-0.5 right-[20%]">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              Salamanca,
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-[undefinedpx] mr-[88px] mt-auto pr-[3px] py-[3px] z-[1]">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            Santander,
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end ml-[-3.02px] mt-auto pr-0.5 py-0.5 z-[1]">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            Pamplona,
                          </Text>
                        </div>
                      </div>
                      <div className="h-[43px] sm:h-[61px] relative w-[72%] sm:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-start justify-evenly m-auto w-full">
                          <div className="flex flex-col relative w-[52%] sm:w-full">
                            <div className="flex mx-auto w-full">
                              <div className="flex flex-col items-center justify-start my-auto w-[70%]">
                                <div className="flex flex-row items-center justify-evenly w-full">
                                  <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      Tarragona,
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtInterRegular12"
                                    >
                                      Girona,
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-end ml-[-1px] my-auto pr-[3px] py-[3px] z-[1]">
                                <Text
                                  className="text-blue_gray-500 text-xs"
                                  size="txtInterRegular12"
                                >
                                  Almería,
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-end mt-[-1px] pr-[3px] py-[3px] z-[1]">
                              <Text
                                className="text-[11.63px] text-blue_gray-500"
                                size="txtInterRegular1162"
                              >
                                Donostia-San Sebastián,
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              <>L&#39;Hospitalet de Llobregat,</>
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col items-start justify-start pr-[3px] py-[3px] right-[4%]">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            Las Palmas de Gran Canaria
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtInterBold16"
                    >
                      Cholloexpress y la segunda mano
                    </Text>
                    <Text
                      className="leading-[20.00px] mt-[3px] text-blue_gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      <>
                        “Si no lo usas, súbelo”. Bajo esta premisa, Cholloexpress se
                        ha convertido en una comunidad en la que cada día
                        <br />
                        millones de personas compran y venden productos de
                        segunda mano. Y no hemos hecho más que empezar.
                        <br />
                        Comprar segunda mano es la mejor forma de conseguir lo
                        que necesitas a un precio mejor. ¡Pero va mucho más
                        <br />
                        allá! Cada vez que compras algo en Cholloexpress, fomentas un
                        consumo más responsable, porque alargas la vida de
                        <br />
                        los productos y evitas su sobreproducción. Vender
                        segunda mano es decirle al mundo que podemos vivir más
                        con
                        <br />
                        menos. Más espacio en casa, más dinero extra, más nuevas
                        experiencias, más recuerdos inolvidables, más lo que
                        <br />
                        quieras, y menos cosas sin usar guardadas en el armario.
                        Por fin, la sociedad ha comprendido que la segunda
                        <br />
                        mano es una nueva forma de consumir llena de beneficios.
                        Esta es la razón por la que cada vez más personas usan
                        <br />
                        Cholloexpress, la plataforma líder de las páginas de segunda
                        mano y de anuncios clasificados.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <HomeHeader className="absolute bg-white-A700 border-b border-gray-400 border-solid flex md:flex-col flex-row font-ibmplexsans md:gap-5 inset-x-[0] items-center justify-evenly max-w-[1784px] mx-auto top-[0] w-full" />
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-8 items-center justify-center mb-1 w-full">
            <div className="h-[236px] relative w-[68%] md:w-full">
              <div className="absolute md:h-[234px] h-[236px] inset-y-[0] my-auto right-[0] w-[85%] md:w-full">
                <div className="absolute md:h-[234px] h-[236px] inset-y-[0] my-auto right-[0] w-[82%] md:w-full">
                  <div className="absolute md:h-[234px] h-[236px] inset-y-[0] my-auto right-[0] w-[78%] md:w-full">
                    <div className="absolute md:h-[234px] h-[236px] inset-y-[0] my-auto right-[0] w-[72%] sm:w-full">
                      <div className="absolute flex flex-col gap-[7px] h-full inset-y-[0] items-start justify-start my-auto p-[3px] right-[0]">
                        <Text
                          className="ml-3 md:ml-[0] text-base text-gray-900"
                          size="txtInterBlack16"
                        >
                          Cholloexpress PRO
                        </Text>
                        <Text
                          className="mb-[186px] ml-3 md:ml-[0] text-blue_gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Impulsa tu negocio
                        </Text>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-0.5 w-3/5">
                        <Text
                          className="md:ml-[0] ml-[13px] text-[15px] text-gray-900"
                          size="txtInterBlack15"
                        >
                          Motor
                        </Text>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px] mt-0.5 pr-1.5 py-1.5">
                          <Text
                            className="text-[11.63px] text-blue_gray-500"
                            size="txtInterMedium1162"
                          >
                            Particular
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[153px] md:ml-[0] ml-[13px] pr-1.5 py-1.5">
                          <Text
                            className="text-[11.81px] text-blue_gray-500"
                            size="txtInterMedium1181"
                          >
                            Profesional
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-1 w-[43%]">
                      <Text
                        className="md:ml-[0] ml-[11px] text-[15.25px] text-gray-900"
                        size="txtInterBlack1525"
                      >
                        Legal
                      </Text>
                      <div className="flex flex-col items-start justify-end md:ml-[0] ml-[11px] pr-[5px] py-[5px]">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Aviso legal
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] pr-1.5 py-1.5">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Condiciones de uso
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end md:ml-[0] ml-[11px] pr-[5px] py-[5px]">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Política de privacidad
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[95px] md:ml-[0] ml-[11px] pr-1.5 py-1.5">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtInterMedium12"
                        >
                          Cookies
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-1 w-[33%]">
                    <Text
                      className="md:ml-[0] ml-[11px] text-[15.13px] text-gray-900"
                      size="txtInterBlack1512"
                    >
                      Soporte
                    </Text>
                    <div className="flex flex-col items-start justify-end md:ml-[0] ml-[11px] pr-[5px] py-[5px]">
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterMedium12"
                      >
                        Centro de ayuda
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-end md:ml-[0] ml-[11px] pr-[5px] py-[5px]">
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtInterMedium12"
                      >
                        Reglas de publicación
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-end mb-[123px] md:ml-[0] ml-[11px] pr-[5px] py-[5px]">
                      <Text
                        className="text-[11.81px] text-blue_gray-500"
                        size="txtInterMedium1181"
                      >
                        Consejos de seguridad
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-[3px] w-[27%]">
                  <Text
                    className="ml-3 md:ml-[0] text-[15.88px] text-gray-900"
                    size="txtInterBlack1588"
                  >
                    Cholloexpress
                  </Text>
                  <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] pr-1.5 py-1.5">
                    <Text
                      className="text-[11.81px] text-blue_gray-500"
                      size="txtInterMedium1181"
                    >
                      Quiénes somos
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] pr-[5px] py-[5px]">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtInterMedium12"
                    >
                      Cómo funciona
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] pr-1.5 py-1.5">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtInterMedium12"
                    >
                      Brand Book
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] pr-1.5 py-1.5">
                    <Text
                      className="text-[11.44px] text-blue_gray-500"
                      size="txtInterMedium1144"
                    >
                      Prensa
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end ml-3 md:ml-[0] pr-[5px] py-[5px]">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtInterMedium12"
                    >
                      Empleo
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-3 ml-3 md:ml-[0] pr-1.5 py-1.5 w-[91%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="leading-[28.00px] text-[11.81px] text-blue_gray-500"
                        size="txtInterMedium1181"
                      >
                        <>
                          10º aniversario de
                          <br />
                          Cholloexpress
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto md:pr-10 sm:pr-5 pr-[46px] py-[46px]">
                <Text
                  className="leading-[18.00px] mb-[110px] text-[11.81px] text-blue_gray-500"
                  size="txtInterMedium1181"
                >
                  <>
                    Copyright © 2023 Cholloexpress ©<br />
                    de sus respectivos propietarios
                  </>
                </Text>
              </div>
            </div>
            <div className="flex relative w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-auto w-[74%]">
                <div className="flex flex-col items-end justify-end pl-[3px] py-[3px]">
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtInterMedium14"
                  >
                    Apple Store
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start md:ml-[0] ml-[125px]">
                  <Text
                    className="mb-0.5 mt-1.5 text-blue_gray-500 text-sm"
                    size="txtInterMedium14"
                  >
                    AppGallery
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end ml-32 md:ml-[0] p-[3px]">
                  <Text
                    className="md:ml-[0] ml-[33px] mt-1 text-blue_gray-500 text-sm"
                    size="txtInterMedium14"
                  >
                    Google Play
                  </Text>
                </div>
              </div>
              <Img
                className="h-[30px] ml-[-341px] my-auto z-[1]"
                src="images/img_section.svg"
                alt="section"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
