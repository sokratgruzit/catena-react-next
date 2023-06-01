import { Input, Button } from "@catena-network/catena-ui-module";
// import styles from "./voiceMatter.module.css";

const VoiceMatter = props => {
  const { title, description } = props;
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };

  return (
    <div>
      <form>
        <span>{title}</span>
        <div className="content_description">{description}</div>
        <div>
          <Input
            type={"default"}
            icon={false}
            label={"EMAIL"}
            subLabel={""}
            placeholder={"Enter"}
            // value={""}
            onChange={changeHandler}
            customStyles={{ width: "500px" }}
          />
        </div>
        <div>
          <Input
            type={"default"}
            icon={false}
            label={"Name"}
            subLabel={""}
            placeholder={"Enter"}
            // value={""}
            onChange={changeHandler}
            customStyles={{ width: "500px" }}
          />
        </div>

        <div>
          <Input
            type={"textarea"}
            label={"Make a suggestion"}
            // onChange={(e) => console.log(e.target.value)}
            // value={'sad'}
            // readOnly={true}
            name={"textarea input"}
            rows={10}
            cols={20}
            // disabled={true}
            placeholder={"Please describe your feedback in detail with corresponding screenshots"}
            // autoFocus={true}
            // emptyFieldErr={true}
            resize={"both"}
          />
          <label>Limit: 1000 characters</label>
        </div>
        <div>
          <Button
            label={"Button"}
            size={"btn-lg"}
            type={"btn-primary"}
            arrow={"arrow-right"}
            element={"button"}
            disabled={false}
            onClick={() => console.log("hi")}
          />
        </div>
      </form>
    </div>
  );
};

export default VoiceMatter;
