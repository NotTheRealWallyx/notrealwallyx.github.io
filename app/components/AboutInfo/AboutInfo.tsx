import { AboutInfoCard } from '@components/AboutInfoCard/AboutInfoCard';

export function AboutInfo() {
  const experienceItems = [
    {
      date: '2024 - Present',
      role: 'Co-Founder & Engineering',
      location: 'Particel (United Kingdom)',
    },
    {
      date: '2022 - Present',
      role: 'Head of Engineering',
      location: 'Hivebound (United Kingdom)',
    },
    {
      date: '2020 - 2022',
      role: 'Software Engineer',
      location: 'Eigen Technologies (United Kingdom)',
    },
    {
      date: '2017 - 2019',
      role: 'Full Stack Developer',
      location: 'SUUMA&B10 Projects (Spain)',
    },
    {
      date: '2016 - 2017',
      role: 'WordPress Developer',
      location: 'Serinfor Marketing (Spain)',
    },
    {
      date: '2015',
      role: 'WordPress Developer',
      location: 'A2 Informatica (Spain)',
    },
  ];

  const educationItems = [
    {
      date: '2015 - 2016',
      role: 'Mobile Applications Development',
      location: 'IES Uni Eibar Ermua (Spain)',
    },
    {
      date: '2013 - 2015',
      role: 'Web Applications Development',
      location: 'IESFPS Zornotza (Spain)',
    },
    {
      date: '2011 - 2013',
      role: 'Informatics Engineering',
      location: 'Mondragon University (Spain)',
    },
    {
      date: '2009 - 2011',
      role: 'Technological Scientific Bachelor',
      location: 'Maristak Durango (Spain)',
    },
  ];

  return (
    <>
      <AboutInfoCard title="Experience" items={experienceItems} />
      <AboutInfoCard title="Education" items={educationItems} />
    </>
  );
}
