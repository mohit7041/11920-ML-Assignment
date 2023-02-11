import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FormControl, FormLabel, Slider, Typography } from '@mui/material';
import Question from '../components/Question';
// import csvwriter
import { createObjectCsvWriter } from 'csv-writer';
import { CSVLink } from 'react-csv';

import axios from 'axios';
import * as tf from '@tensorflow/tfjs';

const Quiz = () => {
  const initialState = {
    activeLearning: 0,
    activeListening: 0,
    complexProblemSolving: 0,
    coordination: 0,
    criticalThinking: 0,
    equipmentMaintenance: 0,
    equipmentSelection: 0,
    installation: 0,
    intructing: 0,
    judgmentAndDecisionMaking: 0,
    learningStrategies: 0,
    managementOfFinancialResources: 0,
    managementOfMaterialResources: 0,
    managementOfPersonnelResources: 0,
    mathematics: 0,
    monitoring: 0,
    negotiation: 0,
    operationAndControl: 0,
    operationAnalysis: 0,
    operationMonitoring: 0,
    persuasion: 0,
    programming: 0,
    qualityControlAnalysis: 0,
    readingComprehension: 0,
    repairing: 0,
    science: 0,
    serviceOrientation: 0,
    socialPerceptiveness: 0,
    speaking: 0,
    systemAnalysis: 0,
    systemEvaluation: 0,
    technologyDesign: 0,
    timeManagement: 0,
    troubleshooting: 0,
    writing: 0,
  };

  const [model, setModel] = useState(null);

  const [success, setSuccess] = useState(false);

  const [answers, setAnswers] = useState(initialState);

  const allValuesZero = Object.values(answers).every((value) => value === 0);

  // check if all values are hundred
  const allValuesHundred = Object.values(answers).every(
    (value) => value === 100
  );
  const [jsonData, setJsonData] = useState('');

  // get model from drive
  const getModel = async () => {
    const response = await axios.get('../ml/bagging_model.pkl', {
      responseType: 'arraybuffer',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response;
  };

  useEffect(() => {
    // axios
    //   .get('https://drive.google.com/uc?id=1pBD8ZXKbuenQSwUBnA43-bzqBwBHCdrM', {
    //     responseType: 'arraybuffer',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   })
    //   .then((response) => {
    //     setModel(tf.loadLayersModel(new Uint8Array(response.data)));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    getModel();
  }, []);

  console.log(model);

  const handleForm = (e) => {
    e.preventDefault();
    if (allValuesZero) {
      alert('Please fill the form');
    }

    if (allValuesHundred) {
      alert(
        'According to input given you are eligible for every field but as per our suggestion you should pursue arts,design,entertainment,sports and media occupation or go to mars.'
      );
    }
    console.log(answers);
    setSuccess(true);
    console.log(JSON.stringify(answers));
    setJsonData(JSON.stringify(answers));

    setAnswers(initialState);
  };

  const handleChange = (question) => (event, newValue) => {
    setAnswers({ ...answers, [question]: newValue });
  };
  return (
    <>
      <Navbar />
      <section className="quiz"></section>

      <div className="px-[10rem] my-5">
        <p className="text-lg">
          <span className="font-bold">NOTE:</span> According to below
          description, rate your level of skill on a scale from{' '}
          <span className="font-bold">0</span> to{' '}
          <span className="font-bold">100</span>.
        </p>
        <p className="text-lg">
          <span className="font-bold">0</span> being absolutely{' '}
          <span className="font-bold">
            No Knowledge and Capability to acquire that skill
          </span>{' '}
          and <span className="font-bold">100</span> being{' '}
          <span className="font-bold">Complete Proficieny in that skill.</span>
        </p>
      </div>

      <div>
        <form>
          <Question
            info="Understanding written sentences and paragraphs in work-related documents."
            value={answers.readingComprehension}
            category="1. Reading Comprehension"
            onChange={handleChange('readingComprehension')}
          />
          <Question
            info="Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times."
            value={answers.activeListening}
            category="2. Active Listening"
            onChange={handleChange('activeListening')}
          />
          <Question
            info="Communicating effectively in writing as appropriate for the needs of the audience."
            value={answers.writing}
            category="3. Writing"
            onChange={handleChange('writing')}
          />
          <Question
            info="Talking to others to convey information effectively."
            value={answers.speaking}
            category="4. Speaking"
            onChange={handleChange('speaking')}
          />
          <Question
            info="Using mathematics to solve problems."
            value={answers.mathematics}
            category="5. Mathematics"
            onChange={handleChange('mathematics')}
          />
          <Question
            info="Using scientific rules and methods to solve problems."
            value={answers.science}
            category="6. Science"
            onChange={handleChange('science')}
          />
          <Question
            info="Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems."
            value={answers.criticalThinking}
            category="7. Critical Thinking"
            onChange={handleChange('criticalThinking')}
          />
          <Question
            info="Understanding the implications of new information for both current and future problem solving and decision-making."
            value={answers.activeLearning}
            category="8. Active Learning"
            onChange={handleChange('activeLearning')}
          />
          <Question
            info="Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things."
            value={answers.learningStrategies}
            category="9. Learning Strategies"
            onChange={handleChange('learningStrategies')}
          />
          <Question
            info="Monitoring/assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action."
            value={answers.monitoring}
            category="10.	Monitoring"
            onChange={handleChange('monitoring')}
          />
          <Question
            info="Being aware of others’ reactions and understanding why they react as they do."
            value={answers.socialPerceptiveness}
            category="11. Social Perceptiveness"
            onChange={handleChange('socialPerceptiveness')}
          />
          <Question
            info="Adjusting actions in relation to others’ actions."
            value={answers.coordination}
            category="12.	Coordination"
            onChange={handleChange('coordination')}
          />
          <Question
            info="Persuading others to change their minds or behavior."
            value={answers.persuasion}
            category="13.	Persuasion"
            onChange={handleChange('persuasion')}
          />
          <Question
            info="MBringing others together and trying to reconcile differences."
            value={answers.negotiation}
            category="14.	Negotiation"
            onChange={handleChange('negotiation')}
          />
          <Question
            info="Teaching others how to do something."
            value={answers.intructing}
            category="15.	Instructing"
            onChange={handleChange('intructing')}
          />
          <Question
            info="Actively looking for ways to help people."
            value={answers.serviceOrientation}
            category="16.	Service Orientation"
            onChange={handleChange('serviceOrientation')}
          />
          <Question
            info="Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions."
            value={answers.complexProblemSolving}
            category="17.	Complex Problem Solving"
            onChange={handleChange('complexProblemSolving')}
          />
          <Question
            info="Analyzing needs and product requirements to create a design."
            value={answers.operationAnalysis}
            category="18.	Operations Analysis"
            onChange={handleChange('operationAnalysis')}
          />
          <Question
            info="Generating or adapting equipment and technology to serve user needs."
            value={answers.technologyDesign}
            category="19. Technology Design"
            onChange={handleChange('technologyDesign')}
          />
          <Question
            info="Determining the kind of tools and equipment needed to do a job."
            value={answers.equipmentSelection}
            category="20. Equipment Selection"
            onChange={handleChange('equipmentSelection')}
          />
          <Question
            info="Installing equipment, machines, wiring, or programs to meet specifications."
            value={answers.installation}
            category="21.	Installation"
            onChange={handleChange('installation')}
          />
          <Question
            info="DWriting computer programs for various purposes."
            value={answers.programming}
            category="22.	Programming"
            onChange={handleChange('programming')}
          />
          <Question
            info="Conducting tests and inspections of products, services, or processes to evaluate quality or performance."
            value={answers.qualityControlAnalysis}
            category="23. Quality Control Analysis"
            onChange={handleChange('qualityControlAnalysis')}
          />
          <Question
            info="Watching gauges, dials, or other indicators to make sure a machine is working properly."
            value={answers.operationMonitoring}
            category="24.	Operations Monitoring"
            onChange={handleChange('operationMonitoring')}
          />
          <Question
            info="Controlling operations of equipment or systems."
            value={answers.operationAndControl}
            category="25.	Operation and Control"
            onChange={handleChange('operationAndControl')}
          />
          <Question
            info="Performing routine maintenance on equipment and determining when and what kind of maintenance is needed."
            value={answers.equipmentMaintenance}
            category="26.	Equipment Maintenance"
            onChange={handleChange('equipmentMaintenance')}
          />
          <Question
            info="Determining causes of operating errors and deciding what to do about it."
            value={answers.troubleshooting}
            category="27.	Troubleshooting"
            onChange={handleChange('troubleshooting')}
          />
          <Question
            info="Repairing machines or systems using the needed tools."
            value={answers.repairing}
            category="28.	Repairing"
            onChange={handleChange('repairing')}
          />
          <Question
            info="Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes."
            value={answers.systemAnalysis}
            category="29.	Systems Analysis"
            onChange={handleChange('systemAnalysis')}
          />
          <Question
            info="Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system."
            value={answers.systemEvaluation}
            category="30.	Systems Evaluation"
            onChange={handleChange('systemEvaluation')}
          />
          <Question
            info="Considering the relative costs and benefits of potential actions to choose the most appropriate one."
            value={answers.judgmentAndDecisionMaking}
            category="31.	Judgment and Decision Making"
            onChange={handleChange('judgmentAndDecisionMaking')}
          />
          <Question
            info="Managing one’s own time and the time of others."
            value={answers.timeManagement}
            category="32.	Time Management"
            onChange={handleChange('timeManagement')}
          />
          <Question
            info="Determining how money will be spent to get the work done, and accounting for these expenditures."
            value={answers.managementOfFinancialResources}
            category="33.	Management of Financial Resources"
            onChange={handleChange('managementOfFinancialResources')}
          />
          <Question
            info="Obtaining and seeing to the appropriate use of equipment, facilities, and materials needed to do certain work."
            value={answers.managementOfMaterialResources}
            category="34.	Management of Material Resources"
            onChange={handleChange('managementOfMaterialResources')}
          />
          <Question
            info="Motivating, developing, and directing people as they work, identifying the best people for the job."
            value={answers.managementOfPersonnelResources}
            category="35.	Management of Personnel Resources"
            onChange={handleChange('managementOfPersonnelResources')}
          />
          <div className="text-center">
            <a
              type="submit"
              onClick={handleForm}
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 cursor-pointer mx-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Submit</span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Quiz;
