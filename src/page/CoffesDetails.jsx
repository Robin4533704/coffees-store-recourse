import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoffesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch coffee:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Corrected loading condition
  if (loading) return <span className="loading mx-auto loading-spinner loading-xl"></span>;

  if (!details) return <p className='text-red-500'>Could not load coffee details.</p>;

  return (
    <div className='bg-gray-200'>
        <h1 className="text-2xl font-bold p-14">Coffee Details</h1>
         <div className=" flex  items-center gap-14 justify-center  ">
<div className=' rounded'>
    <img className='text w-[250px] h-[350px]  rounded' src={details.photo} alt="" />
</div>
<div>
 <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Price:</strong> {details.price}</p>
      <p><strong>Quantity:</strong> {details.quantity}</p>
      <p><strong>Supplier:</strong> {details.supplier}</p>
      <p><strong>Taste:</strong> {details.taste}</p>
</div>

    </div>
    </div>
   
  );
};

export default CoffesDetails;
