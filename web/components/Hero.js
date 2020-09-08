const Hero = ({ title, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
    </div>
  );
};

export default Hero;
