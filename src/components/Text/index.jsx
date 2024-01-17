import React from "react";

const sizeClasses = {
  txtMitrRegular14: "font-mitr font-normal",
  txtKarmaRegular20: "font-karma font-normal",
  txtMitrBold32: "font-bold font-mitr",
  txtInterRegular20: "font-inter font-normal",
  txtMavenProBold16: "font-bold font-mavenpro",
  txtLivvicRegular16: "font-livvic font-normal",
  txtInterBold20: "font-bold font-inter",
  txtKanitBold20: "font-bold font-kanit",
  txtLusitana13: "font-lusitana font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtKanitBold28: "font-bold font-kanit",
  txtLusitana18: "font-lusitana font-normal",
  txtRoundedMplus1cBold40: "font-bold font-roundedmpluscbold",
  txtKarmaRegular16: "font-karma font-normal",
  txtLustriaRegular18: "font-lustria font-normal",
  txtMitrRegular40WhiteA700: "font-mitr font-normal",
  txtMitrRegular40Bluegray700: "font-mitr font-normal",
  txtMitrRegular48: "font-mitr font-normal",
  txtLustriaRegular24: "font-lustria font-normal",
  txtKokoroRegular24: "font-kokoro font-normal",
  txtMitrExtraLight28: "font-light font-mitr",
  txtRoundedMplus1cBold48: "font-bold font-roundedmpluscbold",
  txtInterMedium16: "font-inter font-medium",
  txtKarmaBold18: "font-bold font-karma",
  txtInterRegular20Black900: "font-inter font-normal",
  txtLivvicBold16: "font-bold font-livvic",
  txtKanitBold32: "font-bold font-kanit",
  txtLucidaSansDemi17: "font-lucidasans font-semibold",
  txtMitrRegular40: "font-mitr font-normal",
  txtLucidaSansDemi15: "font-lucidasans font-semibold",
  txtLiterataRomanMedium16: "font-literata font-medium",
  txtK2DExtraBoldItalic36: "font-extrabold font-kd italic",
  txtMitrRegular36: "font-mitr font-normal",
  txtLilitaOne32: "font-lilitaone font-normal",
  txtMitrRegular32: "font-mitr font-normal",
  txtLustriaRegular32: "font-lustria font-normal",
  txtLusitanaBold20: "font-bold font-lusitana",
  txtMadaSemiBold96: "font-mada font-semibold",
  txtMavenProBold38: "font-bold font-mavenpro",
  txtLilitaOne32WhiteA700: "font-lilitaone font-normal",
  txtMadaSemiBold14: "font-mada font-semibold",
  txtMadaMedium48: "font-mada font-medium",
  txtMitrRegular30: "font-mitr font-normal",
  txtLucidaSansDemi48: "font-lucidasans font-semibold",
  txtMitrRegular30Black900: "font-mitr font-normal",
  txtMavenProBold20: "font-bold font-mavenpro",
  txtMitrRegular24: "font-mitr font-normal",
  txtMitrRegular20: "font-mitr font-normal",
  txtLivvicSemiBold16: "font-livvic font-semibold",
  txtInterBold20Gray80002: "font-bold font-inter",
  txtMitrRegular30Lightgreen900: "font-mitr font-normal",
  txtMitrRegular28: "font-mitr font-normal",
  txtLivvicBold32: "font-bold font-livvic",
  txtNokoraBold36: "font-bold font-nokora",
  txtInriaSansRegular20: "font-inriasans font-normal",
  txtInriaSansRegular25: "font-inriasans font-normal",
  txtKanitBold18: "font-bold font-kanit",
  txtLilitaOne48: "font-lilitaone font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
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
