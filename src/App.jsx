import Section1 from "./components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.pexels.com/photos/12903195/pexels-photo-12903195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      intro:
        "Empowering satisfied customers with seamless, transparent, and secure banking experiences that redefine financial convenience every day.",
      tag: "Satisfied",
      bg: "#047857",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZDqgg2CAx0xGWx4RQlj1CLTH4fhCCBy5FwmeVE4p-G1tNyUG_rnVx740Vk0zS23Q3Zk&usqp=CAU",
      intro:
        "Bridging financial gaps for underserved communities with inclusive digital tools that enable access, growth, and stability.",
      tag: "Underserved",
      bg: "#b45309",
    },
    {
      img: "https://images.pexels.com/photos/5951750/pexels-photo-5951750.jpeg",
      intro:
        "Connecting underbanked individuals to modern digital solutions that offer financial freedom, reliability, and new opportunities.",
      tag: "Underbanked",
      bg: "#3730a3",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
