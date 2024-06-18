import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";

function Banner({ title, content, background }) {
  return (
    <div
      className="relative w-full bg-cardBG border border-accent rounded-xl md:h-64 md:grid-2"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${background})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="m-5 md:text-left">
        <div className="inline-flex items-center">
          <p className="text-2xl font-bold md:text-start">{title}</p>
          <Badge className="p-1 bg-gray-800 text-white ml-14" variant="outline">featured</Badge>
        </div>
        <p className="md:text-start md:w-96 md:mt-4">{content}</p>
      </div>
    </div>
  );
}

export default Banner;