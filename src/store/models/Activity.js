import Base from "./Base";

export default function Activity() {
    Base.call(this);
    this.id = null;
    this.name = null;
    this.description = null;
    this.type = "activity";
    this.image_logo = null;


    this.fromJSON = (json) => {
        this.id = json.id;
        this.name = json.name;
        this.description = json.description;
        this.type = json.type;
        this.image_logo = json.image_logo;
    };
}