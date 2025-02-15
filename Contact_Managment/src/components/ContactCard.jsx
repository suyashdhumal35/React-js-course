import user from "../assets/contact.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="border-spacing-x-1 m-auto max-w-screen-xl border-t-2 flex justify-between items-center  ">
      <div className="content flex justify-center items-center">
        <img src={user} className="w-12 m-2" alt="user" />
        <div className="">
          <h1 className="text-2xl">{name}</h1>
          <h3 className="">{email}</h3>
        </div>
      </div>
      <i
        className="fa-solid text-2xl fa-trash-can "
        // onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
