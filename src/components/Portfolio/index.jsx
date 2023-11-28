import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'weatherDashboard',
      description: 'Weather Dashbord',
      link: "https://dianafabela8.github.io/weather-dashboard/",
      repo: "https://github.com/dianafabela8/weather-dashboard"
    },
    {
      name: 'workdayScheduler',
      description: 'Workday Scheduler',
      link: "https://dianafabela8.github.io/work-day-scheduler/",
      repo: "https://github.com/dianafabela8/work-day-scheduler"
    },
    {
      name: 'noteTaker',
      description: 'Note Taker',
      link: "https://notetaker-df-aedb61e4e9dd.herokuapp.com",
      repo: "https://github.com/dianafabela8/note-taker"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
