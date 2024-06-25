import React from 'react';
import '../about/NewAbout.css'
import About from './About';

const NewAbout = () => {
  return (
    <div id='new-about-container'>
      <About/>
      <div className="container">
        <div id="new-about-content">
          <div id="welcome-section">
            <h2>Welcome to ICDO-Lalitpur</h2>
            {/* <img src="https://via.placeholder.com/600x400" alt="ICDO-Lalitpur Welcome" id="welcome-image"/> */}
            <p id="welcome-text">
              ICDO-Lalitpur is a dynamic, responsive, and innovative organization with institutional capacity and expertise in implementing development programs. Our focus areas include Disaster Risk Reduction (DRR), climate change adaptation, agriculture, entrepreneurship development, WASH (Water, Sanitation, and Hygiene), land rights campaigns, CBOs (Community-Based Organizations) development & strengthening, good governance, policy advocacy, and social justice. We are committed to being a partner of choice for communities, government, and other institutions, working together to enhance the well-being of communities and achieve socio-economic transformation.
            </p>
          </div>
          <div id="vision-section">
            <h2>Vision</h2>
            {/* <img src="https://via.placeholder.com/600x400" alt="Vision" id="vision-image"/> */}
            <p id="vision-text">
              ICDO envisions a self-reliant, well-governed, prosperous, just, and equitable society.
            </p>
          </div>
          <div id="mission-section">
            <h2>Mission</h2>
            {/* <img src="https://via.placeholder.com/600x400" alt="Mission" id="mission-image"/> */}
            <p id="mission-text">
              Our mission is to facilitate the capacity development of discriminated, poor, and marginalized people's organizations to identify, mobilize, and exchange resources for their empowerment. We aim to contribute to creating a self-reliant, well-governed, prosperous, just, and equitable society.
            </p>
          </div>
          <div id="goal-section">
            <h2>Goal</h2>
            {/* <img src="https://via.placeholder.com/600x400" alt="Goal" id="goal-image"/> */}
            <p id="goal-text">
              Our goal is to uplift the living standards of discriminated, poor, and marginalized people by enabling them to claim their rights.
            </p>
          </div>
          <div id="objectives-section">
            <h2>Objectives</h2>
            <ul>
              <li>Organize skill-based and income-generating programs uniting poor, marginalized people of the oppressed community.</li>
              <li>Uplift the living standard of poor and marginalized members organized in different groups through sustainable livelihood programs.</li>
              <li>Reduce vulnerability and increase resiliency through Disaster Risk Management.</li>
              <li>Promote human rights through rights-based programs.</li>
              <li>Build capacity of impact groups to identify and manage available resources, local knowledge, skill, and technology.</li>
              <li>Empower, enhance, and ensure the institutional development of communities for conservation and sustainable management of biodiversity and ecosystem services.</li>
              <li>Increase advocacy skills of the target communities to ensure basic rights of women, vulnerable, and marginalized people.</li>
              <li>Increase access to basic goods and services for target communities and groups.</li>
              <li>Develop institutional governance practice with emphasis on gender, social inclusion, and organizational accountability.</li>
            </ul>
          </div>
          <div id="approach-section">
            <h2 className='newAboutHeading'>Working Approach</h2>
            <img className='newAboutImg' src="/image/work.jpg" alt="Working Approach" id="approach-image"/>
            <p id="approach-text">
              The purpose of ICDO-Lalitpur's working modality is to contribute to the development of self-reliant groups, CBOs, or cooperatives capable of continuing the project interventions and growing or graduating on their own even after the exit of ICDO-Lalitpur.
            </p>
            <ul>
              <li>
                <strong>Local community-led organizations:</strong> ICDO-Lalitpur emphasizes strengthening local organizations led and owned by community groups. We facilitate the enhancement of their capacities and competency to bargain, negotiate, influence, and take stake in decisions affecting them.
              </li>
              <li>
                <strong>Multi-stakeholder partnership and collaboration:</strong> We aim to work in partnership with local, regional, national, and international organizations to align and harmonize efforts for resilient livelihoods and enhancing food security of priority populations.
              </li>
              <li>
                <strong>Rights-based approach:</strong> Focuses on empowering rights holders and building their critical mass to claim their rights responsibly while engaging and supporting duty bearers to strengthen their capacities to fulfill these rights.
              </li>
              <li>
                <strong>Community-based empowerment approach:</strong> Enhances and builds competencies and capacities of people, particularly the poor and oppressed, enabling them to direct their own development as individuals and active community members.
              </li>
              <li>
                <strong>Promoting innovative technologies and practices:</strong> We aim to design, pilot, and implement innovative and environmentally sustainable, climate-resilient technologies and practices that help society and the nation manage the environment and address climate change issues.
              </li>
            </ul>
          </div>
          <div id="target-group-section">
            <h2 className='newAboutHeading'>Target Group</h2>
            <img className='newAboutImg' src="/image/work2.jpg" alt="Target Group" id="target-group-image"/>
            <p id="target-group-text">
              ICDO-Lalitpur works with disaster-affected, marginalized, and vulnerable people who are socioeconomically disadvantaged. Priority is given to women, people with disabilities, and the landless. We work with both rural and urban populations, emphasizing remote and vulnerable households and communities.
            </p>
          </div>
          <div id="core-principles-section">
            <h2 className='newAboutHeading'>Core Principles and Values</h2>
            <img className='newAboutImg' src="/image/work1.jpg" alt="Core Principles and Values" id="core-principles-image"/>
            <ul>
              <li>Accountability and transparency</li>
              <li>Inclusive and participatory</li>
              <li>Adherence to rights and duty</li>
              <li>Impartiality and democratic practice</li>
              <li>Unity and mutual cooperation</li>
              <li>Respect for the rights of discriminated, poor, and marginalized people and communities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
