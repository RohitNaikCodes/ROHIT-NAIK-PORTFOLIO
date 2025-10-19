import React from "react";
import { activitiesData } from "@/app/data";
import Link from "next/link";

const ActivityCard = ({ activity }) => {
  return (
    <div className="relative group overflow-hidden border border-accent/20 rounded-lg bg-background/50 backdrop-blur-md">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-2">
          {activity.name}
        </h3>
        <p className="text-foreground/80 mb-4">{activity.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-foreground/60 text-sm">
            {new Date(activity.date).toLocaleDateString()}
          </span>
          {activity.link && (
            <Link
              href={activity.link}
              target="_blank"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Learn More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {activitiesData.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Activities;