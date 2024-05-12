"use client";
import React from 'react';
import { CalendarDays, DollarSign, IndianRupee } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SingleProjectProps = {
  project: {
    id: string; // Added an id property
    title: string;
    description: string;
    timeline: string;
    price: string;
    client: string;
  };
  isPreferred: boolean;
};

const SingleProject = (props: SingleProjectProps) => {
  const router = useRouter();
  const [randomParam, setRandomParam] = React.useState(Math.random().toString(36).substring(2, 8));

  const handleReloadAvatar = () => {
    setRandomParam(Math.random().toString(36).substring(2, 8));
  };

  const handleApplyClick = () => {
    router.push(`/freelancers/singlepost/${props.project.id}`);
  };

  console.log(props.isPreferred)
  return (
    <div className="flex justify-between items-center bg-white p-8 py-24 relative border-b-2">
      {props.isPreferred && (
        <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-md rounded-lg">
          Based on your skills & experience, you have high chances of acceptance
        </div>
      )}
      <div className="w-1/4 flex flex-col items-center">
        <Image
          src={`https://source.boringavatars.com/?${randomParam}`}
          alt={props.project.client}
          className="w-10 h-10 rounded-full mb-2"
          width={40}
          height={40}
          onClick={handleReloadAvatar}
        />
        <h3 className="text-center">{props.project.client}</h3>
      </div>
      <div className="w-1/3 text-center">
        <p>{props.project.description}</p>
      </div>
      <div className="w-1/4 flex flex-col items-start pl-20">
        <div className="flex items-center mb-2">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{props.project.timeline}</span>
        </div>
        <div className="flex items-center">
          <IndianRupee className="w-4 h-4 mr-2" />
          <span>{props.project.price}</span>
        </div>
      </div>
      <div className="w-1/6 flex justify-center">
        <button className="bg-blue-500 p-2 rounded-3xl text-white" onClick={handleApplyClick}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default SingleProject;