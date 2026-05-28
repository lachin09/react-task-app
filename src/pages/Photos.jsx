import { Link } from "react-router-dom"
import Card from "../components/common/card"

const products=[
  {
    name: "Mountain view",
    description: "Explore the most beautiful mountains with us this summer.",
    price: 199,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Beach paradise",
    description: "Relax on the most beautiful beaches with us this summer.",
    price: 299,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBwYXJkaXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "City lights",
    description: "Experience the most vibrant cities with us this summer.",
    price: 399,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGxpZ2h0c3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=800&q=60"
  }
]





export default function Photos() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        <Card product={products[0]}/>
        <Card product={products[1]}/>
        <Card product={products[2]}/>
      </div>
    </div>
  )
}
