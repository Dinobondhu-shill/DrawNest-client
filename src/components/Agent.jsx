

const Agent = ({agent}) => {
  const {name, email, photo, bio, phone} = agent;
  return (
    <div className="p-8 flex flex-col items-center bg-[#74b7c054] text-center rounded-md">
      <div className="mx-auto">
      <img data-aos="zoom-in-up" src={photo} alt="" className="w-32 h-32 rounded-full"/>
      </div>
      <h3 data-aos="flip-up" className="text-3xl mt-5 mb-3 font-bold text-[#bd6185]">{name}</h3>
      <p data-aos="flip-down" className="font-bold">Email: {email}</p>
      <p data-aos="flip-down" className="font-bold">Phone: {phone}</p>
      <p className="mt-5 mb-3">{bio}</p>
      
    </div>
  );
};

export default Agent;