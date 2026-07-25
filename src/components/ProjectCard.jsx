import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

function ProjectCard({imgUrl, title, description, gitUrl, previewUrl}) {
  return (
    <div className="overflow-hidden rounded-xl border border-(--border) bg-(--card) transition-all duration-300">
      <div
        className="h-52 md:h-72 relative group/card overflow-hidden"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat" 
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center bg-(--surface)/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
          <Link 
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-(--muted) hover:border-foreground group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-(--muted) absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-foreground" />
          </Link>
          <Link 
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-(--muted) hover:border-foreground group/link"
          >
            <EyeIcon className="h-10 w-10 text-(--muted) absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-foreground" />
          </Link>
        </div>
      </div>
      
      <div className="text-(--muted) py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-foreground">{title}</h5>
        <p className="text-(--muted) text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;
