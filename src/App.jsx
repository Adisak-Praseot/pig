import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const imageSrc =
    level >99
      ? "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/448561572_462384329717330_4278055010147953341_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHjr74p1Pm6jQBFMRVzi3kUZAx9_NOD_jhkDH3804P-ODi-z7egiEH6XbNbqrp2NP2rrI4BwoDn8L3KBSgKEeUY&_nc_ohc=jn_PtF5Zde8Q7kNvgEVX83x&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AHRnu-C_54Vx3-8HNMDva0A&oh=03_Q7cD1QGbf6bEnsO9UBYI1b3u4xvtaNpFdGpPwOUEmwFefNuSeQ&oe=670B79D6" // Replace with the image URL you want when level is over 100
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBb0tSK7MJ7Z6j_eKMXneHgpOKNmcPDdDw4w&s";

  return (
    <>
      <h1>Level {level}</h1>
      <img src={imageSrc} alt="หมูเด้ง" height={200 + level} />
      <br />

      <button onClick={() => feed(5)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5D5dFz-8qf8nvKS8XwlN7UIvHGiZ3uo36Q&s"
          alt="แตงโม"
          height={100}
        />
      </button>
      <button onClick={() => feed(10)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuOiTeV3GLsunlvLi7GdBsc280rf_L-dUQQ&s"
          alt="ฟักทอง"
          height={100}
        />
      </button>
      <button onClick={() => feed(20)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKgLSc_KF2s3qs45FiU08LPYzfdm_qXWfdw&s"
          alt="หญ้า"
          height={100}
        />
      </button>
    </>
  );
}