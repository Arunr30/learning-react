import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >
            <img className="w-24 h-24 rounded-full mx-auto" 
            src="https://images.pexels.com/photos/25189329/pexels-photo-25189329/free-photo-of-sweet-cupcake-with-cream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="" 
            width="384" 
            height="512" />
            <div className="pt-6 space-y-4" >
                <blockquote>
                <p className="text-lg font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, corporis?
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-50">
                    {props.username}
                </div>
                <div>
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card