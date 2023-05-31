import { Button } from "@catena-network/catena-ui-module";

export default function LogoVariations() {
  const logosVariations = [
    {
      image: "/images/guideLines/Logo.png",
      imageTwo: "/images/guideLines/Logo.png",
      title: "Logo Variations",
      text: "Here is an acceptable alternative version of the logo.  Other alternatives will be added over time.",
    },
  ];
  return (
    <div>
      {logosVariations.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="logo" />
            <img src={item.imageTwo} alt="logo" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Button
                label={"Download All Variants"}
                size={"btn-lg"}
                type={"btn-primary"}
                arrow={"arrow-none"}
                element={"button"}
                disabled={false}
                onClick={() => console.log("hi")}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
