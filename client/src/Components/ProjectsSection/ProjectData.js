//This file will contain multpile objects each referring to information pertaining to a Project which can then be looped through to create ProjectCards
//All the Data objects should follow the same format:
// {
// title: 'Project Title',
// desc: 'Project Description',
// techUsed: ['List', 'of', 'Strings', 'of', 'Technology', 'Used'],
// img: 'imported path to img',
// link: 'link to live project or github repo',
// }
import ProjectImg1 from '../../images/PassTheDishes-Capture.jpg';
import ProjectImg2 from '../../images/techNinja-Capture.jpg';

const ProjectData = [
	{
		title: 'Recipe Share application',
		desc: 'PassTheDishes is a recipe sharing and analysis application to share, comment and analyze recipes with different users. Users can input their favourite recipes and the Edamam API will process the recipe and provide nutritional info',
		techUsed: ['React.js', 'Redux', 'Express', 'Node.js', 'Firebase'],
		img: ProjectImg1,
		link: 'https://github.com/niroshian-b/pass-the-dishes',
	},
	{
		title: 'E-commerce site',
		desc: 'TechNinja is an E-commerce website to display different types of wearable technology. Although users cannot currently purchase the products, it does simulate a purchase without the transaction information and updates stock quantities as well.',
		techUsed: ['React.js', 'Redux', 'Express', 'Node.js'],
		img: ProjectImg2,
		link: 'https://github.com/niroshian-b/e-commerce-site',
	},
];

export default ProjectData;
