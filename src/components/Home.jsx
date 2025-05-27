import React, { useState } from 'react';

import CoffeeCard from './CoffeeCard';
import { useLoaderData } from 'react-router';

const Home = () => {
 const initialCoffees = useLoaderData();
const [coffees, setCoffees] = useState(initialCoffees)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {
                coffees.map(coffee => (
                    <CoffeeCard 
                    coffees={coffees}
                    setCoffees={setCoffees}
                    key={coffee._id}
                     coffee={coffee} />
                ))
            }
        </div>
    );
};

export default Home;
