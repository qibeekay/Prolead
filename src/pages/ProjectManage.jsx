import React from 'react';
import BusHero from '../components/BusHero';
import ProjectHero from '../components/ProjectHero';

const ProjectManage = () => {
	const h1 = 'Project Management';
	const link = 'project-management';
	const bg = 'bg-project';

	return (
		<div>
			<div>
				<BusHero me={h1} to={link} bg={bg} />
				<ProjectHero />
			</div>
		</div>
	);
};

export default ProjectManage;
