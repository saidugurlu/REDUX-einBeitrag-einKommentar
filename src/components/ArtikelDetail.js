import { useParams } from "react-router-dom";

import React from "react";

const ArtikelDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ArtikelDetail</div>;
};

export default ArtikelDetail;
