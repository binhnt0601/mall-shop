import Image from "next/image";

export default function Background({ textBackground, imgSrc }) {
  return (
    // <>
    //   {textBackground ? (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${imgSrc.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "calc(100vh - 70px)",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {textBackground}
    </div>
    //   ) : (
    //     <div
    //       style={{
    //         position: "relative",
    //         width: "100%",
    //         clipPath: "inset(0 0 0 0)",
    //         zIndex: "-10",
    //       }}
    //     >
    //       <Image
    //         src={imgSrc[0]}
    //         sizes="100vw"
    //         className="hidden sm:block"
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //           minHeight: "17rem",
    //         }}
    //         alt="background"
    //       />
    //       <Image
    //         src={imgSrc[1]}
    //         sizes="100vw"
    //         className="block sm:hidden"
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //           minHeight: "15rem",
    //         }}
    //         alt="background"
    //       />
    //     </div>
    //   )}
    // </>
  );
}
